#!/usr/bin/env node
/**
 * Phase 1 audit helper (2/2) — resolve FIGMA VARIABLE ALIASES to concrete values.
 *
 * The Figma REST API cannot list variable names for this token (it lacks the
 * `file_variables:read` scope), but every node that is bound to a variable
 * still reports its RESOLVED value. So we recover a factual
 * `variableId -> value` map by walking the frames. Variable names remain
 * unknown and are explicitly reported as unknown.
 *
 * READ ONLY. Requires FIGMA_ACCESS_TOKEN in the environment.
 */
const KEY = process.env.FIGMA_FILE_KEY ?? '5cx1t71DbC23GlziY7xZPQ';
const NODES = (process.env.FIGMA_NODE_IDS ?? '941-11077,941-12316').split(',');

const hex = (c = {}) =>
  '#' + [c.r ?? 0, c.g ?? 0, c.b ?? 0]
    .map((v) => Math.round(v * 255).toString(16).padStart(2, '0'))
    .join('').toUpperCase();

/** slotName -> "VariableID:940:4710 = #FFFFFF" */
const resolved = new Map();
const record = (slot, aliasId, value) => {
  if (!aliasId || value == null || value === '') return;
  if (!resolved.has(aliasId)) resolved.set(aliasId, new Map());
  const m = resolved.get(aliasId);
  const key = slot ?? '(unbound-slot)';
  if (!m.has(key)) m.set(key, new Map());
  const vm = m.get(key);
  vm.set(String(value), (vm.get(String(value)) ?? 0) + 1);
};

function aliasOf(paint, slot) {
  const bv = paint?.boundVariables;
  const hit = bv?.[slot] ?? bv?.[Object.keys(bv ?? {})[0]];
  return hit?.type === 'VARIABLE_ALIAS' ? hit.id : null;
}

function walk(n) {
  // Colour bindings: fills -> color, strokes -> color
  for (const f of n.fills ?? []) record('color', aliasOf(f, 'color'), hex(f.color));
  for (const s of n.strokes ?? []) record('color', aliasOf(s, 'color'), hex(s.color));

  // Number bindings on auto-layout + sizing + radius + stroke + font + effects
  const bv = n.boundVariables ?? {};
  const num = (slot, value) => {
    const a = bv[slot];
    if (a?.type === 'VARIABLE_ALIAS') record(slot, a.id, value);
  };
  num('width', n.width != null ? Math.round(n.width * 100) / 100 : null);
  num('height', n.height != null ? Math.round(n.height * 100) / 100 : null);
  num('itemSpacing', n.itemSpacing);
  num('paddingTop', n.paddingTop);
  num('paddingBottom', n.paddingBottom);
  num('paddingLeft', n.paddingLeft);
  num('paddingRight', n.paddingRight);
  num('cornerRadius', n.cornerRadius);
  num('strokeWeight', n.strokeWeight);
  num('opacity', n.opacity);
  num('fontSize', n.style?.fontSize);
  num('lineHeight', n.style?.lineHeightPx);
  num('letterSpacing', n.style?.letterSpacing);

  for (const e of n.effects ?? []) {
    if (e.boundVariables?.radius) record('effectRadius', e.boundVariables.radius.id, e.radius);
    if (e.boundVariables?.color) record('effectColor', e.boundVariables.color.id, hex(e.color));
  }
  for (const c of n.children ?? []) walk(c);
}

for (const id of NODES) {
  const res = await fetch(`https://api.figma.com/v1/files/${KEY}/nodes?ids=${id}`, {
    headers: { 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN },
  });
  const d = await res.json();
  const k = Object.keys(d.nodes ?? {})[0];
  if (k) walk(d.nodes[k].document);
}

const rows = [...resolved.entries()]
  .map(([vid, slots]) => {
    const parts = [...slots.entries()].map(([slot, vals]) => {
      const v = [...vals.entries()].sort((a, b) => b[1] - a[1]).map(([val]) => val);
      return v.length === 1 ? `${slot}=${v[0]}` : `${slot}=[${v.join(', ')}]`;
    });
    return { vid, desc: parts.join('  ') };
  })
  .sort((a, b) => a.vid.localeCompare(b.vid));

console.log(`RESOLVED VARIABLE BINDINGS (${rows.length} distinct variable IDs)\n`);
console.log('variable ID            resolved value(s) seen in the two frames');
console.log('-'.repeat(96));
for (const r of rows) console.log(`${r.vid.padEnd(24)}${r.desc}`);
console.log('\nVariable NAMES are not retrievable with this token (needs file_variables:read scope).');