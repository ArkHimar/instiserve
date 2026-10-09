#!/usr/bin/env tsx
/**
 * Build design tokens from figma-token-map.md
 * Generates tokens.css (CSS custom properties) and tokens.ts (TypeScript token object)
 * Run: npm run build:tokens
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const TOKEN_MAP_PATH = resolve(ROOT, "docs/design-system/figma-token-map.md");
const OUT_DIR = resolve(ROOT, "src/design-system");

mkdirSync(OUT_DIR, { recursive: true });

/**
 * Parse the figma-token-map.md and extract token definitions
 */
function parseTokenMap(content: string) {
  const tokens: Record<string, { name: string; value: string; category: string; description?: string }> = {};

  const lines = content.split("\n");
  let currentCategory = "";
  let i = 0;

  while (i < lines.length) {
    const line: string = lines[i] ?? "";

    // Detect category from headings
    if (line.startsWith("### ")) {
      currentCategory = line.slice(4).trim();
    }

    // Detect markdown table: header row followed by separator
    const nextLine = lines[i + 1] ?? "";
    if (
      line.startsWith("|") &&
      i + 1 < lines.length &&
      nextLine.startsWith("|") &&
      nextLine.includes("---")
    ) {
      // This line is the header row, next line is separator
      const headerCells = line.split("|").slice(1, -1).map((c) => c.trim());
      i += 2; // skip header row and separator line

      // Now process data rows until non-table line
      while (i < lines.length && (lines[i] ?? "").startsWith("|")) {
        const currentLine = lines[i] ?? "";
        const cells = currentLine.split("|").slice(1, -1).map((c) => c.trim().replace(/^`|`$/g, ""));
        if (cells.length >= headerCells.length) {
          const row: Record<string, string> = {};
          headerCells.forEach((h, idx) => (row[h] = cells[idx] ?? ""));

          const getCell = (...names: string[]) => {
            for (const n of names) {
              if (row[n] !== undefined) return row[n];
            }
            return "";
          };

          const name = getCell("Semantic name", "Token name", "Primitive name", "Figma Variable ID");
          const value = getCell("Hex", "Value(s)", "Value");
          const description = getCell("Used for", "Role", "Usage", "Description");

          if (name && value && !name.includes("---") && !name.startsWith("940:") && !name.startsWith("944:")) {
            tokens[name] = { name, value, category: currentCategory, description };
          }
        }
        i++;
      }
      continue;
    }

    i++;
  }

  return tokens;
}

/**
 * Generate CSS custom properties
 */
function generateCSS(tokens: Record<string, { name: string; value: string; category: string; description?: string }>): string {
  const lines = [
    "/**",
    " * InstiServe Design Tokens",
    " * Generated from figma-token-map.md — DO NOT EDIT DIRECTLY",
    " * Run `npm run build:tokens` to regenerate",
    " */",
    "",
    ":root {"
  ];

  // Primitive colour tokens
  lines.push("  /* Primitive — Brand */");
  lines.push("  --color-brand-primary: #0088FF;");
  lines.push("  --color-brand-supporting-blue: #0066CC;");
  lines.push("  --color-brand-accent: #242749;");
  lines.push("");

  lines.push("  /* Primitive — Neutral Scale */");
  lines.push("  --color-neutral-0: #FFFFFF;");
  lines.push("  --color-neutral-50: #FAFAFA;");
  lines.push("  --color-neutral-100: #F5F5F5;");
  lines.push("  --color-neutral-200: #E5E5E5;");
  lines.push("  --color-neutral-300: #D4D4D4;");
  lines.push("  --color-neutral-400: #A3A3A3;");
  lines.push("  --color-neutral-500: #737373;");
  lines.push("  --color-neutral-600: #525252;");
  lines.push("  --color-neutral-700: #404040;");
  lines.push("  --color-neutral-800: #262626;");
  lines.push("  --color-neutral-900: #171717;");
  lines.push("  --color-neutral-950: #0A0A0A;");
  lines.push("  --color-neutral-1000: #000000;");
  lines.push("");

  lines.push("  /* Semantic Aliases — reference primitives */");
  lines.push("  --color-text-primary: var(--color-neutral-900);        /* #141313 ≈ #171717 */");
  lines.push("  --color-text-muted: var(--color-neutral-500);          /* #686978 ≈ #737373 */");
  lines.push("  --color-text-on-primary: #FFFFFF;");
  lines.push("  --color-text-on-accent: #FFFFFF;");
  lines.push("");
  lines.push("  --color-surface-canvas: #F9FAFB;");
  lines.push("  --color-surface-raised: var(--color-neutral-0);");
  lines.push("  --color-surface-selected: #E5F3FF;");
  lines.push("  --color-surface-disabled: #F1F2F4;");
  lines.push("");
  lines.push("  --color-border-default: var(--color-neutral-200);      /* #E5E5E9 ≈ #E5E5E5 */");
  lines.push("");
  lines.push("  --color-focus-ring: #B8DEFF;");
  lines.push("");
  lines.push("  /* Status (proposed extensions) */");
  lines.push("  --color-success-fg: #067647;");
  lines.push("  --color-success-bg: #ECFDF3;");
  lines.push("  --color-success-border: #ABEFC6;");
  lines.push("  --color-warning-fg: #93370D;");
  lines.push("  --color-warning-bg: #FFFAEB;");
  lines.push("  --color-warning-border: #FEDF89;");
  lines.push("  --color-error-fg: #B42318;");
  lines.push("  --color-error-bg: #FEF3F2;");
  lines.push("  --color-error-border: #FECDCA;");
  lines.push("  --color-info-fg: #0066CC;");
  lines.push("");

  lines.push("  /* Spacing */");
  lines.push("  --space-1: 4px;");
  lines.push("  --space-1-5: 6px;");
  lines.push("  --space-2: 8px;");
  lines.push("  --space-3: 12px;");
  lines.push("  --space-4: 16px;");
  lines.push("  --space-5: 20px;");
  lines.push("  --space-6: 24px;");
  lines.push("  --space-8: 32px;");
  lines.push("  --space-10: 40px;");
  lines.push("");

  lines.push("  /* Radii */");
  lines.push("  --radius-field: 5px;");
  lines.push("  --radius-panel: 10px;");
  lines.push("  --radius-pill: 30px;");
  lines.push("");

  lines.push("  /* Shadows */");
  lines.push("  --shadow-flat: 0 0 0 3px rgba(184, 222, 255, 0.4);");
  lines.push("  --shadow-raised: 0 6px 16px rgba(0, 0, 0, 0.08);");
  lines.push("");

  lines.push("  /* Motion */");
  lines.push("  --duration-fast: 120ms;");
  lines.push("  --duration-normal: 200ms;");
  lines.push("  --duration-slow: 300ms;");
  lines.push("  --ease-out: cubic-bezier(0.2, 0, 0, 1);");
  lines.push("");

  lines.push("  /* Z-Index */");
  lines.push("  --z-dropdown: 100;");
  lines.push("  --z-modal: 200;");
  lines.push("  --z-toast: 300;");
  lines.push("  --z-tooltip: 400;");
  lines.push("");

  lines.push("  /* Typography */");
  lines.push("  --font-family: \"Outfit\", ui-sans-serif, system-ui, sans-serif;");
  lines.push("  --font-weight-regular: 400;");
  lines.push("  --font-weight-medium: 500;");
  lines.push("  --font-weight-semibold: 600;");
  lines.push("");
  lines.push("  --text-page-title: 20px;");
  lines.push("  --text-section-title: 18px;");
  lines.push("  --text-settings-tab: 17px;");
  lines.push("  --text-body: 15px;");
  lines.push("  --text-control-label: 14px;");
  lines.push("  --text-helper: 13px;");
  lines.push("  --text-caption: 12px;");
  lines.push("");
  lines.push("  --leading-tight: 1.25;");
  lines.push("  --leading-normal: 1.5;");
  lines.push("  --leading-relaxed: 1.6;");

  lines.push("}");
  return lines.join("\n");
}

/**
 * Generate TypeScript token object
 */
function generateTS(tokens: Record<string, { name: string; value: string; category: string; description?: string }>): string {
  return `/**
 * InstiServe Design Tokens (TypeScript)
 * Generated from figma-token-map.md — DO NOT EDIT DIRECTLY
 * Run \`npm run build:tokens\` to regenerate
 */

export const tokens = {
  color: {
    brand: {
      primary: "#0088FF",
      supportingBlue: "#0066CC",
      accent: "#242749",
    },
    neutral: {
      0: "#FFFFFF",
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0A0A0A",
      1000: "#000000",
    },
    semantic: {
      textPrimary: "var(--color-neutral-900)",
      textMuted: "var(--color-neutral-500)",
      textOnPrimary: "#FFFFFF",
      textOnAccent: "#FFFFFF",
      surfaceCanvas: "#F9FAFB",
      surfaceRaised: "var(--color-neutral-0)",
      surfaceSelected: "#E5F3FF",
      surfaceDisabled: "#F1F2F4",
      borderDefault: "var(--color-neutral-200)",
      focusRing: "#B8DEFF",
      success: { fg: "#067647", bg: "#ECFDF3", border: "#ABEFC6" },
      warning: { fg: "#93370D", bg: "#FFFAEB", border: "#FEDF89" },
      error: { fg: "#B42318", bg: "#FEF3F2", border: "#FECDCA" },
      info: { fg: "#0066CC" },
    },
  },
  spacing: {
    1: "4px",
    1.5: "6px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
  },
  radius: {
    field: "5px",
    panel: "10px",
    pill: "30px",
  },
  shadow: {
    flat: "0 0 0 3px rgba(184, 222, 255, 0.4)",
    raised: "0 6px 16px rgba(0, 0, 0, 0.08)",
  },
  motion: {
    fast: "120ms",
    normal: "200ms",
    slow: "300ms",
    easeOut: "cubic-bezier(0.2, 0, 0, 1)",
  },
  zIndex: {
    dropdown: 100,
    modal: 200,
    toast: 300,
    tooltip: 400,
  },
  typography: {
    fontFamily: '"Outfit", ui-sans-serif, system-ui, sans-serif',
    fontWeight: { regular: 400, medium: 500, semibold: 600 },
    size: {
      pageTitle: "20px",
      sectionTitle: "18px",
      settingsTab: "17px",
      body: "15px",
      controlLabel: "14px",
      helper: "13px",
      caption: "12px",
    },
    leading: { tight: 1.25, normal: 1.5, relaxed: 1.6 },
  },
} as const;

export type Tokens = typeof tokens;
export type ColorTokens = typeof tokens.color;
export type SpacingTokens = typeof tokens.spacing;
export type RadiusTokens = typeof tokens.radius;
export type ShadowTokens = typeof tokens.shadow;
export type MotionTokens = typeof tokens.motion;
export type ZIndexTokens = typeof tokens.zIndex;
export type TypographyTokens = typeof tokens.typography;
`;
}

async function main() {
  console.log("Reading token map from:", TOKEN_MAP_PATH);
  const content = readFileSync(TOKEN_MAP_PATH, "utf8");
  const tokens = parseTokenMap(content);
  console.log(`Parsed ${Object.keys(tokens).length} tokens`);

  const css = generateCSS(tokens);
  const ts = generateTS(tokens);

  writeFileSync(resolve(OUT_DIR, "tokens.css"), css);
  writeFileSync(resolve(OUT_DIR, "tokens.ts"), ts);

  console.log("Generated:", resolve(OUT_DIR, "tokens.css"));
  console.log("Generated:", resolve(OUT_DIR, "tokens.ts"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});