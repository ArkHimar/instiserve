import { forwardRef, type ButtonHTMLAttributes } from "react";
import "./Button.css";

/**
 * InstiServe Button — matches Figma `InstiServe/Button` component set
 *
 * Figma variants (24):
 * - Emphasis: Primary | Secondary | Ghost
 * - State: Default | Hover | Focus | Disabled
 * - Size: Regular (44px) | Compact (32px)
 *
 * Token references (from tokens.css):
 * - Primary Default:      bg=--color-brand-primary (#0088FF),     text=--color-text-on-primary (#FFFFFF)
 * - Primary Hover:        bg=--color-brand-supporting-blue (#0066CC), text=--color-text-on-primary
 * - Primary Focus:        bg=--color-brand-supporting-blue (#0066CC), text=--color-text-on-primary
 * - Primary Disabled:     bg=--color-surface-disabled (#F1F2F4),   text=--color-neutral-400 (#A3A3A3)
 *
 * - Secondary Default:    bg=--color-surface-raised (#FFFFFF),     text=--color-text-primary (#141313)
 * - Secondary Hover:      bg=--color-surface-selected (#E5F3FF),   text=--color-text-primary
 * - Secondary Focus:      bg=--color-surface-raised (#FFFFFF),     text=--color-text-primary
 * - Secondary Disabled:   bg=--color-surface-raised (#FFFFFF),     text=--color-neutral-400
 *
 * - Ghost Default:        bg=transparent,                          text=--color-brand-supporting-blue (#0066CC)
 * - Ghost Hover:          bg=--color-surface-selected (#E5F3FF),   text=--color-brand-supporting-blue
 * - Ghost Focus:          bg=transparent,                          text=--color-brand-supporting-blue
 * - Ghost Disabled:       bg=transparent,                          text=--color-neutral-400
 *
 * Note: Per design decision, Primary buttons with text use #0066CC (5.57:1 AA pass)
 * instead of #0088FF (3.52:1 AA fail). #0088FF retained for non-text uses.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "regular" | "compact";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  /** Icon placed before label (leading) */
  startIcon?: React.ReactNode;
  /** Icon placed after label (trailing) */
  endIcon?: React.ReactNode;
}

const defaultProps = {
  variant: "primary" as ButtonVariant,
  size: "regular" as ButtonSize,
  loading: false,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = defaultProps.variant,
      size = defaultProps.size,
      loading = defaultProps.loading,
      disabled,
      startIcon,
      endIcon,
      children,
      className = "",
      ...props
    },
    ref
  ) {
    const isDisabled = disabled || loading;

    const baseClass = "ui-btn";
    const variantClass = `ui-btn--${variant}`;
    const sizeClass = `ui-btn--${size}`;

    return (
      <button
        ref={ref}
        className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && <span className="ui-btn__spinner" aria-hidden="true" />}
        {startIcon && <span className="ui-btn__icon ui-btn__icon--start">{startIcon}</span>}
        <span className="ui-btn__label">{children}</span>
        {endIcon && <span className="ui-btn__icon ui-btn__icon--end">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";