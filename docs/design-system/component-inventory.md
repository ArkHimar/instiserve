# Component Inventory — InstiServe Design System

**Source:** Figma file `5cx1t71DbC23GlziY7xZPQ`, frames `941:11077` + `941:12316`
**Component sets:** 13 | **Variants:** 77 | **Instances in examples:** 71

---

## Component sets

| # | Component set | Variants | Properties | Frame |
|---|---|---|---|---|
| 1 | `InstiServe/Button` | 24 | `Emphasis`, `State`, `Size`, `Label` | DESIGN SYSTEMS |
| 2 | `InstiServe/Tab` | 6 | `Style`, `State`, `Label` | DESIGN SYSTEMS |
| 3 | `InstiServe/Dropdown` | 6 | `State`, `Size`, `Label`, `Value`, `Placeholder`, `Helper`, `Error message`, `Disabled reason` | DESIGN SYSTEMS |
| 4 | `InstiServe/Toggle` | 4 | `Value`, `State` | DESIGN SYSTEMS |
| 5 | `InstiServe/Breadcrumb` | 4 | `State`, `Label` | DESIGN SYSTEMS 2 |
| 6 | `InstiServe/Input` | 6 | `State`, `Label`, `Value`, `Placeholder`, `Helper`, `Error message`, `Invalid value`, `Disabled reason`, `Read-only reason` | DESIGN SYSTEMS 2 |
| 7 | `InstiServe/Checkbox` | 6 | `Value`, `State` | DESIGN SYSTEMS 2 |
| 8 | `InstiServe/Radio` | 4 | `Value`, `State` | DESIGN SYSTEMS 2 |
| 9 | `InstiServe/Badge` | 5 | `Tone`, `Label` | DESIGN SYSTEMS 2 |
| 10 | `InstiServe/Alert` | 4 | `Tone`, `Title`, `Description` | DESIGN SYSTEMS 2 |
| 11 | `InstiServe/PageButton` | 3 | `State`, `Label` | DESIGN SYSTEMS 2 |
| 12 | `InstiServe/TableRow` | 3 | `State`, `Name`, `Email`, `Identifier`, `Role`, `Department`, `Label` | DESIGN SYSTEMS 2 |
| 13 | `InstiServe/EmptyState` | 2 | `Kind`, 4 text properties | DESIGN SYSTEMS 2 |

---

## Per-component detail

### 1. InstiServe/Button

**Variants (24):** `Emphasis` (Primary/Secondary/Ghost) × `State` (Default/Hover/Focus/Disabled) × `Size` (Regular/Compact)

| Property | Type | Values |
|---|---|---|
| `Emphasis` | Variant | Primary, Secondary, Ghost |
| `State` | Variant | Default, Hover, Focus, Disabled |
| `Size` | Variant | Regular (44px), Compact (32px) |
| `Label` | Text | string |

**Token bindings (Size=Regular):**

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

**Shared specs:** radius 30 (pill), label 14px/400 Outfit.

---

### 2. InstiServe/Tab

**Variants (6):** `Style` (Underline/Pill) × `State` (Default/Selected/Disabled)

| Property | Type | Values |
|---|---|---|
| `Style` | Variant | Underline, Pill |
| `State` | Variant | Default, Selected, Disabled |
| `Label` | Text | string |

---

### 3. InstiServe/Dropdown

**Variants (6):** `State` (Default/Open/Error/Disabled/Focus/Filled)

| Property | Type | Values |
|---|---|---|
| `State` | Variant | Default, Open, Error, Disabled, Focus, Filled |
| `Size` | Variant | Regular (documented) |
| `Label` | Text | string |
| `Value` | Text | string |
| `Placeholder` | Text | string |
| `Helper` | Text | string |
| `Error message` | Text | string |
| `Disabled reason` | Text | string |

---

### 4. InstiServe/Toggle

**Variants (4):** `Value` (On/Off) × `State` (Default/Disabled)

| Property | Type | Values |
|---|---|---|
| `Value` | Variant | On, Off |
| `State` | Variant | Default, Disabled |

> ⚠️ **Gap:** No `Error` state. Add or document omission.

---

### 5. InstiServe/Breadcrumb

**Variants (4):** `State` (Default/Hover/Current/Disabled)

| Property | Type | Values |
|---|---|---|
| `State` | Variant | Default, Hover, Current, Disabled |
| `Label` | Text | string |

---

### 6. InstiServe/Input

**Variants (6):** `State` (Default/Filled/Focus/Error/Disabled/ReadOnly)

| Property | Type | Values |
|---|---|---|
| `State` | Variant | Default, Filled, Focus, Error, Disabled, ReadOnly |
| `Label` | Text | string |
| `Value` | Text | string |
| `Placeholder` | Text | string |
| `Helper` | Text | string |
| `Error message` | Text | string |
| `Invalid value` | Text | string |
| `Disabled reason` | Text | string |
| `Read-only reason` | Text | string |

---

### 7. InstiServe/Checkbox

**Variants (6):** `Value` (Unchecked/Checked/Indeterminate) × `State` (Default/Disabled)

| Property | Type | Values |
|---|---|---|
| `Value` | Variant | Unchecked, Checked, Indeterminate |
| `State` | Variant | Default, Disabled |

> ⚠️ **Gap:** No `Focus` state for keyboard parity.

---

### 8. InstiServe/Radio

**Variants (4):** `Value` (Unselected/Selected) × `State` (Default/Disabled)

| Property | Type | Values |
|---|---|---|
| `Value` | Variant | Unselected, Selected |
| `State` | Variant | Default, Disabled |

> ⚠️ **Gap:** No `Focus` state for keyboard parity.

---

### 9. InstiServe/Badge

**Variants (5):** `Tone` (Neutral/Info/Success/Warning/Error)

| Property | Type | Values |
|---|---|---|
| `Tone` | Variant | Neutral, Info, Success, Warning, Error |
| `Label` | Text | string |

**Token bindings:**

| Tone | Foreground | Background | Border |
|---|---|---|---|
| Neutral | `#686978` (`944:148`) | — | — |
| Info | `#0066CC` (`944:149`) | — | — |
| Success | `#067647` (`944:151`) | `#ECFDF3` (`944:156`) | `#ABEFC6` (`944:158`) |
| Warning | `#93370D` (`944:153`) | `#FFFAEB` (`944:160`) | `#FEDF89` (`944:162`) |
| Error | `#B42318` (`944:154`) | `#FEF3F2` (`944:164`) | `#FECDCA` (`944:166`) |

> ⚠️ Success/Warning marked as *"New semantic extension"* in Figma.

---

### 10. InstiServe/Alert

**Variants (4):** `Tone` (Info/Success/Warning/Error)

| Property | Type | Values |
|---|---|---|
| `Tone` | Variant | Info, Success, Warning, Error |
| `Title` | Text | string |
| `Description` | Text | string |

**Surface recipes (same as Badge):**

| Tone | FG | BG | Border |
|---|---|---|---|
| Info | `#0066CC` | — | — |
| Success | `#067647` / `#ECFDF3` / `#ABEFC6` |
| Warning | `#93370D` / `#FFFAEB` / `#FEDF89` |
| Error | `#B42318` / `#FEF3F2` / `#FECDCA` |

---

### 11. InstiServe/PageButton

**Variants (3):** `State` (Default/Current/Disabled)

| Property | Type | Values |
|---|---|---|
| `State` | Variant | Default, Current, Disabled |
| `Label` | Text | string |

---

### 12. InstiServe/TableRow

**Variants (3):** `State` (Default/Selected/Hover)

| Property | Type | Values |
|---|---|---|
| `State` | Variant | Default, Selected, Hover |
| `Name` | Text | string |
| `Email` | Text | string |
| `Identifier` | Text | string |
| `Role` | Text | string |
| `Department` | Text | string |
| `Label` | Text | string |

---

### 13. InstiServe/EmptyState

**Variants (2):** `Kind` (NoData/NoResults)

| Property | Type | Values |
|---|---|---|
| `Kind` | Variant | NoData, NoResults |
| `No-results title` | Text | string |
| `No-results description` | Text | string |
| `No-data title` | Text | string |
| `No-data description` | Text | string |

---

## Usage examples in file (71 instances)

| Example frame | Instances | Components demonstrated |
|---|---|---|
| InstiServe · Dropdowns | 10 | Dropdown states, settings composition |
| InstiServe · Tabs | 7 | Tab styles (Underline/Pill), settings tabs |
| InstiServe · Settings composition | 12 | Full settings form with Tabs, Buttons, Toggles, Dropdowns |
| InstiServe · Buttons | 12 | All Button emphases, states, sizes |
| InstiServe · Toggles | 8 | Toggle On/Off, Feature switches, Settings actions |
| InstiServe · Typography | 2 | Type specimens |
| InstiServe · Data & navigation | 8 | TableRow, PageButton, Breadcrumb |
| InstiServe · Selection | 6 | Checkbox, Radio groups |
| InstiServe · Breadcrumbs | 4 | Breadcrumb states |
| InstiServe · Status & feedback | 10 | Badge tones, Alert tones, surface recipes |
| InstiServe · Forms | 12 | Input states, Checkbox, Radio, Dropdown |

---

## Components NOT in Figma (app-level concerns)

Per `PHASE-3-COMPONENTS.md` rule 10 (no speculative product features):

| Component | Reason | Implementation note |
|---|---|---|
| Button `loading` state | Async submission feedback | Add `loading` boolean prop; show spinner, disable, preserve width |
| `Dialog` / Modal | App-level overlay | Not a reusable primitive; build in app with Portal |
| `Toast` / Snackbar | Transient notifications | Figma's `Alert` is static equivalent; toasts need queue/animation |
| `Spinner` / Skeleton | Loading placeholders | App-level; not in design system scope |

---

## Implementation priority for code

1. **Button** — highest reuse, complete variant matrix
2. **Input** — form foundation, most states
3. **Badge / Alert** — status palette, shared surface recipes
4. **Tab / Dropdown / Toggle** — settings UI primitives
5. **Checkbox / Radio / Breadcrumb / PageButton** — supporting forms/nav
6. **TableRow / EmptyState** — data display patterns

---

## Quality checklist (from `PHASE-3-COMPONENTS.md`)

- [x] Component names consistent and searchable (`InstiServe/<Name>`)
- [x] Variants represent meaningful combinations (not uncontrolled Cartesian)
- [x] Auto Layout used throughout; components resize with content
- [x] Nested components and token references intact
- [ ] **Missing states documented** (Toggle Error, Radio/Checkbox Focus)
- [ ] Unsupported properties recorded (loading, dialog, toast, spinner)
- [ ] Accessible contrast verified per token (see `FIGMA-HANDOFF.md` §7)