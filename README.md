# InstiServe — from Figma

> **Status: design-system documentation only.** No application code yet.

The InstiServe design system is authored in Figma. This repository is its
**consumer** — the place where the tokens, components, and usage rules become
real code. The direction is **Figma → code**, not code → Figma.

## Figma source of truth

**File:** <https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace>

| Frame | Node | Contents |
|---|---|---|
| `DESIGN SYSTEMS` | [`941:11077`](https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace?node-id=941-11077) | Foundations, Dropdowns, Tabs, Settings composition, Buttons, Toggles, Typography |
| `DESIGN SYSTEMS 2` | [`941:12316`](https://www.figma.com/design/5cx1t71DbC23GlziY7xZPQ/Workspace?node-id=941-12316) | Data & navigation, Selection, Breadcrumbs, Status & feedback, Forms, Native component library |

**What already exists in the file:** 48 variables (15 semantic, 13 neutral, 8 status,
9 spacing — plus status surfaces), 13 component sets / 77 variants, and documented
usage guidance. This is a mature system, not a blank canvas.

## System at a glance

| | |
|---|---|
| Typeface | **Outfit** — 400 / 500 / 600 |
| Primary | `#0088FF` — actions, selected indicators, switches |
| Supporting blue | `#0066CC` — small blue text, high-contrast hover |
| Accent | `#242749` — titles and emphasis |
| Text / muted | `#141313` / `#686978` |
| Canvas / surface | `#F9FAFB` / `#FFFFFF` |
| Radii | 5 Field · 10 Panel · 30 Pill |
| Spacing | 4, 6, 8, 12, 16, 20, 24, 32, 40 px |
| Control heights | Fields 48 · Actions 44 · Compact 32 · Tabs 57 |

> `#0088FF` is the primary for actions, selected indicators and switches. Use
> `#0066CC` for readable small blue text and high-contrast hover states; it
> supports the brand, never replaces it. *(verbatim from the Figma file)*

**Accessibility note:** white on `#0088FF` is **3.52:1** — passes AA for large text,
fails for body text. Every other documented pairing passes AA. See the audit, §6.4.

## Documentation

| Document | Purpose |
|---|---|
| [`docs/design-system/FIGMA-AUDIT.md`](docs/design-system/FIGMA-AUDIT.md) | Phase 1 audit — full token inventory, component inventory, gaps |
| [`docs/design-system/FIGMA-MANUAL-BUILD-SPEC.md`](docs/design-system/FIGMA-MANUAL-BUILD-SPEC.md) | Copy-ready list for finishing the Figma library by hand |

## Figma library status

⚠️ **The Figma REST API is read-only for document content.** Variables, text
styles, effect styles, components, and pages cannot be created programmatically
with a personal access token. The library is therefore completed **manually in
the Figma UI** — see the manual build spec.

## Audit scripts

Read-only helpers used to produce the audit. Not needed to build the app.

```bash
cp .env.example .env      # add FIGMA_ACCESS_TOKEN
set -a; source .env; set +a

node scripts/figma-extract.mjs       # colours, type, spacing, radii, shadows
node scripts/figma-resolve-vars.mjs  # variable ID -> resolved value
```

Never commit `.env`. The scripts read the token from the environment only.

## Status

Phase 1 (audit) is complete. Application implementation must **not** begin until
the Phase 5 handoff is explicitly approved.