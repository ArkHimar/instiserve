# Implementation Rules — InstiServe Design System

**Audience:** Developers implementing the InstiServe design system in code
**Source of truth:** Figma file `5cx1t71DbC23GlziY7xZPQ` + this documentation
**Prerequisite:** Read `FIGMA-HANDOFF.md` first

---

## 1. Token discipline (non-negotiable)

### 1.1 No raw values in component code

```tsx
// ❌ FORBIDDEN
<button style={{ backgroundColor: '#0088FF' }}>

// ✅ REQUIRED
<button className="ui-btn ui-btn--primary">
// or
<button style={{ backgroundColor: 'var(--color-brand-primary)' }}>
```

All colours, spacing, radii, type sizes, shadows, durations, and z-indices **must** come from the token layer (CSS custom properties or a TypeScript token object). The token layer is generated from `figma-token-map.md`.

### 1.2 Token naming in code

| Layer | Convention | Example |
|---|---|---|
| CSS custom properties | `--color-brand-primary`, `--space-4`, `--radius-pill` | `var(--color-brand-primary)` |
| TypeScript tokens (if used) | `color.brand.primary`, `space[4]`, `radius.pill` | `tokens.color.brand.primary` |
| Figma variable IDs | Not used in code | — |

---

## 2. Colour system rules

### 2.1 Brand blue hierarchy

| Role | Token | Usage |
|---|---|---|
| Primary action fill | `--color-brand-primary` (`#0088FF`) | Primary buttons, selected indicators, switch thumbs |
| Supporting blue (text-safe) | `--color-brand-supporting-blue` (`#0066CC`) | **Text on primary buttons**, small blue links, hover on primary |
| Accent (titles) | `--color-brand-accent` (`#242749`) | Page titles, section headers, emphasis |

**Rule:** Never use `#0088FF` for text. Use `#0066CC` (5.57:1 on white, AA pass). The Figma file states: *"White text on the original blue is retained for source fidelity, not an AA contrast claim."*

### 2.2 Neutral scale — map to nearest, document deltas

Figma's primary text `#141313` ≠ `neutral/900` (`#171717`). Figma's muted `#686978` ≠ `neutral/500` (`#737373`).

```css
/* Option A: Exact Figma fidelity (recommended for pixel parity) */
--color-text-primary: #141313;
--color-text-muted: #686978;

/* Option B: Pure neutral scale (simpler, slight visual diff) */
--color-text-primary: var(--color-neutral-900);  /* #171717 */
--color-text-muted: var(--color-neutral-500);    /* #737373 */
```

**Decision required:** Pick one and apply consistently. Document the choice.

### 2.3 Status colours — proposed, not final

Success (`#067647`/`#ECFDF3`/`#ABEFC6`) and Warning (`#93370D`/`#FFFAEB`/`#FEDF89`) are marked *"New semantic extension"* in Figma.

**Rule:** Do not ship these in production code until design owner approves. Gate behind a feature flag or config.

### 2.4 Focus ring

Figma defines `#B8DEFF` (1.41:1 on white — **fails AA** as sole indicator).

```css
/* Recommended: two-ring focus */
--focus-ring-inner: #B8DEFF;   /* Figma value */
--focus-ring-outer: #0066CC;   /* 5.57:1 on white — meets AA */

.ui-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--focus-ring-outer),   /* visible outer */
    0 0 0 4px var(--focus-ring-inner);   /* brand accent inner */
}
```

---

## 3. Typography rules

### 3.1 Font stack

```css
--font-family: "Outfit", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

**Outfit must be self-hosted or loaded via `@font-face`.** Do not rely on system fallback for production — letter-spacing and weight rendering will differ.

### 3.2 Type scale — use exact Figma sizes

| Role | Size | Line height | Weight | CSS variable |
|---|---|---|---|---|
| Page title | 20 px | 28 px | 500 | `--text-page-title: 20px; --leading-page-title: 1.4;` |
| Section title | 18 px | 24 px | 500 | `--text-section-title: 18px; --leading-section-title: 1.33;` |
| Settings tab | 17 px | 24 px | 500 | `--text-settings-tab: 17px; --leading-settings-tab: 1.41;` |
| Body / field label | 15 px | 22 px | 400 | `--text-body: 15px; --leading-body: 1.47;` |
| Control label | 14 px | 20 px | 400 | `--text-control-label: 14px; --leading-control-label: 1.43;` |
| Helper | 13 px | 20 px | 400 | `--text-helper: 13px; --leading-helper: 1.54;` |
| Caption | 12 px | 18 px | 400 | `--text-caption: 12px; --leading-caption: 1.5;` |

**Do not round** 13, 17, or the non-integer line heights. They are intentional.

### 3.3 Letter spacing

Always `0` (normal). Do not add tracking.

---

## 4. Spacing & layout rules

### 4.1 Spacing scale (4px base)

```css
--space-1: 4px;    /* base unit */
--space-1-5: 6px;  /* label-to-field gap */
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
```

### 4.2 Documented conventions (verbatim from Figma)

- **6 px** label-to-field gap (`--space-1-5`)
- **12–16 px** inside cards (`--space-3` to `--space-4`)
- **24–32 px** between groups (`--space-6` to `--space-8`)
- **40 px** page-level spacing (`--space-10`)

### 4.3 Control heights (fixed, not token-driven in Figma)

| Component | Height |
|---|---|
| Fields (Input, Dropdown) | 48 px |
| Actions (Button Regular) | 44 px |
| Compact (Button Compact) | 32 px |
| Tabs | 57 px |

Implement as fixed heights in component CSS; do not derive from spacing tokens.

---

## 5. Border & radius rules

### 5.1 Radii (three values only)

```css
--radius-field: 5px;   /* Inputs, Dropdowns */
--radius-panel: 10px;  /* Cards, containers */
--radius-pill: 30px;   /* Buttons, Toggles, Badges */
```

### 5.2 Strokes

- Default border: **1 px**, `--color-border-default` (`#E5E5E9`)
- Focus border: **2 px** (handled via focus ring, not stroke)
- No fractional strokes (0.74, 1.5) — these are artifacts

---

## 6. Component implementation rules

### 6.1 Variant mapping — exact parity with Figma

| Figma component | Code component | Variant props |
|---|---|---|
| `InstiServe/Button` | `Button` | `variant: 'primary' \| 'secondary' \| 'ghost'`, `size: 'regular' \| 'compact'`, `state: 'default' \| 'hover' \| 'focus' \| 'disabled'` |
| `InstiServe/Input` | `TextField` | `state: 'default' \| 'filled' \| 'focus' \| 'error' \| 'disabled' \| 'readonly'` |
| `InstiServe/Badge` | `Badge` | `tone: 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` |
| `InstiServe/Alert` | `Alert` | `tone: 'info' \| 'success' \| 'warning' \| 'error'` |
| `InstiServe/Tab` | `Tabs` | `style: 'underline' \| 'pill'`, `selectedIndex` |
| `InstiServe/Dropdown` | `Select` | `state: 'default' \| 'open' \| 'error' \| 'disabled' \| 'focus' \| 'filled'` |
| `InstiServe/Toggle` | `Switch` | `checked: boolean`, `disabled: boolean` |
| `InstiServe/Checkbox` | `Checkbox` | `checked: boolean \| 'indeterminate'`, `disabled: boolean` |
| `InstiServe/Radio` | `Radio` | `checked: boolean`, `disabled: boolean` |
| `InstiServe/Breadcrumb` | `Breadcrumb` | `items: Array<{label, href?, current?}>` |
| `InstiServe/PageButton` | `Pagination` | `current: number`, `total: number` |
| `InstiServe/TableRow` | `TableRow` | `selected: boolean`, `hover: boolean` |
| `InstiServe/EmptyState` | `EmptyState` | `kind: 'no-data' \| 'no-results'` |

### 6.2 State parity — do not omit

| Component | Required states | Figma gaps (document) |
|---|---|---|
| Button | default, hover, focus, disabled, **loading** (app) | — |
| Input | default, filled, focus, error, disabled, readonly | — |
| Toggle | default, disabled, **error** (missing) | ⚠️ Figma has no Error |
| Checkbox | default, disabled, **focus** (missing), indeterminate | ⚠️ Figma has no Focus |
| Radio | default, disabled, **focus** (missing) | ⚠️ Figma has no Focus |

**Rule:** Implement the missing states (Error for Toggle, Focus for Checkbox/Radio) using the same token patterns as existing states. Document that they are code-only additions.

### 6.3 Accessibility

- All interactive elements: visible `:focus-visible` (two-ring per §2.4)
- Buttons: `aria-busy` + `aria-disabled` when loading
- Inputs: `aria-invalid`, `aria-describedby` linking to error/helper
- Badges/Alerts: never rely on colour alone — always include text/icon
- Contrast: all text pairings must meet WCAG AA (4.5:1 normal, 3:1 large)

---

## 7. Dark mode

**Not implemented in Figma.** `PHASE-2-TOKENS.md` forbids inventing one.

**Rule:** Do not add dark mode tokens or styles until the design owner defines them. If the app needs dark mode, flag it as a design decision, not an implementation task.

---

## 8. Icon handling

- No icon component set in Figma — icons are embedded vectors in component masters
- For code: extract SVG from Figma (right-click → Copy as SVG) or recreate
- Standardize on **24×24 px** viewBox, **1.5–2 px stroke**, `currentColor` fill/stroke
- Create an `Icon` component that accepts a `name` prop and renders the SVG

---

## 9. Motion & elevation

### 9.1 Durations (not in Figma — propose these)

```css
--duration-fast: 120ms;    /* hover, focus */
--duration-normal: 200ms;  /* transitions, dropdown open */
--duration-slow: 300ms;    /* modal, toast */
--ease-out: cubic-bezier(0.2, 0, 0, 1);
```

### 9.2 Elevation

Figma has **only 2 shadows** (near-flat). No ramp documented.

```css
/* Use sparingly — flat-by-design per Figma */
--shadow-flat: 0 0 0 3px rgba(184, 222, 255, 0.4);  /* focus ring style */
--shadow-raised: 0 6px 16px rgba(0, 0, 0, 0.08);    /* if needed for modals */
```

**Rule:** Default to flat. Only add `--shadow-raised` for true overlays (Dialog, Dropdown open, Toast).

---

## 10. File structure for token/component layer

```
/src
  /design-system
    tokens.css          # All CSS custom properties (generated from figma-token-map.md)
    tokens.ts           # TypeScript token object (optional, for JS access)
    /components
      Button.tsx
      TextField.tsx
      Badge.tsx
      Alert.tsx
      Tabs.tsx
      Select.tsx
      Switch.tsx
      Checkbox.tsx
      Radio.tsx
      Breadcrumb.tsx
      Pagination.tsx
      TableRow.tsx
      EmptyState.tsx
      index.ts          # Barrel export
    ui.css              # Component styles consuming tokens (no raw values)
```

---

## 11. Validation checklist (before merging any component)

- [ ] Consumes only tokens from `tokens.css` — `grep -r '#[0-9a-fA-F]'` returns only comments
- [ ] Variant/state matrix matches Figma exactly (see `component-inventory.md`)
- [ ] Missing states implemented (Toggle Error, Checkbox/Radio Focus)
- [ ] Focus-visible meets AA (two-ring)
- [ ] Text contrast verified against token pairings
- [ ] Auto Layout behaviour replicated (content-driven sizing)
- [ ] Component resizes with realistic text lengths (long labels, wrapped descriptions)
- [ ] Unit tests for variant rendering
- [ ] Storybook/visual regression stories for all variants

---

## 12. Change workflow

1. **Design change happens in Figma** → owner updates library
2. **Re-run audit scripts** → `node scripts/figma-extract.mjs && node scripts/figma-resolve-vars.mjs`
3. **Update `figma-token-map.md`, `FIGMA-HANDOFF.md`** with new values
4. **Regenerate `tokens.css`** (manual or scripted)
5. **Update affected components** to use new tokens
6. **Visual regression review** → merge

**Never** change tokens in code first. Figma is the source of truth.

---

## 13. Gate: Application screens must not start until...

- [ ] Design owner approves this handoff
- [ ] Missing Figma work is complete (text styles, effect styles, artifact cleanup, state gaps)
- [ ] Token layer (`tokens.css`) is generated and reviewed
- [ ] At least Button, TextField, Badge, Alert are implemented and tested
- [ ] Contrast/accessibility decisions are recorded (white-on-primary, focus ring, status palette)

> **This is a Phase 5 gate per the prompt pack.** Do not begin view/page implementation until explicitly unblocked.