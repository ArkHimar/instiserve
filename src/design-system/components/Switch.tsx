import { forwardRef, type InputHTMLAttributes } from "react";
import "./Switch.css";

/**
 * InstiServe Switch — matches Figma `InstiServe/Toggle` component set
 *
 * Figma variants (4): Value = On | Off, State = Default | Disabled
 * Properties: Value, State
 */

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: "regular" | "compact";
  /** Label for the "on" state (accessibility) */
  onLabel?: string;
  /** Label for the "off" state (accessibility) */
  offLabel?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    {
      label,
      helper,
      error,
      size = "regular",
      onLabel = "On",
      offLabel = "Off",
      className = "",
      id,
      disabled,
      required,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) {
    const generatedId = id ?? `switch-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-switch";
    const sizeClass = `ui-switch--${size}`;
    const stateClass = error ? "ui-switch--error" : disabled ? "ui-switch--disabled" : "";

    return (
      <div className={`ui-switch-wrapper ${className}`}>
        {label && (
          <label htmlFor={generatedId} className="ui-switch__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`ui-switch__container ${stateClass}`}>
          <input
            ref={ref}
            id={generatedId}
            type="checkbox"
            role="switch"
            aria-checked={props.checked}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            disabled={disabled}
            required={required}
            className="ui-switch__input"
            {...props}
          />
          <span
            className={`ui-switch__track ${sizeClass}`}
            aria-hidden="true"
            aria-label={props.checked ? onLabel : offLabel}
          >
            <span className="ui-switch__thumb" />
          </span>
        </div>
        {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
        {helper && !error && <p id={helperId} className="ui-field__helper">{helper}</p>}
      </div>
    );
  }
);

Switch.displayName = "Switch";