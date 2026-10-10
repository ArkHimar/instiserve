import { forwardRef, type SelectHTMLAttributes } from "react";
import "./Select.css";

/**
 * InstiServe Select — matches Figma `InstiServe/Dropdown` component set
 *
 * Figma variants (6): State = Default | Open | Error | Disabled | Focus | Filled
 * Properties: Label, Value, Placeholder, Helper, Error message, Disabled reason
 */

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  /** Optional group for optgroup */
  group?: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  placeholder?: string;
  helper?: string;
  error?: string;
  options: SelectOption[];
  size?: "regular" | "compact";
  fullWidth?: boolean;
  /** Searchable dropdown (requires external library for full implementation) */
  searchable?: boolean;
  /** Clearable selection */
  clearable?: boolean;
  /** Multiple selection */
  multiple?: boolean;
  /** Max height of dropdown */
  maxHeight?: number;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      placeholder,
      helper,
      error,
      options,
      size = "regular",
      fullWidth = true,
      searchable = false,
      clearable = false,
      multiple = false,
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
    const generatedId = id ?? `select-${Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${generatedId}-helper` : undefined;
    const errorId = error ? `${generatedId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const baseClass = "ui-select";
    const sizeClass = `ui-select--${size}`;
    const stateClass = error ? "ui-select--error" : disabled ? "ui-select--disabled" : "";

    // Group options by group prop
    const groupedOptions = options.reduce((acc, opt) => {
      const group = opt.group ?? "__ungrouped";
      if (!acc[group]) acc[group] = [];
      acc[group].push(opt);
      return acc;
    }, {} as Record<string, typeof options>);

    return (
      <div className={`ui-field ${fullWidth ? "ui-field--full" : ""} ${className}`}>
        {label && (
          <label htmlFor={generatedId} className="ui-field__label">
            {label}
            {required && <span className="ui-field__required" aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`ui-select-wrapper ${stateClass}`}>
          <select
            ref={ref}
            id={generatedId}
            disabled={disabled}
            required={required}
            multiple={multiple}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className={`${baseClass} ${sizeClass} ${stateClass}`}
            {...props}
          >
            {placeholder && !multiple && (
              <option value="" disabled selected hidden>{placeholder}</option>
            )}
            {Object.entries(groupedOptions).map(([groupName, groupOptions]) =>
              groupName === "__ungrouped" ? (
                groupOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              ) : (
                <optgroup key={groupName} label={groupName}>
                  {groupOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
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