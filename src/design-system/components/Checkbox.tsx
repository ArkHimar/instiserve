import { forwardRef, type InputHTMLAttributes } from "react";
import "./Checkbox.css";

/**
 * InstiServe Checkbox — matches Figma `InstiServe/Checkbox` component set
 *
 * Figma variants (6): Value = Unchecked | Checked | Indeterminate, State = Default | Disabled
 * Properties: Value, State
 */

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: "regular" | "compact";
  /** Indeterminate state (for select-all patterns) */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      helper,
      error,
      size = "regular",
      indeterminate = false,
      className = "",
      id,
      disabled,
      required,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) {
    const generatedId = id ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-checkbox";
    const sizeClass = `ui-checkbox--${size}`;
    const stateClass = error ? "ui-checkbox--error" : disabled ? "ui-checkbox--disabled" : "";

    const handleRef = (el: HTMLInputElement | null) => {
      if (el) {
        el.indeterminate = indeterminate;
        ref.current = el;
      }
    };

    return (
      <div className={`ui-checkbox-wrapper ${className}`}>
        <div className={`ui-checkbox__container ${stateClass}`}>
          <input
            ref={handleRef}
            id={generatedId}
            type="checkbox"
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className="ui-checkbox__input"
            {...props}
          />
          <span
            className={`ui-checkbox__box ${sizeClass}`}
            aria-hidden="true"
          >
            <svg
              className="ui-checkbox__check"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="3.5 7 5.5 9.5 10.5 4.5" />
            </svg>
            <svg
              className="ui-checkbox__indeterminate"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="3" y1="7" x2="11" y2="7" />
            </svg>
          </span>
          <input
            ref={ref}
            id={generatedId}
            type="checkbox"
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className="ui-checkbox__input"
            {...props}
          />
        </div>
        {label && (
          <label htmlFor={generatedId} className="ui-checkbox__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
        {helper && !error && <p id={helperId} className="ui-field__helper">{helper}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";