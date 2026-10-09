# Phase 1 — Design System Audit

**Date:** 2026-10-09
**Status:** Audit complete. Gate held pending approval of §7 decisions.
**Scope:** read-only inspection of the InstiServe Figma file and this repository.

> No Figma objects were created, updated, or deleted. Every Figma value below was
> read back from the REST API (`GET /v1/files/:key/nodes`). Nothing is inferred from
> screenshots alone.

---

## 0. Headline findings (read this first)

1. **The Figma file *is* the design system.** There is no upstream source to
   translate from — see §2. The prompt pack assumes code → Figma; the real
   direction is **Figma → code**.
2. **This repository has no design system in it** — see §2.1. The library lives in
   Figma and this repo is its future consumer.
3. **The Figma REST API is read-only**, so the library can only be completed
   manually in the Figma UI — see §1.
4. The system that *does* exist is **mature and internally consistent**: 48 variables,
   13 component sets, 77 variants, documented do/don't guidance. The real gaps are
   narrow and enumerated in §6.
5. **Do not port anything from an unrelated codebase.** See §2.2.

---

## 1. Access reality check

Per `MASTER-PROMPT.md` rule 8 and `SECURITY-AND-ACCESS.md` ("stop before attempting
edits and explain the access limitation"), the write capability was tested before
planning any edits. **Result: read-only.** Under the confirmed manual-in-Figma
decision (§7.2) this is no longer blocking, but it is recorded because it is why no
automation was attempted.

### 1.1 What the token can do

| Endpoint | Method | Result | Meaning |
|---|---|---|---|
| `/v1/me` | GET | `200` | Token is valid |
| `/v1/files/:key/nodes` | GET | `200` | Full node read |
| `/v1/files/:key` | GET | `200` | Full document read |
| `/v1/files/:key/images` | GET | `200` | Render to PNG |
| `/v1/files/:key/styles` | GET | `200` → `{"styles":[]}` | Read works; **file has zero styles** |
| `/v1/files/:key/variables/local` | GET | `403` | Needs `file_variables:read` |
| `/v1/files/:key/variables` | POST | `403` | Needs `file_variables:write` |
| `/v1/files/:key/variables/values` | POST | `404` | Endpoint not available |
| `/v1/files/:key/plugins` | POST | `404` | Endpoint not available |
| `/v1/files/:key/rename` | POST | `404` | Endpoint not available |

Granted scopes reported by the API: `current_user:read, file_comments:read,
file_comments:write, file_content:read, file_metadata:read, file_versions:read,
library_assets:read, library_content:read, team_library_content:read,
file_dev_resources:read, file_dev_resources:write, private_sandbox:connect,
webhooks:read, webhooks:write, folders:read`.

### 1.2 Conclusion

**The Figma REST API is read-only for document content.** It exposes no endpoint to
create or modify nodes, pages, components, text styles, or effect styles — those
requests return `404 Not found`. The only write-shaped endpoint relevant to a design
system is `POST /files/:key/variables`, which:

1. is gated behind the `file_variables:write` scope, which this token does not have; and
2. is an **Enterprise-plan** feature.

**Phases 2–4 cannot be automated with the current access.** (Under the confirmed
manual-in-Figma decision this is accepted, not blocking.) Creating Figma variables,
text styles, effect styles, component sets, variants, and pages programmatically
requires one of:

| Option | What it needs | Notes |
|---|---|---|
| **A. Re-scope the PAT** | New token with `file_variables:read` + `file_variables:write` | Fixes *variable* reading and writing **only**. Does **not** unlock node/component/style authoring. Enterprise plan required. |
| **B. Figma plugin** | A plugin run in the Figma desktop app | The only supported way to create components, styles, and pages programmatically. Full `file_content` write. |
| **C. Figma MCP server** | An MCP integration exposing write tools | None configured in `opencode.jsonc`. Would need to be added. |
| **D. Manual authoring** | A human in the Figma UI | Fine for the gaps listed in §6, which are small. |

Option **B** is the correct long-term path; Option **A** should be requested anyway
because this audit hit a real ceiling in §1.3.

### 1.3 Collateral finding: variable *names* are unreadable

`GET /files/:key/variables/local` requires `file_variables:read`, which this token
lacks. Variable names therefore cannot be read directly.

This was worked around **without inventing anything**: every node bound to a variable
still reports its *resolved* value, so `scripts/figma-resolve-vars.mjs` reconstructs a
factual `variable ID → value` table. Separately, the Foundations frame *documents each
token's name and hex in text nodes* (§3), which supplies the names. The two sources
agree, which cross-validates the mapping. Names are marked **inferred-from-doc** where
that is how they were obtained.

### 1.4 Credential handling

- Token is stored **only** in a local, git-ignored `.env` as `FIGMA_ACCESS_TOKEN`
  (`.gitignore` in this repo ignores `.env`).
- Token is **not** present in any tracked file, prompt, log, or document. Verified by
  scanning every file in the repo for the Figma personal-access-token prefix — clean.
- `scripts/figma-extract.mjs` and `scripts/figma-resolve-vars.mjs` read the token from
  the environment only and never print it.
- ⚠️ **The token was pasted in plaintext in chat.** It should be considered exposed.
  Rotate it in Figma → Settings → Security → Personal access tokens, and store the
  replacement only in `.env` (never in a committed file).
- No automated Figma writes were attempted at any point (§1.2).

---

## 2. Source-of-truth reality check

### 2.1 This repo has no design system yet

```
GET api.github.com/repos/ArkHimar/instiserve
  full_name : ArkHimar/instiserve
  private   : false
  size      : 0            ← no content
  pushed_at : 2026-10-09T11:53:23Z
  description: "InstiServe from Figma"

GET /branches   -> []
GET /contents   -> 404 "This repository is empty."
git ls-remote   -> no refs
```

**There is no repository-side design system to translate into Figma.** The prompt
pack's framing — *"translate the design system already present in the repository …
into a coherent Figma library"* — does not match reality. The system already exists
**in Figma**, is well developed, and the repo's own description confirms the intended
direction: **Figma is the source; this repo is the consumer.**

This inverts the phase order. Phases 2–4 ("create tokens / build components /
organize the library in Figma") are largely **already done**. What remains in Figma is
a short, specific close-out list (§6). The genuinely large remaining task is the one
the prompt pack puts *last* — producing the implementation artifacts for this repo
(tokens, components, usage rules) so that app code can be written against the library.

### 2.2 Exclusion: do not port from an unrelated codebase

The audit workspace contained a separate project (`creativeos`) with its own
`packages/ui/tokens.css`: CreativeOS, slate neutrals, a `#3366ff` brand ramp, a system
font stack, and 7 components. An earlier draft of this document framed that as a
"two competing design systems" conflict.

**That framing was wrong and is retracted.** `creativeos` is a different product. Its
tokens are not a competing source of truth for InstiServe and must not influence this
library. Nothing from it is used in any recommendation below.

Retained for reference only, one incidental observation: `#94A3B8` appears in both
codebases by coincidence, which triggered the original false comparison.

---

## 3. Figma foundations (authoritative, as documented in the file)

Extracted from text nodes in `941:11078` "InstiServe · Foundations" and the
Status & feedback section `941:13730`. Names are as documented *inside Figma*.

### 3.1 Semantic / brand colours

| Role (Figma label) | Value | Variable ID | Usage note from file |
|---|---|---|---|
| `primary` | `#0088FF` | `940:4724` | Actions, selected indicators, switches |
| `supporting-blue` | `#0066CC` | `940:4720` | Readable small blue text, high-contrast hover |
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
| `deep-navy` | `#020736` | `940:4730` | (no documented role found) |

The file states: *"White text on the original blue is retained for source fidelity,
not an AA contrast claim."* **Flagged, not silently changed** — see §6.

### 3.2 Neutral scale

`neutral/0 #FFFFFF` · `/50 #FAFAFA` · `/100 #F5F5F5` · `/200 #E5E5E5` ·
`/300 #D4D4D4` · `/400 #A3A3A3` · `/500 #737373` · `/600 #525252` · `/700 #404040` ·
`/800 #262626` · `/900 #171717` · `/950 #0A0A0A` · `/1000 #000000`
(variable IDs `944:123` … `944:147`)

### 3.3 Status palette (labelled in-file as "Foreground tokens / proposed additions")

| Tone | Foreground | Background | Border | Variable IDs (fg/bg/border) |
|---|---|---|---|---|
| Neutral | `#686978` | — | — | `944:148` |
| Info | `#0066CC` | — | — | `944:149` |
| Success | `#067647` | `#ECFDF3` | `#ABEFC6` | `944:151` / `944:156` / `944:158` |
| Warning | `#93370D` | `#FFFAEB` | `#FEDF89` | `944:153` / `944:160` / `944:162` |
| Error | `#B42318` | `#FEF3F2` | `#FECDCA` | `944:154` / `944:164` / `944:166` |

The file explicitly marks Success and Warning as **"New semantic extension"** —
i.e. proposed, not previously present. These need approval before being treated as approved tokens.

### 3.4 Typography (single family: **Outfit**)

| Role | Size / line-height | Weight |
|---|---|---|
| Page title | 20 / 28 px | 500 |
| Section title | 18 / 24 px | 500 |
| Settings tab | 17 / 24 px | 500 |
| Body / field label | 15 / 22 px | 400 |
| Control label | 14 / 20 px | 400 |
| Helper | 13 / 20 px | 400 |
| Caption | 12 / 18 px | 400 |

Weights in use: 400, 500, 600. Letter-spacing is `0` throughout (347 text nodes).
⚠️ Sizes 13, 17, and several line-heights are **non-integer-ratio** values unique to
this file; they do not form a clean modular scale. Documented as-is, not normalised.

### 3.5 Spacing, radii, control heights

- **Spacing variables:** 4, 6, 8, 12, 16, 20, 24, 32, 40 px (`940:4732`–`940:4740`)
- **Radii:** `5` Field · `10` Panel · `30` Pill
- **Control heights:** Fields 48 · Actions 44 · Compact 32 · Tabs 57 px
- **Documented spacing guidance (verbatim):** *"6 px label-to-field gap matches settings.
  Use 12–16 px inside cards, 24–32 px between groups."*
- **Shadows:** only two distinct drop shadows across both frames —
  `y0 blur0 spread3` (×8) and `y6 blur16 spread0` (×7). Both are near-flat;
  there is **no documented elevation ramp**.
- **Stroke:** 1 px dominant (×625); 1.5 px secondary; a few fractional artifacts (0.74, 0.70).

---

## 4. Figma component inventory (13 component sets, 77 variants)

| Component set | Variants | Properties |
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

Plus `71` instances used inside the documented usage examples.

### 4.1 Coverage note

The 13 component sets cover: buttons, tabs, dropdowns, toggles, breadcrumbs, inputs,
checkboxes, radios, badges, alerts, pagination, table rows, empty states.

Not present in Figma, and **not required** — these are app-level concerns for this
repo, to be built in code rather than added to the Figma library:

- `loading` / busy states (needed by any submit-style Button)
- `Dialog` / modal
- `Toast` (Figma's `Alert` is the static equivalent; transient toasts are app-level)
- `Spinner` / skeleton loaders

`PHASE-3-COMPONENTS.md` rule 10 says not to create speculative product features, so
these are deliberately **not** added to Figma. They are listed so Phase 5 can specify
them as code-only.

---

## 5. Component specification — `InstiServe/Button`

Extracted per-variant from the component set. Useful as the reference when building
anything derived from the button. All variants: **radius 30 (pill), height 44 px,
label 14px/400**.

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

**Note:** Primary hover darkens to `#0066CC` while its label stays white — that is
deliberate and keeps the hovered state at **5.57:1 (AA pass)** while the resting state
is 3.52:1 (§6.4). Secondary and Ghost share the `#E5F3FF` hover surface.

`Size=Compact` variants are token-identical to `Size=Regular`; only height differs
(32 px vs 44 px, per the documented "Compact 32" control height).

---

## 6. Issues, conflicts, and gaps (no values invented)

1. ~~**Two competing systems**~~ — **resolved, false alarm.** An earlier draft of this
   audit compared the Figma library against an unrelated codebase
   (`creativeos`). That comparison is retracted (§2.2). There is one design system:
   InstiServe, in Figma.
2. ~~**`Outfit` is not an approved family**~~ — **resolved.** A stale font list from an
   unrelated project was being applied here. **Outfit is correct** (§7.3). No action.
3. **No dark mode in Figma.** `PHASE-2-TOKENS.md` rule 3 says *"Do not invent a dark
   theme"* — so dark mode is **not** started. Recorded as a decision for the owner
   (§7.4), not as a defect.
4. **Contrast — measured, not assumed.** Ratios below are WCAG 2.1 relative-luminance
   calculations. The Figma file states: *"White text on the original blue is retained
   for source fidelity, not an AA contrast claim."* Recorded, **not silently altered**.

   | Pair | Ratio | AA normal text | AA large text |
   |---|---|---|---|
   | `#FFFFFF` on `#0088FF` (primary) | **3.52:1** | ❌ FAIL | ✅ PASS |
   | `#FFFFFF` on `#0066CC` (supporting-blue) | 5.57:1 | ✅ PASS | ✅ PASS |
   | `#141313` on `#FFFFFF` (surface) | 18.55:1 | ✅ PASS | ✅ PASS |
   | `#141313` on `#F9FAFB` (canvas) | 17.75:1 | ✅ PASS | ✅ PASS |
   | `#686978` on `#FFFFFF` (muted) | 5.41:1 | ✅ PASS | ✅ PASS |
   | `#0066CC` on `#FFFFFF` (link/selected) | 5.57:1 | ✅ PASS | ✅ PASS |
   | `#242749` on `#FFFFFF` (titles) | 14.37:1 | ✅ PASS | ✅ PASS |
   | `#141313` on `#E5F3FF` (text on selected) | 16.42:1 | ✅ PASS | ✅ PASS |
   | `#B42318` on `#FEF3F2` (error on bg) | 6.05:1 | ✅ PASS | ✅ PASS |
   | `#067647` on `#ECFDF3` (success on bg) | 5.40:1 | ✅ PASS | ✅ PASS |
   | `#93370D` on `#FFFAEB` (warning on bg) | 7.21:1 | ✅ PASS | ✅ PASS |

   **The system is otherwise well-formed.** The single genuine accessibility problem
   is white-on-`#0088FF` at **3.52:1**: it passes AA for large text (≥3:1) but fails for
   body-size text (needs 4.5:1). Every other documented pairing passes AA.

   **Recommendation (requires approval — a brand-value change):** keep `#0088FF` for
   non-text uses (fills, selected indicators, switch thumbs, focus borders — the Figma
   file's documented role) and use `#0066CC` (5.57:1) for *text-bearing* primary
   buttons, or reduce button label size to the 20px+ "large text" threshold. This
   preserves the brand blue exactly, as the Figma file itself instructs.

   Secondary note: the documented `focus` colour `#B8DEFF` sits at **1.41:1** against
   `#FFFFFF`. That is too weak to serve as a *sole* focus indicator, though it works
   as an inner ring paired with a darker `#0066CC` or `#242749` outer ring. The file
   does not document a two-ring focus treatment — worth specifying.
5. **Zero Figma styles.** `meta.styles: []` — there are **no text styles, no effect
   styles, no grid styles**. The 7 type roles in §3.4 exist only as direct formatting
   on 804 text nodes. This is the single largest structural gap and the main Phase 2
   work item.
6. **No elevation ramp.** Only 2 near-flat shadows exist across both frames
   (`y0 blur0 spread3` ×8, `y6 blur16 spread0` ×7). There is no documented
   shadow/elevation scale. Either define one deliberately, or state explicitly that
   InstiServe is flat-by-design and ship 0–2 shadows only.
7. **Fractional artifacts.** Radii `14.814814…` and `0.740740` stroke weights suggest
   unscaled transforms on some layers. Should be normalised to the 5/10/30 scale.
8. **`#020736` (`940:4730`) has no documented role.** Appears twice, unexplained.
9. **`Toggle` lacks an `Error` state** and **`Radio` lacks a `Focus` state**, while
   `Input`/`Dropdown` have full state coverage. Inconsistent.
10. **Missing in Figma, present in repo:** `loading` state on Button, `Dialog`,
    `Toast`, `Spinner`. Missing in repo, present in Figma: 9 components (§4.1).

---

## 7. Decisions recorded

### 7.1 Source of truth — **RESOLVED**

`ArkHimar/instiserve` is the consumer; **the Figma file is the source of truth.**
There is no upstream code system. Nothing in this library should be redefined to match
another codebase.

### 7.2 Figma write path — **RESOLVED: manual in the Figma UI**

Per the confirmed decision, Phases 2–4 are executed by hand in Figma. This audit's job
is therefore to be **precise enough to build from**. See
[`FIGMA-MANUAL-BUILD-SPEC.md`](./FIGMA-MANUAL-BUILD-SPEC.md) for the copy-ready
close-out list. No automation is required, and the token's missing
`file_variables:read` scope (§1.3) is no longer on the critical path.

### 7.3 Typeface — **RESOLVED: Outfit is correct**

Confirmed: an unrelated project's font list (Inter / Manrope / Satoshi / General Sans
/ Neue Haas) was being misapplied to InstiServe. **Outfit 400/500/600 is the approved
family** — it is the only family in the Figma file, and it is now recorded as correct
here so it does not get re-litigated.

When this repo's own design-system doc is first written, **list Outfit as the approved
family from the outset.** No edit was needed to any other project's file, because
that file belongs to a different product.

### 7.4 Still open (non-blocking)

- Whether `instiserve` needs a **dark mode**. Figma defines none, and
  `PHASE-2-TOKENS.md` forbids inventing one. Not started.
- Whether to accept the **3.52:1** white-on-`#0088FF` trade-off (§6.4).

---

## 8. Phase 1 validation performed

- [x] Figma token verified (`GET /v1/me` → `200`, identity confirmed)
- [x] Write capability probed across 6 endpoints (§1.1) — confirmed unavailable
- [x] Both target frames read in full (node trees + render)
- [x] Both frames rendered to PNG and visually reviewed
- [x] 48 variable bindings resolved to concrete values
- [x] Foundations + Status sections read as text → token **names** recovered
- [x] All 13 component sets enumerated with variants and properties
- [x] Repo confirmed **empty** (`size: 0`, no branches, no contents)
- [x] Unrelated `creativeos` codebase inspected and **explicitly excluded** as a
      different product (§2.2)
- [x] Cross-system conflict matrix built — then retracted (§2.2)
- [x] Token stored in git-ignored `.env`; not written to any tracked file

## 9. Reproduce this audit

```bash
set -a; source .env; set +a        # supplies FIGMA_ACCESS_TOKEN
node scripts/figma-extract.mjs     # colours, type, spacing, radii, shadows
node scripts/figma-resolve-vars.mjs # variable ID -> resolved value
```

---

**Stopping here for the Phase 1 gate.** Phases 2–5 require the decisions in §7 and,
independently, a working Figma write path (§1.2). Nothing has been changed in Figma
or in the repository design system.