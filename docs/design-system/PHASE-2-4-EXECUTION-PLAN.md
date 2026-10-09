# Phase 2–4 Execution Plan — InstiServe Design System

**Status:** Ready for approval. No Figma writes performed yet.
**Gate:** All changes require explicit owner approval before execution.

---

## Executive Summary

The Figma REST API is **read-only** for this token. No write operations are possible via API:
- `POST /files/:key/variables` → `403` (needs `file_variables:write`, Enterprise only)
- `POST /files/:key/styles` → `404` (endpoint does not exist)
- `POST /files/:key/components` → `404` (endpoint does not exist)

**All Phase 2–4 work must be done manually in the Figma desktop app.** This document provides exact step-by-step instructions for each task.

---

## 1. Access Verification Results

| Operation | Endpoint | Result | Meaning |
|---|---|---|---|
| Read file | `GET /files/:key` | `200` | ✅ Full document read |
| Read nodes | `GET /files/:key/nodes` | `200` | ✅ Full node tree read |
| Render images | `GET /files/:key/images` | `200` | ✅ PNG export |
| Read styles | `GET /files/:key/styles` | `200` → `0 styles` | ✅ Read works; **file has zero styles** |
| Read variables | `GET /files/:key/variables/local` | `403` | ❌ Needs `file_variables:read` (Enterprise) |
| Write variables | `POST /files/:key/variables` | `403` | ❌ Needs `file_variables:write` (Enterprise) |
| Write styles | `POST /files/:key/styles` | `404` | ❌ Endpoint does not exist |
| Write components | `POST /files/:key/components` | `404` | ❌ Endpoint does not exist |

**Conclusion:** The REST API supports **read-only** access. No automated Figma writes are possible. A Figma plugin or manual UI work is required.

---

## 2. Seven Outstanding Issues — Resolution Matrix

| # | Issue | Can API do it? | Manual UI required? | Effort | Risk |
|---|---|---|---|---|---|
| 1 | Create 7 text styles | ❌ No endpoint | ✅ Yes | Medium | Low |
| 2 | Create 2 effect styles | ❌ No endpoint | ✅ Yes | Low | Low |
| 3 | Normalize radius 14.81→10, stroke 0.74→1 | ❌ No endpoint | ✅ Yes | Low | Low |
| 4 | Add missing states (Toggle Error, Checkbox/Radio Focus) | ❌ No endpoint | ✅ Yes | Medium | Medium |
| 5 | Name/delete variable `#020736` (940:4730) | ❌ No endpoint | ✅ Yes* | Low | Low |
| 6 | Decide: flat-by-design vs elevation ramp | N/A (design decision) | ✅ Yes | N/A | Medium |
| 7 | Decide: 3.52:1 white-on-primary contrast | N/A (design decision) | ✅ Yes | N/A | High |

*Variable names cannot be read via API (needs `file_variables:read`), but can be edited in the Variables panel in Figma UI.

---

## 3. Detailed Manual Instructions

### Issue 1: Create 7 Text Styles (Highest Value)

**Current state:** 804 text nodes with direct formatting, 0 text styles.

**Steps in Figma:**
1. Open the Figma file → navigate to frame `941:11078` "InstiServe · Foundations"
2. Locate the type specimens (the text nodes showing "Page title", "Section title", etc.)
3. For each of the 7 roles, select the text node → right-click → **Create text style**
4. Rename each style to the convention: `InstiServe/type/<role>/<size>-<weight>`

| Style Name | Font | Size | Line Height | Weight | Letter Spacing |
|---|---|---|---|---|---|
| `InstiServe/type/page-title/20-500` | Outfit | 20 | 28 | Medium (500) | 0 |
| `InstiServe/type/section-title/18-500` | Outfit | 18 | 24 | Medium (500) | 0 |
| `InstiServe/type/settings-tab/17-500` | Outfit | 17 | 24 | Medium (500) | 0 |
| `InstiServe/type/body/15-400` | Outfit | 15 | 22 | Regular (400) | 0 |
| `InstiServe/type/control-label/14-400` | Outfit | 14 | 20 | Regular (400) | 0 |
| `InstiServe/type/helper/13-400` | Outfit | 13 | 20 | Regular (400) | 0 |
| `InstiServe/type/caption/12-400` | Outfit | 12 | 18 | Regular (400) | 0 |

**Optional 8th style** (after confirming intent): `InstiServe/type/label-emphasis/13-600` — used in 11 places for admin section labels.

**Verification:** After creation, `GET /files/:key/styles` should return 7+ text styles.

---

### Issue 2: Create 2 Effect Styles

**Current state:** 2 distinct drop shadows used across file, 0 effect styles.

**Decision required first:** Is InstiServe flat-by-design?

- **If flat-by-design:** Create exactly these two styles, name them to indicate no ramp.
- **If elevation ramp needed:** Owner must define the ramp (do not invent).

**Steps in Figma:**
1. Select a layer with the "flat" shadow (y:0, blur:0, spread:3) → Effects panel → click **⋯** → **Create effect style**
2. Name: `InstiServe/elevation/flat`
3. Select a layer with the "raised" shadow (y:6, blur:16, spread:0) → Create effect style
4. Name: `InstiServe/elevation/raised`

**Record decision in Read Me page** (Task G).

---

### Issue 3: Normalize Fractional Artifacts

**Current state:**
- Corner radius `14.814814…` on 16 layers
- Stroke weight `0.740740…` on 24 layers
- Stroke weight `0.697674…` on 1 layer

**Steps in Figma:**
1. **Radius 14.81 → 10:** Search for layers with corner radius ≈14.81 (use Figma's "Select all with same properties" or plugin). Set to **10** (Panel radius).
2. **Stroke 0.74/0.70 → 1:** Select layers with stroke weight ≈0.74 or ≈0.70 → set to **1**.
3. **Verify:** Re-run `figma-extract.mjs` — no radius ending in `814`, no stroke ending in `740` or `697`.

**Why:** These are unscaled-transform artifacts. Documented radius scale is 5/10/30; documented stroke is 1px (625 of 632 strokes).

---

### Issue 4: Close State-Coverage Gaps

| Component | Missing State | Recommended Action |
|---|---|---|
| `InstiServe/Toggle` | `Error` | Add variant `State=Error` with red border (`#B42318`) and error icon. If toggles never validate, document omission in Read Me. |
| `InstiServe/Checkbox` | `Focus` | Add variant `State=Focus` with visible focus ring (two-ring per implementation-rules.md §2.4). |
| `InstiServe/Radio` | `Focus` | Add variant `State=Focus` with visible focus ring. |

**Steps in Figma:**
1. Navigate to each component set in the Assets panel
2. Click **+** to add variant → set property `State=Error` (Toggle) or `State=Focus` (Checkbox/Radio)
3. Style the new variant using existing tokens:
   - Focus: two-ring focus (outer `#0066CC`, inner `#B8DEFF`)
   - Error: border `#B42318`, icon `#B42318`
4. Update component documentation in the usage examples.

**If owner decides NOT to add:** Document the omission explicitly in the Read Me page (Task G).

---

### Issue 5: Assign or Remove Variable `#020736` (940:4730)

**Current state:** Variable ID `940:4730` = `#020736` ("deep-navy"), appears twice, no documented role.

**Steps in Figma:**
1. Open **Variables** panel (⌥V)
2. Find variable `940:4730` (may show as unnamed or "VariableID:940:4730")
3. **Option A — Assign:** Rename to `color/brand/deep-navy` and document role (e.g., "Inverted surface for dark mode preview" or "High-contrast heading on dark")
4. **Option B — Delete:** If unused, right-click → **Delete variable**

**Recommendation:** Assign a role if there's any dark-mode intent; otherwise delete to avoid clutter.

---

### Issue 6: Flat-by-Design vs Elevation Ramp (Design Decision)

**Current state:** Only 2 shadows exist:
- Flat: y:0, blur:0, spread:3 (8 occurrences)
- Raised: y:6, blur:16, spread:0 (7 occurrences)

**Options:**
- **A. Flat-by-design** (recommended): Keep exactly these two. Name styles `InstiServe/elevation/flat` and `InstiServe/elevation/raised`. Document "no elevation ramp" in Read Me.
- **B. Define ramp:** Owner specifies 3–5 elevation levels with exact values. Do not invent.

**Recommendation:** Option A. The file shows a flat aesthetic. Adding a ramp would be an undocumented design change.

---

### Issue 7: Primary Colour Contrast (Critical Accessibility Decision)

**Current state:**
- Primary: `#0088FF` with white text (`#FFFFFF`) → **3.52:1**
- Supporting blue: `#0066CC` with white text → **5.57:1**
- Primary hover already uses `#0066CC` (5.57:1)

**WCAG 2.1 AA Requirements:**
- Normal text (≥4.5:1) → **FAILS** on `#0088FF`
- Large text (≥3:1, ≥18pt or ≥14pt bold) → **PASSES** on `#0088FF`

**Options:**

| Option | Change | Pros | Cons |
|---|---|---|---|
| **A. Keep as-is** | None | Preserves brand blue exactly; hover already fixes for interactive | Body text on primary fails AA; legal risk in some jurisdictions |
| **B. Use `#0066CC` for text-bearing primary buttons** | Button label colour stays white, but button background for "primary with text" uses `#0066CC` | AA compliant (5.57:1); minimal visual change | Two "primary" blues in use |
| **C. Increase primary button text size to ≥18pt** | Make primary button labels 18px+ | Keeps `#0088FF`; large text passes at 3.52:1 | Changes button proportions; not scalable |
| **D. Darken primary to `#0066CC` for all uses** | Replace `#0088FF` → `#0066CC` everywhere | Single blue; AA compliant | Loses brand blue; significant visual change |

**Recommendation:** **Option B** — use `#0066CC` (supporting-blue) for primary buttons that carry text labels. Keep `#0088FF` for non-text uses (switch thumbs, selected indicators, focus borders). This matches the Figma file's own guidance: *"Use `#0066CC` for readable small blue text and high-contrast hover states; it supports the brand, never replaces it."*

**Accessibility implication if unchanged:** Non-compliant for body-text-sized button labels. May fail accessibility audits (WCAG 2.1 AA, Section 508, EN 301 549).

---

## 4. Recommended Typography Hierarchy

Based on Figma's documented specs (do not normalize):

| Level | Style Name | Size | Line Height | Weight | Use Case |
|---|---|---|---|---|---|
| 1 | `InstiServe/type/page-title/20-500` | 20px | 28px (1.4) | 500 | Page H1 |
| 2 | `InstiServe/type/section-title/18-500` | 18px | 24px (1.33) | 500 | Section H2 |
| 3 | `InstiServe/type/settings-tab/17-500` | 17px | 24px (1.41) | 500 | Tab labels |
| 4 | `InstiServe/type/body/15-400` | 15px | 22px (1.47) | 400 | Body copy, field labels |
| 5 | `InstiServe/type/control-label/14-400` | 14px | 20px (1.43) | 400 | Input labels, button labels |
| 6 | `InstiServe/type/helper/13-400` | 13px | 20px (1.54) | 400 | Helper text, error messages |
| 7 | `InstiServe/type/caption/12-400` | 12px | 18px (1.5) | 400 | Captions, timestamps |
| 8* | `InstiServe/type/label-emphasis/13-600` | 13px | 20px (1.54) | 600 | Admin labels, key values (confirm intent) |

**Font stack:** `Outfit`, `ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `sans-serif`

**Critical:** Do not round 13, 17, or non-integer line heights. They are intentional.

---

## 5. Recommended Consistent Standards

### Elevation
| Style | Y | Blur | Spread | Colour | Use |
|---|---|---|---|---|---|
| `InstiServe/elevation/flat` | 0 | 0 | 3 | Match existing | Focus rings, subtle depth |
| `InstiServe/elevation/raised` | 6 | 16 | 0 | Match existing | Dropdown menus, tooltips |

**No ramp.** Document "flat-by-design" in Read Me.

### Border Radius
| Token | Value | Use |
|---|---|---|
| `--radius-field` | 5px | Inputs, Dropdowns, Selects |
| `--radius-panel` | 10px | Cards, Containers, Dialogs |
| `--radius-pill` | 30px | Buttons, Toggles, Badges, Pills |

**Normalize** 14.81→10, remove fractional artifacts.

### Strokes
| Token | Value | Use |
|---|---|---|
| `--stroke-default` | 1px | Input borders, card outlines, dividers |
| `--stroke-focus` | 2px | Focus ring (handled via box-shadow, not stroke) |

**Normalize** 0.74→1, 0.70→1.

### Accessibility Standards
| Rule | Standard | Figma Status |
|---|---|---|
| Text contrast (normal) | ≥4.5:1 | ⚠️ Primary button text 3.52:1 — **decision needed** |
| Text contrast (large) | ≥3:1 | ✅ All pass |
| Focus visible | 2px minimum, 3:1 contrast | ❌ Focus ring `#B8DEFF` is 1.41:1 on white — **fix via two-ring** |
| Non-text contrast | ≥3:1 | ✅ Borders, icons pass |
| Colour not sole indicator | Required | ✅ Badges/Alerts have text+icon |

**Focus ring implementation (code):**
```css
:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #0066CC,   /* outer: 5.57:1 on white */
    0 0 0 4px #B8DEFF;   /* inner: brand accent */
}
```

---

## 6. Verification Checklist — Phases 2–4 Complete

### Phase 2: Tokens & Foundations
- [ ] 7 text styles created in Figma (`GET /styles` returns 7+)
- [ ] 2 effect styles created in Figma
- [ ] Variable `940:4730` named or deleted
- [ ] No fractional radius (14.81) remains
- [ ] No fractional stroke (0.74, 0.70) remains
- [ ] All 48 variables resolve to values (re-run `figma-resolve-vars.mjs`)
- [ ] Read Me page created with system overview, naming conventions, token layers, change process

### Phase 3: Components
- [ ] Toggle `State=Error` added (or omission documented in Read Me)
- [ ] Checkbox `State=Focus` added (or omission documented)
- [ ] Radio `State=Focus` added (or omission documented)
- [ ] All 13 component sets present with unchanged variant counts (+new states)
- [ ] All variants reference approved variables (no hardcoded fills)
- [ ] Auto Layout and resizing behaviour verified on all components
- [ ] Usage examples updated to show new states

### Phase 4: Library Organization
- [ ] Pages reorganized: `00 Read Me`, `01 Foundations`, `02 Components`, `03 Patterns`, `04 Usage Examples`, `99 Deprecated` (if needed)
- [ ] No broken variable bindings or component references after moves
- [ ] Read Me content covers all 8 items from Task G
- [ ] Library **not published** (no permission changes without authorization)

### Cross-Phase Consistency
- [ ] Re-run `figma-extract.mjs` → no regressions
- [ ] Re-run `figma-resolve-vars.mjs` → all variables resolve
- [ ] Update `figma-token-map.md` if any variable values changed
- [ ] Update `FIGMA-HANDOFF.md` if any token/component specs changed
- [ ] Update `component-inventory.md` if new variants added
- [ ] Update `implementation-rules.md` if accessibility decisions changed

---

## 7. Execution Order

1. **Design decisions first** (Issues 6 & 7) — require owner approval
2. **Text styles** (Issue 1) — highest value, enables all downstream work
3. **Effect styles** (Issue 2) — depends on Issue 6 decision
4. **Artifact normalization** (Issue 3) — safe, mechanical
5. **State gaps** (Issue 4) — depends on owner intent for Toggle Error
6. **Variable cleanup** (Issue 5) — quick
7. **Page reorganization** (Issue 6 Task F) — do last, verify bindings
8. **Read Me** (Task G) — document all decisions
9. **Re-extract & update docs** — run scripts, update 4 handoff files

---

## 8. Approval Request

**Please confirm or adjust:**

1. **Flat-by-design** (no elevation ramp) or define ramp?
2. **Primary contrast:** Option B (use `#0066CC` for text-bearing primary buttons) or other?
3. **Toggle Error state:** Add or document omission?
4. **Checkbox/Radio Focus states:** Add (recommended for accessibility)?
5. **Variable `940:4730` (`#020736`):** Assign role `color/brand/deep-navy` or delete?
6. **8th text style** `label-emphasis/13-600`: Add after confirming 11 usages are intentional?

Once approved, I will:
- Provide exact Figma UI steps for each approved change
- Wait for you to execute in Figma (or execute via plugin if available)
- Re-run extraction scripts
- Update all 4 handoff documents
- Verify consistency

**No application screens will be started until this gate is cleared.**