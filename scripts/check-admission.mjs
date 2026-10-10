import { readFileSync } from 'node:fs';

const T = '/private/var/folders/v7/4rfwv9897wgcv5vfj7yy3ybr0000gp/T/opencode';

for (const id of ['953:14836', '960:15572', '960:15659', '960:15758']) {
  console.log(`=== Checking ${id} ===`);
  const f = `${T}/adm_${id.replace(':', '_')}.json`;
  const d = JSON.parse(readFileSync(f, 'utf8'));
  const k = Object.keys(d.nodes || {})[0];
  if (!k) { console.log('NOT FOUND'); continue; }
  const n = d.nodes[k].document;
  console.log('name:', n.name, 'type:', n.type, 'children:', (n.children || []).length);
  (n.children || []).forEach((c, i) => console.log('  ', i, c.type, c.name));
}