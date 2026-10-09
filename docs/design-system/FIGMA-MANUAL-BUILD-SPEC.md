# Figma Manual Build Spec — InstiServe

**Companion to** [`FIGMA-AUDIT.md`](./FIGMA-AUDIT.md) · Phase 1 output
**Write path:** manual in the Figma UI (confirmed decision, audit §7.2)
**File:** `https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace`
**Frames:** `941:11077` "DESIGN SYSTEMS" · `941:12316` "DESIGN SYSTEMS 2"

This is a copy-ready close-out list. The library is **already substantially built** —
48 variables and 13 component sets exist. These are the gaps that remain.

---

## 0. What already exists — do NOT rebuild

| Already done | Where |
|---|---|
| 15 semantic/brand colour variables | `940:4702`–`940:4730` |
| 13 neutral variables | `944:123`–`944:147` |
| 5 status fg + 6 status bg/border | `944:148`–`944:166` |
| 9 spacing variables | `940:4732`–`940:4740` |
| 13 component sets / 77 variants | across both frames |
| Documented swatches, type specimens, usage examples | Foundations, Status & feedback |

---

## 1. Task A — Create the 7 text styles  *(highest value)*

**Why:** `GET /files/:key/styles` returns `{"styles":[]}`. The type roles exist only as
direct formatting on **804 text nodes**. Nothing is reusable or safely editable.

Go to each existing text style panel → **⌥/Alt-drag the layer → "Create text style"**
(Figma infers style names from repeated formatting), or create manually via
**Text style** in the Assets panel. Then rename to this convention:

> `InstiServe/type/<role>/<size>-<weight>`

| Style name | Family | Size | Line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `InstiServe/type/page-title/20-500` | Outfit | 20 | 28 | Medium (500) | 0 |
| `InstiServe/type/section-title/18-500` | Outfit | 18 | 24 | Medium (500) | 0 |
| `InstiServe/type/settings-tab/17-500` | Outfit | 17 | 24 | Medium (500) | 0 |
| `InstiServe/type/body/15-400` | Outfit | 15 | 22 | Regular (400) | 0 |
| `InstiServe/type/control-label/14-400` | Outfit | 14 | 20 | Regular (400) | 0 |
| `InstiServe/type/helper/13-400` | Outfit | 13 | 20 | Regular (400) | 0 |
| `InstiServe/type/caption/12-400` | Outfit | 12 | 18 | Regular (400) | 0 |

⚠️ **Do not normalise sizes 13 and 17.** They are intentional, documented values.
Do not round line-heights to a cleaner ratio — copy them exactly.

**Weight 600** is used in 11 places (e.g. admin section labels). Consider an 8th style
`InstiServe/type/label-emphasis/13-600` only after confirming intent.

---

## 2. Task B — Create the 2 effect styles

Only two distinct drop shadows exist in the whole file. Create both as effect styles:

| Style name | Y | Blur | Spread | Colour |
|---|---|---|---|---|
| `InstiServe/elevation/flat` | 0 | 0 | 3 | *(the existing near-flat shadow — match exactly)* |
| `InstiServe/elevation/raised` | 6 | 16 | 0 | *(match the existing shadow colour)* |

**Before doing this:** decide with the owner whether InstiServe is genuinely
flat-by-design. If so, define exactly these two, name them to say so, and record
"no elevation ramp" in the Read Me. Do **not** invent a 3–5 step elevation scale —
that would be an undocumented design change (audit §6.6).

---

## 3. Task C — Normalise the two fractional artifacts

| Artifact | Occurrences | Target |
|---|---|---|
| Corner radius `14.814814…` | 16 layers | Snap to **10** (Panel) |
| Stroke weight `0.740740…` | 24 layers | Snap to **1** |
| Stroke weight `0.697674…` | 1 layer | Snap to **1** |

These are unscaled-transform leftovers, not design decisions. The documented radius
scale is **5 Field / 10 Panel / 30 Pill**; the documented stroke is **1 px** (625 of 632
strokes).

---

## 4. Task D — Close the state-coverage gaps

| Component | Missing | Suggested addition |
|---|---|---|
| `InstiServe/Toggle` | `Error` state | Add `State=Error` if toggles can fail validation — otherwise **document the omission** |
| `InstiServe/Radio` | `Focus` state | Add `State=Focus` for keyboard parity with `Checkbox`/`Input` |
| `InstiServe/Checkbox` | `Focus` state | Same — currently only Default/Disabled |

**Confirm intent before adding.** An incomplete state set is a defect; a deliberately
minimal one is fine **if documented**. Either fix or document — do not leave silent.

---

## 5. Task E — Assign or remove the undocumented variable

`#020736` (`940:4730`, "deep-navy") appears twice with **no documented role**. Either:

- assign a name + role (e.g. an inverted/dark surface), or
- delete it if unused.

Per `MASTER-PROMPT.md` rule 6, unused tokens are clutter. Do not leave it unnamed.

---

## 6. Task F — Reorganise into pages  *(Phase 4)*

Suggested structure — **adapt to what already exists**, don't duplicate:

| Page | Contents | Source |
|---|---|---|
| `00 — Read Me` | System overview, naming conventions, token layers, how to request changes | new |
| `01 — Foundations` | Colours, type specimens, spacing, radii, elevation | move `941:11078` |
| `02 — Components` | The 13 component sets | move from both frames |
| `03 — Patterns` | Settings composition, form compositions | `941:11077` composition frames |
| `04 — Usage Examples` | Dropdowns, Tabs, Buttons, Toggles, Data & navigation, Selection, Breadcrumbs, Status, Forms | `941:12316` sections |
| `99 — Deprecated` | *only if* something is genuinely deprecated | — |

⚠️ **Moving frames between pages can break variable bindings and component references.**
Move whole frames top-level only, then spot-check a component instance afterwards.

⚠️ **Do not publish the library or change sharing/permissions** without explicit
authorisation (`PHASE-4-LIBRARY-ORGANIZATION.md` rule 6).

---

## 7. Task G — Write the Read Me content

Cover, briefly:

1. **What it is** — InstiServe admin design system, Figma is the source of truth.
2. **Typeface** — Outfit 400/500/600 is the approved family.
3. **Token layers** — semantic (`primary`, `text`, `muted`, `canvas`, `surface`,
   `selected`, `border`, `disabled`, `error`, `focus`, `accent`, `supporting-blue`)
   → neutral scale → status extensions. Name tokens by role, **never by raw hex**.
4. **The brand-blue rule (verbatim from the file):**
   > `#0088FF` is the primary for actions, selected indicators and switches. Use
   > `#0066CC` for readable small blue text and high-contrast hover states; it
   > supports the brand, never replaces it.
5. **Spacing guidance (verbatim):**
   > 6 px label-to-field gap matches settings. Use 12–16 px inside cards, 24–32 px
   > between groups.
6. **Control heights** — Fields 48 · Actions 44 · Compact 32 · Tabs 57.
7. **Contrast caveat** — white on `#0088FF` is 3.52:1 (see audit §6.4).
8. **How to request a change** — who owns the system, where tokens live.

---

## 8. Explicitly out of scope

Per the prompt pack, do **not** create: application screens, speculative features,
a dark theme (none is defined), or a new elevation ramp. Do **not** add `Dialog`,
`Toast`, or `Spinner` components — those are code-level concerns for the consumer repo.

---

## Verification after each task

Re-run the read-only extractors to confirm nothing regressed:

```bash
set -a; source .env; set +a
node scripts/figma-extract.mjs      # should now report FILL/TYPE/STYLE counts
node scripts/figma-resolve-vars.mjs # variable bindings should be unchanged
```

Success criteria:

- `GET /files/:key/styles` returns **7+** styles instead of `{"styles":[]}`
- No radius value ending in `…814` or stroke weight ending in `…740` remains
- Every variable resolves to a value (no unresolved aliases)
- All 13 component sets still present with unchanged variant counts