import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";
import "./TextField.css";

/**
 * InstiServe TextField — matches Figma `InstiServe/Input` component set
 *
 * Figma variants (6): State = Default | Filled | Focus | Error | Disabled | ReadOnly
 * Properties: Label, Value, Placeholder, Helper, Error message, Invalid value, Disabled reason, Read-only reason
 */

export type TextFieldSize = "regular" | "compact";
export type TextFieldType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: TextFieldSize;
  type?: TextFieldType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      label,
      helper,
      error,
      size = "regular",
      type = "text",
      leftIcon,
      rightIcon,
      fullWidth = true,
      className = "",
      id,
      disabled,
      readOnly,
      required,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) {
    const generatedId = id ?? `textfield-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-input";
    const sizeClass = `ui-input--${size}`;
    const stateClass = error ? "ui-input--error" : readOnly ? "ui-input--readonly" : disabled ? "ui-input--disabled" : "";

    return (
      <div className={`ui-field ${fullWidth ? "ui-field--full" : ""} ${className}`}>
        {label && (
          <label htmlFor={generatedId} className="ui-field__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`ui-input-wrapper ${stateClass}`}>
          {props.leftIcon && <span className="ui-input__icon ui-input__icon--left" aria-hidden="true">{props.leftIcon}</span>}
          <input
            ref={ref}
            id={generatedId}
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className={`${baseClass} ${sizeClass} ${stateClass}`}
            {...props}
          />
          {props.rightIcon && <span className="ui-input__icon ui-input__icon--right" aria-hidden="true">{props.rightIcon}</span>}
        </div>
        {error && (
          <p id={errorId} className="ui-field__error" role="alert">{error}</p>
        )}
        {helper && !error && (
          <p id={helperId} className="ui-field__helper">{helper}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

/**
 * Textarea variant
 */
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: TextFieldSize;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { label, helper, error, size = "regular", fullWidth = true, className = "", id, disabled, readOnly, required, "aria-describedby": ariaDescribedBy, ...props },
    ref
  ) {
    const generatedId = id ?? `textarea-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-input ui-input--textarea";
    const sizeClass = `ui-input--${size}`;
    const stateClass = error ? "ui-input--error" : readOnly ? "ui-input--readonly" : disabled ? "ui-input--disabled" : "";

    return (
      <div className={`ui-field ${fullWidth ? "ui-field--full" : ""}`}>
        {label && (
          <label htmlFor={generatedId} className="ui-field__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`ui-input-wrapper ${stateClass}`}>
          <textarea
            ref={ref}
            id={generatedId}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className={`${baseClass} ${sizeClass} ${stateClass}`}
            {...props}
          />
        </div>
        {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
        {helper && !error && <p id={helperId} className="ui-field__helper">{helper}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

/**
 * Select variant
 */
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: TextFieldSize;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, helper, error, size = "regular", options, placeholder, fullWidth = true, className = "", id, disabled, required, "aria-describedby": ariaDescribedBy, ...props },
    ref
  ) {
    const generatedId = id ?? `select-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-input ui-input--select";
    const sizeClass = `ui-input--${size}`;
    const stateClass = error ? "ui-input--error" : disabled ? "ui-input--disabled" : "";

    return (
      <div className={`ui-field ${fullWidth ? "ui-field--full" : ""}`}>
        {label && (
          <label htmlFor={generatedId} className="ui-field__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`ui-input-wrapper ${stateClass}`}>
          <select
            ref={ref}
            id={generatedId}
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className={`${baseClass} ${sizeClass} ${stateClass}`}
            {...props}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
        {helper && !error && <p id={helperId} className="ui-field__helper">{helper}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";