import "./Alert.css";

/**
 * InstiServe Alert — matches Figma `InstiServe/Alert` component set
 *
 * Figma variants (4): Tone = Info | Success | Warning | Error
 * Properties: Title, Description
 */

export type AlertTone = "info" | "success" | "warning" | "error";

export interface AlertProps {
  tone: AlertTone;
  title: string;
  description?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  /** Additional actions */
  action?: React.ReactNode;
}

export function Alert({ tone, title, description, dismissible, onDismiss, className = "", action }: AlertProps) {
  const baseClass = "ui-alert";
  const toneClass = `ui-alert--${tone}`;

  return (
    <div className={`${baseClass} ${toneClass} ${className}`} role={tone === "error" ? "alert" : "status"}>
      <div className="ui-alert__icon" aria-hidden="true">
        {getIcon(tone)}
      </div>
      <div className="ui-alert__content">
        <h3 className="ui-alert__title">{title}</h3>
        {description && <p className="ui-alert__description">{description}</p>}
        {action && <div className="ui-alert__action">{action}</div>}
      </div>
      {dismissible && onDismiss && (
        <button
          type="button"
          className="ui-alert__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      )}
    </div>
  );
}

function getIcon(tone: AlertTone) {
  switch (tone) {
    case "info":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="10" cy="10" r="9" />
          <path d="M10 7v6M10 15v.01" />
        </svg>
      );
    case "success":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "warning":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.47h16.94a2 2 0 0 0 1.71-3.47L10.29 3.86z" />
          <path d="M10 9v4M10 15v.01" />
        </svg>
      );
    case "error":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="10" cy="10" r="9" />
          <path d="M15 15l-10-10M5 15l10-10" />
        </svg>
      );
  }
}