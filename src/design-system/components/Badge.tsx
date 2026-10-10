import "./Badge.css";

/**
 * InstiServe Badge — matches Figma `InstiServe/Badge` component set
 *
 * Figma variants (5): Tone = Neutral | Info | Success | Warning | Error
 * Properties: Label
 */

export type BadgeTone = "neutral" | "info" | "success" | "warning" | "error";
export type BadgeSize = "regular" | "compact";

export interface BadgeProps {
  tone?: BadgeTone;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  /** Render as a clickable element */
  href?: string;
  onClick?: () => void;
}

export function Badge({
  tone = "neutral",
  size = "regular",
  children,
  className = "",
  href,
  onClick,
}: BadgeProps) {
  const baseClass = "ui-badge";
  const toneClass = `ui-badge--${tone}`;
  const sizeClass = `ui-badge--${size}`;
  const interactive = href || onClick;

  const Component = interactive ? (href ? "a" : "button") : "span";

  return (
    <Component
      className={`${baseClass} ${toneClass} ${sizeClass} ${interactive ? "ui-badge--interactive" : ""} ${className}`}
      href={href}
      onClick={onClick}
      role={interactive ? undefined : "status"}
      aria-label={interactive ? undefined : children as string}
    >
      {children}
    </Component>
  );
}

/**
 * StatusBadge — maps status strings to badge tones
 * Used across list views for consistent status representation
 */
export const STATUS_TONE: Record<string, BadgeTone> = {
  succeeded: "success",
  active: "success",
  published: "success",
  running: "info",
  queued: "info",
  retry_scheduled: "warning",
  pending: "neutral",
  draft: "neutral",
  disabled: "neutral",
  revoked: "error",
  failed: "error",
  canceled: "neutral",
  timed_out: "error",
};

export function StatusBadge({ status }: { status: string }) {
  return <Badge tone={STATUS_TONE[status] ?? "neutral"}>{status}</Badge>;
}