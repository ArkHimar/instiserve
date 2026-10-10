/**
 * InstiServe Design Tokens (TypeScript)
 * Generated from figma-token-map.md — DO NOT EDIT DIRECTLY
 * Run `npm run build:tokens` to regenerate
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
  gradient: {
    brand: "linear-gradient(135deg, rgba(0, 136, 255, 0.7) 0%, rgba(118, 197, 253, 0.7) 24.67%, rgba(107, 198, 255, 0.8) 72.22%, rgba(26, 131, 255, 0.8) 100%)",
    footer: "radial-gradient(ellipse at 20% 100%, rgba(0, 128, 239, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(0, 203, 239, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 120%, rgba(0, 136, 255, 0.08) 0%, transparent 40%)",
    buttonPrimary: "linear-gradient(135deg, #0088FF 0%, #0066CC 100%)",
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
export type GradientTokens = typeof tokens.gradient;
export type MotionTokens = typeof tokens.motion;
export type ZIndexTokens = typeof tokens.zIndex;
export type TypographyTokens = typeof tokens.typography;
