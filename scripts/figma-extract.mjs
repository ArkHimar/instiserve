#!/usr/bin/env node
/**
 * Phase 1 audit helper — READ ONLY against the Figma REST API.
 * Extracts observable design values (fills, type, spacing, radii, strokes)
 * from the two DESIGN SYSTEMS frames so the audit is grounded in facts
 * rather than guesses.
 *
 * Requires FIGMA_ACCESS_TOKEN in the environment. Never prints the token.
 */

const KEY = process.env.FIGMA_FILE_KEY ?? '5cx1t71DbC23GlziY7xZPQ';
const NODES = (process.env.FIGMA_NODE_IDS ?? '941-11077,941-12316').split(',');

const hex = (r, g, b) =>
  '#' + [r, g, b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();

function paintToHex(p) {
  // Figma omits `visible` when true, so only reject explicit visible:false.
  if (!p || p.type !== 'SOLID' || p.visible === false) return null;
  const c = p.color ?? {};
  const base = hex(c.r ?? 0, c.g ?? 0, c.b ?? 0);
  if (c.a === undefined || c.a === 1) return base;
  // Composite against white so the swatch reads correctly.
  const a = c.a;
  const m = (v) => Math.round(v * 255 * a + 255 * (1 - a));
  const r = m(c.r ?? 0), g = m(c.g ?? 0), b2 = m(c.b ?? 0);
  return `#${[r, g, b2].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()} (alpha ${a})`;
}

const counters = {
  fills: new Map(), strokes: new Map(), fontFamily: new Map(),
  fontSize: new Map(), fontWeight: new Map(), lineHeight: new Map(),
  letterSpacing: new Map(), radii: new Map(), strokeWeight: new Map(),
  effects: new Map(), gaps: new Map(), padding: new Map(),
  varRefs: new Map(),
};
const bump = (map, key) => { if (key != null && key !== '') map.set(String(key), (map.get(String(key)) ?? 0) + 1); };

/** Record any VARIABLE_ALIAS bindings so we learn which variables the file uses. */
function collectVarRefs(paints) {
  for (const p of paints ?? []) {
    const bv = p?.boundVariables;
    if (!bv) continue;
    for (const slot of Object.values(bv)) {
      if (slot && slot.type === 'VARIABLE_ALIAS') bump(counters.varRefs, slot.id);
    }
  }
}

function walk(node, depth = 0) {
  if (!node) return;

  collectVarRefs(node.fills);
  collectVarRefs(node.strokes);
  for (const f of node.fills ?? []) bump(counters.fills, paintToHex(f));
  for (const s of node.strokes ?? []) bump(counters.strokes, paintToHex(s));
  if (node.strokeWeight) bump(counters.strokeWeight, node.strokeWeight);
  if (node.cornerRadius != null && node.cornerRadius !== 0) bump(counters.radii, node.cornerRadius);
  for (const e of node.effects ?? []) if (e.visible !== false && e.type === 'DROP_SHADOW') {
    const o = e.offset ?? {};
    bump(counters.effects, `x${o.x ?? 0} y${o.y ?? 0} blur${e.radius ?? 0} spread${e.spread ?? 0} ${paintToHex(e.color) ?? ''}`);
  }

  if (node.type === 'TEXT') {
    bump(counters.fontFamily, node.style?.fontFamily);
    bump(counters.fontSize, node.style?.fontSize);
    bump(counters.fontWeight, node.style?.fontWeight);
    bump(counters.lineHeight, `${node.style?.lineHeightPx}px (${node.style?.lineHeightPercentFontSize ?? '?'}%)`);
    bump(counters.letterSpacing, node.style?.letterSpacing);
  }

  if (node.layoutMode && node.layoutMode !== 'NONE') {
    bump(counters.gaps, node.itemSpacing);
    for (const side of ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']) bump(counters.padding, node[side]);
  }

  for (const c of node.children ?? []) walk(c, depth + 1);
}

const label = (m) =>
  [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))
    .map(([k, n]) => `  ${String(k).padEnd(34)} x${n}`).join('\n');

for (const nodeId of NODES) {
  const res = await fetch(`https://api.figma.com/v1/files/${KEY}/nodes?ids=${nodeId}`, {
    headers: { 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN },
  });
  const data = await res.json();
  const key = Object.keys(data.nodes ?? {})[0];
  if (!key) { console.log(`node ${nodeId}: NOT FOUND — ${JSON.stringify(data).slice(0, 200)}`); continue; }
  const doc = data.nodes[key].document;

  for (const k of Object.keys(counters)) counters[k].clear();
  walk(doc);

  console.log('\n' + '='.repeat(72));
  console.log(`FRAME  node ${nodeId}  "${doc.name}"  ${Math.round(doc.absoluteBoundingBox?.width ?? 0)}x${Math.round(doc.absoluteBoundingBox?.height ?? 0)}`);
  console.log('='.repeat(72));
  for (const [title, key2] of [
    ['FILL COLORS', 'fills'], ['STROKE COLORS', 'strokes'], ['FONT FAMILY', 'fontFamily'],
    ['FONT SIZE (px)', 'fontSize'], ['FONT WEIGHT', 'fontWeight'], ['LINE HEIGHT', 'lineHeight'],
    ['LETTER SPACING', 'letterSpacing'], ['CORNER RADIUS (px)', 'radii'], ['STROKE WEIGHT (px)', 'strokeWeight'],
    ['SHADOWS', 'effects'], ['AUTO-LAYOUT GAP (px)', 'gaps'], ['AUTO-LAYOUT PADDING (px)', 'padding'],
    ['VARIABLE ALIAS REFS', 'varRefs'],
  ]) {
    if (counters[key2].size === 0) continue;
    const n = counters[key2].size;
    console.log(`\n## ${title}  (${n} distinct)`);
    console.log(label(counters[key2]));
  }
}
console.log('\n(read-only extraction complete)');