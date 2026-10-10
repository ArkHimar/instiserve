import { forwardRef, type InputHTMLAttributes } from "react";
import "./Radio.css";

/**
 * InstiServe Radio — matches Figma `InstiServe/Radio` component set
 *
 * Figma variants (4): Value = Unselected | Selected, State = Default | Disabled
 * Properties: Value, State
 */

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: "regular" | "compact";
  /** Radio group name (required for grouping) */
  name: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    {
      label,
      helper,
      error,
      size = "regular",
      name,
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
    const generatedId = id ?? `radio-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-radio";
    const sizeClass = `ui-radio--${size}`;
    const stateClass = error ? "ui-radio--error" : disabled ? "ui-radio--disabled" : "";

    return (
      <div className={`ui-radio-wrapper ${className}`}>
        <div className={`ui-radio__container ${stateClass}`}>
          <input
            ref={ref}
            id={generatedId}
            type="radio"
            name={name}
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className="ui-radio__input"
            {...props}
          />
          <span
            className={`ui-radio__circle ${sizeClass}`}
            aria-hidden="true"
          >
            <span className="ui-radio__dot" aria-hidden="true" />
          </span>
        </div>
        {label && (
          <label htmlFor={generatedId} className="ui-radio__label">
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

Radio.displayName = "Radio";

/**
 * RadioGroup — wrapper for radio groups with label and validation
 */
export interface RadioGroupProps {
  name: string;
  label?: string;
  helper?: string;
  error?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  value?: string;
  onChange?: (value: string) => void;
  size?: "regular" | "compact";
  /** Render as vertical (default) or inline */
  inline?: boolean;
  className?: string;
}

export function RadioGroup({
  name,
  label,
  helper,
  error,
  options,
  value,
  onChange,
  size = "regular",
  inline = false,
  className = "",
}: RadioGroupProps) {
  const helperId = helper ? `${name}-helper` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <fieldset className={`ui-radio-group ${inline ? "ui-radio-group--inline" : ""} ${className}`} aria-describedby={describedBy}>
      {label && <legend className="ui-radio-group__legend">{label}</legend>}
      <div className="ui-radio-group__options" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <Radio
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            size={size}
          />
        ))}
      </div>
      {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
      {helper && !error && <p id={helperId} className="ui-field__helper">{helper}</p>}
    </fieldset>
  );
}