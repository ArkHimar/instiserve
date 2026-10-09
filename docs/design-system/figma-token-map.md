# Figma Token Map — InstiServe Design System

**Generated from:** Figma REST API read-only inspection
**Audit:** `docs/design-system/FIGMA-AUDIT.md`
**Handoff:** `docs/design-system/FIGMA-HANDOFF.md`

---

## Colour tokens

### Semantic / brand (primitive)

| Figma Variable ID | Semantic name | Hex | Used for |
|---|---|---|---|
| `940:4724` | `color/brand/primary` | `#0088FF` | Primary actions, selected indicators, switches |
| `940:4720` | `color/brand/supporting-blue` | `#0066CC` | Small blue text, hover states on primary |
| `940:4722` | `color/brand/accent` | `#242749` | Titles, emphasis |
| `940:4712` | `color/text/primary` | `#141313` | Body text, controls |
| `940:4710` | `color/text/muted` | `#686978` | Secondary copy, helper text |
| `940:4714` | `color/surface/canvas` | `#F9FAFB` | Page background |
| `940:4716` | `color/surface/raised` | `#FFFFFF` | Cards, fields, dialogs |
| `940:4718` | `color/surface/selected` | `#E5F3FF` | Selected rows, hover on ghost/secondary |
| `940:4708` | `color/border/default` | `#E5E5E9` | Input borders, dividers, card outlines |
| `940:4704` | `color/surface/disabled` | `#F1F2F4` | Disabled button backgrounds |
| `940:4702` | `color/status/error` | `#B42318` | Error text, error borders |
| `940:4706` | `color/focus/ring` | `#B8DEFF` | Focus ring (inner) |
| `940:4730` | `color/brand/deep-navy` | `#020736` | **Unassigned** — appears twice, no documented role |

### Neutral scale (primitive)

| Figma Variable ID | Token name | Hex | Role |
|---|---|---|---|
| `944:123` | `color/neutral/0` | `#FFFFFF` | White surface |
| `944:125` | `color/neutral/50` | `#FAFAFA` | Quiet canvas |
| `944:127` | `color/neutral/100` | `#F5F5F5` | Hover surface |
| `944:129` | `color/neutral/200` | `#E5E5E5` | Subtle divider |
| `944:131` | `color/neutral/300` | `#D4D4D4` | Control outline |
| `944:133` | `color/neutral/400` | `#A3A3A3` | Disabled foreground |
| `944:135` | `color/neutral/500` | `#737373` | Secondary icons |
| `944:137` | `color/neutral/600` | `#525252` | Secondary text |
| `944:139` | `color/neutral/700` | `#404040` | Body text |
| `944:141` | `color/neutral/800` | `#262626` | Strong labels |
| `944:143` | `color/neutral/900` | `#171717` | Primary text |
| `944:145` | `color/neutral/950` | `#0A0A0A` | High emphasis |
| `944:147` | `color/neutral/1000` | `#000000` | Pure black |

### Status palette (semantic extensions)

| Figma Variable ID | Token name | Hex | Role |
|---|---|---|---|
| `944:148` | `color/status/neutral/fg` | `#686978` | Neutral badge text |
| `944:149` | `color/status/info/fg` | `#0066CC` | Info badge text |
| `944:151` | `color/status/success/fg` | `#067647` | Success text |
| `944:156` | `color/status/success/bg` | `#ECFDF3` | Success background |
| `944:158` | `color/status/success/border` | `#ABEFC6` | Success border |
| `944:153` | `color/status/warning/fg` | `#93370D` | Warning text |
| `944:160` | `color/status/warning/bg` | `#FFFAEB` | Warning background |
| `944:162` | `color/status/warning/border` | `#FEDF89` | Warning border |
| `944:154` | `color/status/error/fg` | `#B42318` | Error text |
| `944:164` | `color/status/error/bg` | `#FEF3F2` | Error background |
| `944:166` | `color/status/error/border` | `#FECDCA` | Error border |

> ⚠️ Success and Warning marked as *"New semantic extension"* in Figma — proposed, not previously present.

### Spacing & sizing (primitive)

| Figma Variable ID | Token name | Value(s) | Type |
|---|---|---|---|
| `940:4732` | `space/4` | padding 4, itemSpacing 4 | spacing |
| `940:4733` | `space/6` | itemSpacing 6 | spacing |
| `940:4734` | `space/8` | padding 8, itemSpacing 8 | spacing |
| `940:4735` | `space/12` | padding 12, itemSpacing 12 | spacing |
| `940:4736` | `space/16` | padding 16, itemSpacing 16 | spacing |
| `940:4737` | `space/20` | padding 20, itemSpacing 20 | spacing |
| `940:4738` | `space/24` | itemSpacing 24 | spacing |
| `940:4739` | `space/32` | itemSpacing 32 | spacing |
| `940:4740` | `space/40` | padding 40, itemSpacing 40 | spacing |

---

## Recommended code token structure (CSS custom properties)

```css
/* Primitive colour tokens — direct from Figma variables */
:root {
  /* Brand */
  --color-brand-primary: #0088FF;
  --color-brand-supporting-blue: #0066CC;
  --color-brand-accent: #242749;

  /* Neutral scale */
  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-300: #D4D4D4;
  --color-neutral-400: #A3A3A3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic aliases — reference primitives */
  --color-text-primary: var(--color-neutral-900);     /* #141313 ≈ #171717 */
  --color-text-muted: var(--color-neutral-500);       /* #686978 ≈ #737373 */
  --color-text-on-primary: #FFFFFF;
  --color-text-on-accent: #FFFFFF;

  --color-surface-canvas: #F9FAFB;       /* no exact neutral match */
  --color-surface-raised: var(--color-neutral-0);
  --color-surface-selected: #E5F3FF;     /* brand-derived */
  --color-surface-disabled: #F1F2F4;

  --color-border-default: var(--color-neutral-200); /* #E5E5E9 ≈ #E5E5E5 */

  --color-focus-ring: #B8DEFF;           /* 1.41:1 on white — pair with darker outer ring */

  /* Status (proposed extensions) */
  --color-success-fg: #067647;
  --color-success-bg: #ECFDF3;
  --color-success-border: #ABEFC6;

  --color-warning-fg: #93370D;
  --color-warning-bg: #FFFAEB;
  --color-warning-border: #FEDF89;

  --color-error-fg: #B42318;             /* same as brand error */
  --color-error-bg: #FEF3F2;
  --color-error-border: #FECDCA;

  --color-info-fg: #0066CC;              /* same as supporting-blue */

  /* Spacing */
  --space-1: 4px;    /* base unit */
  --space-1-5: 6px;  /* label-to-field */
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;

  /* Radii (not variable-bound in Figma) */
  --radius-field: 5px;
  --radius-panel: 10px;
  --radius-pill: 30px;

  /* Type scale */
  --font-family: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --text-page-title: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);  /* 20px */
  --text-section-title: 1.125rem;   /* 18px */
  --text-settings-tab: 1.0625rem;   /* 17px */
  --text-body: 0.9375rem;           /* 15px */
  --text-control-label: 0.875rem;   /* 14px */
  --text-helper: 0.8125rem;         /* 13px */
  --text-caption: 0.75rem;          /* 12px */

  --leading-tight: 1.25;
  --leading-normal: 1.5;
}
```

> **Note on text colour mapping:** Figma uses `#141313` (primary text) and `#686978` (muted) which don't exactly match neutral steps. The CSS above maps to nearest neutral equivalents (`neutral/900` = `#171717`, `neutral/500` = `#737373`). For pixel-perfect fidelity, keep the exact Figma hex values as separate tokens.

---

## Variable ID → token name lookup (for debugging)

| Variable ID | Token name | Category |
|---|---|---|
| `940:4702` | `color/status/error` | semantic |
| `940:4704` | `color/surface/disabled` | semantic |
| `940:4706` | `color/focus/ring` | semantic |
| `940:4708` | `color/border/default` | semantic |
| `940:4710` | `color/text/muted` | semantic |
| `940:4712` | `color/text/primary` | semantic |
| `940:4714` | `color/surface/canvas` | semantic |
| `940:4716` | `color/surface/raised` | semantic |
| `940:4718` | `color/surface/selected` | semantic |
| `940:4720` | `color/brand/supporting-blue` | brand |
| `940:4722` | `color/brand/accent` | brand |
| `940:4724` | `color/brand/primary` | brand |
| `940:4726` | `color/neutral/400` (usage) | neutral |
| `940:4728` | `color/neutral/300` (usage) | neutral |
| `940:4730` | `color/brand/deep-navy` (unassigned) | brand |
| `940:4732` | `space/4` | spacing |
| `940:4733` | `space/6` | spacing |
| `940:4734` | `space/8` | spacing |
| `940:4735` | `space/12` | spacing |
| `940:4736` | `space/16` | spacing |
| `940:4737` | `space/20` | spacing |
| `940:4738` | `space/24` | spacing |
| `940:4739` | `space/32` | spacing |
| `940:4740` | `space/40` | spacing |
| `944:123` | `color/neutral/0` | neutral |
| `944:125` | `color/neutral/50` | neutral |
| `944:127` | `color/neutral/100` | neutral |
| `944:129` | `color/neutral/200` | neutral |
| `944:131` | `color/neutral/300` | neutral |
| `944:133` | `color/neutral/400` | neutral |
| `944:135` | `color/neutral/500` | neutral |
| `944:137` | `color/neutral/600` | neutral |
| `944:139` | `color/neutral/700` | neutral |
| `944:141` | `color/neutral/800` | neutral |
| `944:143` | `color/neutral/900` | neutral |
| `944:145` | `color/neutral/950` | neutral |
| `944:147` | `color/neutral/1000` | neutral |
| `944:148` | `color/status/neutral/fg` | status |
| `944:149` | `color/status/info/fg` | status |
| `944:151` | `color/status/success/fg` | status |
| `944:153` | `color/status/warning/fg` | status |
| `944:154` | `color/status/error/fg` | status |
| `944:156` | `color/status/success/bg` | status |
| `944:158` | `color/status/success/border` | status |
| `944:160` | `color/status/warning/bg` | status |
| `944:162` | `color/status/warning/border` | status |
| `944:164` | `color/status/error/bg` | status |
| `944:166` | `color/status/error/border` | status |