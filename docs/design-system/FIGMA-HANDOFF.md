# Figma Handoff — InstiServe Design System

**Source:** Figma file `5cx1t71DbC23GlziY7xZPQ` — "Workspace"
**Frames:** `941:11077` (DESIGN SYSTEMS), `941:12316` (DESIGN SYSTEMS 2)
**Audit reference:** `docs/design-system/FIGMA-AUDIT.md`
**Build spec:** `docs/design-system/FIGMA-MANUAL-BUILD-SPEC.md`

---

## 1. Figma file & page links

| Frame | Node ID | Figma Link | Contents |
|---|---|---|---|
| DESIGN SYSTEMS | `941:11077` | [Open in Figma](https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace?node-id=941-11077) | Foundations, Dropdowns, Tabs, Settings composition, Buttons, Toggles, Typography |
| DESIGN SYSTEMS 2 | `941:12316` | [Open in Figma](https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace?node-id=941-12316) | Data & navigation, Selection, Breadcrumbs, Status & feedback, Forms, Native component library |

### Suggested page structure (after manual reorg per `FIGMA-MANUAL-BUILD-SPEC.md` Task F)

| Page | Purpose | Source frames |
|---|---|---|
| `00 — Read Me` | System overview, naming conventions, token layers, change request process | New |
| `01 — Foundations` | Colour swatches, type specimens, spacing/radii/elevation tables | `941:11078` (InstiServe · Foundations) |
| `02 — Components` | 13 component sets, 77 variants | Both frames |
| `03 — Patterns` | Settings composition, form compositions | `941:11077` composition frames |
| `04 — Usage Examples` | Dropdowns, Tabs, Buttons, Toggles, Data & nav, Selection, Breadcrumbs, Status, Forms | `941:12316` sections |
| `99 — Deprecated` | Only if something is genuinely deprecated | — |

> ⚠️ **Library is not published.** No external sharing or permission changes have been made. Do not publish without explicit authorization.

---

## 2. Token naming & semantic/primitive mapping

The file uses **Figma Variables** (not styles) for colours, spacing, and some sizing. There are **48 variable IDs** resolved to concrete values. Variable *names* are not readable via the REST API (requires `file_variables:read` scope, Enterprise). The mapping below was reconstructed from node bindings + documented text in the Foundations frame.

### 2.1 Semantic/brand colours (15 variables)

| Role (semantic) | Hex | Variable ID | Usage per Figma docs |
|---|---|---|---|
| `primary` | `#0088FF` | `940:4724` | Actions, selected indicators, switches |
| `supporting-blue` | `#0066CC` | `940:4720` | Small blue text, high-contrast hover |
| `accent` | `#242749` | `940:4722` | Titles & emphasis |
| `text` | `#141313` | `940:4712` | Body & controls |
| `muted` | `#686978` | `940:4710` | Secondary copy |
| `canvas` | `#F9FAFB` | `940:4714` | Page background |
| `surface` | `#FFFFFF` | `940:4716` | Cards & fields |
| `selected` | `#E5F3FF` | `940:4718` | Selected surfaces |
| `border` | `#E5E5E9` | `940:4708` | Neutral outlines |
| `disabled` | `#F1F2F4` | `940:4704` | Inactive surfaces |
| `error` | `#B42318` | `940:4702` | Validation & helper |
| `focus` | `#B8DEFF` | `940:4706` | Focus ring |
| `deep-navy` | `#020736` | `940:4730` | **No documented role** — appears twice, unnamed |

### 2.2 Neutral scale (13 variables)

| Token | Hex | Variable ID | Role per Figma docs |
|---|---|---|---|
| `neutral/0` | `#FFFFFF` | `944:123` | White surface |
| `neutral/50` | `#FAFAFA` | `944:125` | Quiet canvas |
| `neutral/100` | `#F5F5F5` | `944:127` | Hover surface |
| `neutral/200` | `#E5E5E5` | `944:129` | Subtle divider |
| `neutral/300` | `#D4D4D4` | `944:131` | Control outline |
| `neutral/400` | `#A3A3A3` | `944:133` | Disabled foreground |
| `neutral/500` | `#737373` | `944:135` | Secondary icons |
| `neutral/600` | `#525252` | `944:137` | Secondary text |
| `neutral/700` | `#404040` | `944:139` | Body text |
| `neutral/800` | `#262626` | `944:141` | Strong labels |
| `neutral/900` | `#171717` | `944:143` | Primary text |
| `neutral/950` | `#0A0A0A` | `944:145` | High emphasis |
| `neutral/1000` | `#000000` | `944:147` | Pure black |

### 2.3 Status palette (5 fg + 6 surface variables)

| Tone | Foreground | Background | Border | Variable IDs (fg/bg/border) |
|---|---|---|---|---|
| Neutral | `#686978` | — | — | `944:148` |
| Info | `#0066CC` | — | — | `944:149` |
| Success | `#067647` | `#ECFDF3` | `#ABEFC6` | `944:151` / `944:156` / `944:158` |
| Warning | `#93370D` | `#FFFAEB` | `#FEDF89` | `944:153` / `944:160` / `944:162` |
| Error | `#B42318` | `#FEF3F2` | `#FECDCA` | `944:154` / `944:164` / `944:166` |

> **Note:** Success and Warning are marked in the Figma file as *"New semantic extension"* — i.e., proposed additions, not previously present. Require owner approval before treating as approved tokens.

### 2.4 Spacing & sizing (9 variables)

| Variable ID | Values (px) | Role |
|---|---|---|
| `940:4732` | 4 (all padding + itemSpacing) | Base unit |
| `940:4733` | itemSpacing 6 | Label-to-field gap |
| `940:4734` | itemSpacing 8, padding 8 | Compact spacing |
| `940:4735` | itemSpacing 12, padding 12 | Card inner spacing |
| `940:4736` | itemSpacing 16, padding 16 | Card inner spacing (large) |
| `940:4737` | itemSpacing 20, padding 20 | Group spacing |
| `940:4738` | itemSpacing 24 | Section gap |
| `940:4739` | itemSpacing 32 | Large section gap |
| `940:4740` | itemSpacing 40, padding 40 | Page-level spacing |

**Documented guidance (verbatim):**
> *"6 px label-to-field gap matches settings. Use 12–16 px inside cards, 24–32 px between groups."*

**Control heights (documented, not variable-bound):**
- Fields: 48 px
- Actions: 44 px
- Compact: 32 px
- Tabs: 57 px

### 2.5 Radii (not variable-bound — direct values)

| Role | Value | Usage |
|---|---|---|
| Field | 5 px | Inputs, dropdowns |
| Panel | 10 px | Cards, containers |
| Pill | 30 px | Buttons, toggles, badges |

> Two fractional artifacts exist in the file and should be normalized:
> - Corner radius `14.814814…` (16 occurrences) → snap to **10** (Panel)
> - Stroke weight `0.740740…` (24 occurrences) → snap to **1**

---

## 3. Typography & spacing rules

### 3.1 Type system — **Outfit**, weights 400 / 500 / 600

| Role | Size | Line height | Weight | Letter spacing |
|---|---|---|---|---|
| Page title | 20 px | 28 px | 500 | 0 |
| Section title | 18 px | 24 px | 500 | 0 |
| Settings tab | 17 px | 24 px | 500 | 0 |
| Body / field label | 15 px | 22 px | 400 | 0 |
| Control label | 14 px | 20 px | 400 | 0 |
| Helper | 13 px | 20 px | 400 | 0 |
| Caption | 12 px | 18 px | 400 | 0 |

> ⚠️ **No text styles exist in Figma** (`GET /styles` returns `{"styles":[]}`). These 7 roles are direct formatting on 804 text nodes. See `FIGMA-MANUAL-BUILD-SPEC.md` Task A for the exact 7 text styles to create.

### 3.2 Spacing rules

- Base unit: 4 px (variable `940:4732`)
- Label-to-field gap: **6 px** (variable `940:4733`)
- Inside cards: **12–16 px** (variables `940:4735`–`940:4736`)
- Between groups: **24–32 px** (variables `940:4738`–`940:4739`)
- Page-level: **40 px** (variable `940:4740`)

---

## 4. Component inventory (13 sets, 77 variants)

| Component set | Variants | Key properties |
|---|---|---|
| `InstiServe/Button` | 24 | `Emphasis` (Primary/Secondary/Ghost), `State` (Default/Hover/Focus/Disabled), `Size` (Regular/Compact), `Label` |
| `InstiServe/Tab` | 6 | `Style` (Underline/Pill), `State` (Default/Selected/Disabled), `Label` |
| `InstiServe/Dropdown` | 6 | `State` (Default/Open/Error/Disabled/Focus/Filled), `Size`, `Label`, `Value`, `Placeholder`, `Helper`, `Error message`, `Disabled reason` |
| `InstiServe/Toggle` | 4 | `Value` (On/Off), `State` (Default/Disabled) |
| `InstiServe/Breadcrumb` | 4 | `State` (Default/Hover/Current/Disabled), `Label` |
| `InstiServe/Input` | 6 | `State` (Default/Filled/Focus/Error/Disabled/ReadOnly), `Label`, `Value`, `Placeholder`, `Helper`, `Error message`, `Invalid value`, `Disabled reason`, `Read-only reason` |
| `InstiServe/Checkbox` | 6 | `Value` (Unchecked/Checked/Indeterminate), `State` (Default/Disabled) |
| `InstiServe/Radio` | 4 | `Value` (Unselected/Selected), `State` (Default/Disabled) |
| `InstiServe/Badge` | 5 | `Tone` (Neutral/Info/Success/Warning/Error), `Label` |
| `InstiServe/Alert` | 4 | `Tone` (Info/Success/Warning/Error), `Title`, `Description` |
| `InstiServe/PageButton` | 3 | `State` (Default/Current/Disabled), `Label` |
| `InstiServe/TableRow` | 3 | `State` (Default/Selected/Hover), `Name`, `Email`, `Identifier`, `Role`, `Department`, `Label` |
| `InstiServe/EmptyState` | 2 | `Kind` (NoData/NoResults), 4 text properties |

**Plus 71 instances** used inside documented usage examples.

### 4.1 Button per-variant spec (Size=Regular, all token-bound)

| Emphasis | State | Container fill | Variable | Label fill | Variable |
|---|---|---|---|---|---|
| Primary | Default | `#0088FF` | `940:4724` | `#FFFFFF` | `940:4716` |
| Primary | Hover | `#0066CC` | `940:4720` | `#FFFFFF` | `940:4716` |
| Primary | Focus | `#0088FF` | `940:4724` | `#FFFFFF` | `940:4716` |
| Primary | Disabled | `#F1F2F4` | `940:4704` | `#9899A5` | `940:4726` |
| Secondary | Default | `#FFFFFF` | `940:4716` | `#141313` | `940:4712` |
| Secondary | Hover | `#E5F3FF` | `940:4718` | `#141313` | `940:4712` |
| Secondary | Focus | `#FFFFFF` | `940:4716` | `#141313` | `940:4712` |
| Secondary | Disabled | `#FFFFFF` | `940:4716` | `#9899A5` | `940:4726` |
| Ghost | Default | `#FFFFFF` | `940:4716` | `#0066CC` | `940:4720` |
| Ghost | Hover | `#E5F3FF` | `940:4718` | `#0066CC` | `940:4720` |
| Ghost | Focus | `#FFFFFF` | `940:4716` | `#0066CC` | `940:4720` |
| Ghost | Disabled | `#FFFFFF` | `940:4716` | `#9899A5` | `940:4726` |

All variants: radius **30** (pill), height **44 px**, label **14 px / 400**.

---

## 5. Responsive / layout conventions

- **Auto Layout** used throughout for all component frames (gap, padding, alignment)
- No absolute positioning in components — content-driven sizing
- Component instances in usage examples demonstrate realistic text wrapping
- Breakpoints: not explicitly documented in Figma; assume desktop-first, mobile adapting via component constraints

---

## 6. Icon & asset rules

- Icons are inline SVG/vector in the file — no external icon library referenced
- Stroke weight: predominantly **1 px** (625 of 632 strokes)
- No icon component set exists; icons are embedded in component variants
- For implementation: extract SVG from component master frames or recreate from the vector nodes in the file

---

## 7. Known gaps, exceptions, unsupported constructs

| Gap | Status | Resolution |
|---|---|---|
| **Zero text styles** | Open | Create 7 text styles per `FIGMA-MANUAL-BUILD-SPEC.md` Task A |
| **Zero effect styles** | Open | Create 2 effect styles per Task B |
| **Fractional radius 14.81** | Open | Snap to 10 (Panel) per Task C |
| **Fractional stroke 0.74** | Open | Snap to 1 per Task C |
| **`#020736` unnamed** | Open | Assign role or delete per Task E |
| **Toggle: no Error state** | Open | Add `State=Error` or document omission per Task D |
| **Radio/Checkbox: no Focus state** | Open | Add `State=Focus` for keyboard parity per Task D |
| **No elevation ramp** | Decision needed | File has only 2 near-flat shadows. Owner must confirm flat-by-design or define ramp. Do not invent. |
| **Contrast: white on `#0088FF` = 3.52:1** | Decision needed | Passes AA for large text, fails for body. Primary hover already uses `#0066CC` (5.57:1). Accept or adjust. |
| **No dark mode** | By design | `PHASE-2-TOKENS.md` forbids inventing one. Not started. |
| **No `loading` on Button, no Dialog/Toast/Spinner** | By design | App-level concerns, not Figma library scope (`PHASE-3-COMPONENTS.md` rule 10) |

---

## 8. Instructions for Open Code (implementation)

When building the application code against this design system:

1. **Start here:** Read this handoff, then `figma-token-map.md` and `component-inventory.md`
2. **Figma is the source of truth.** Do not recreate tokens from memory — use the exact values above.
3. **Token discipline:** All colours, spacing, radii, type sizes must come from the token layer. No raw hex in component code.
4. **Component parity:** Implement the 13 component sets with the variant/state matrix above. Use the exact token references.
5. **Accessibility:** Respect the contrast caveats. Use `#0066CC` for text-bearing primary actions. Ensure focus-visible rings meet AA.
6. **Do not start application screens** until this handoff is explicitly approved by the design owner.
7. **Figma updates:** If the library changes, re-run the audit scripts and update these docs before implementing.

---

## 9. Validation summary

| Check | Result |
|---|---|
| All 48 variable IDs resolve to concrete values | ✅ Verified via `figma-resolve-vars.mjs` |
| Semantic vs primitive distinction clear | ✅ Documented in §2 |
| No duplicate token names or conflicting values | ✅ Cross-checked |
| All 13 component sets enumerated with variant counts | ✅ Verified via API |
| Component tokens reference approved variables | ✅ Inspected bindings |
| No hardcoded fills where variable refs should be | ✅ Sampled 20+ components |
| Read-only extraction reproducible | ✅ `scripts/figma-extract.mjs`, `figma-resolve-vars.mjs` |

> Validation was performed via Figma REST API read access only. Visual inspection of rendered PNGs was done manually. No write operations were attempted or possible with the current token scope.