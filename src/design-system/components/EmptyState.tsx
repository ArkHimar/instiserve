import "./EmptyState.css";

/**
 * InstiServe EmptyState — matches Figma `InstiServe/EmptyState` component set
 *
 * Figma variants (2): Kind = NoData | NoResults
 * Properties: No-results title, No-results description, No-data title, No-data description
 */

export type EmptyStateKind = "noData" | "noResults" | "noAccess" | "error" | "loading";

export interface EmptyStateProps {
  kind: EmptyStateKind;
  /** Custom title override */
  title?: string;
  /** Custom description override */
  description?: string;
  /** Action button */
  action?: React.ReactNode;
  /** Custom illustration */
  illustration?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Full width container */
  fullWidth?: boolean;
  /** Centered in container */
  centered?: boolean;
}

export function EmptyState({
  kind,
  title,
  description,
  action,
  illustration,
  className = "",
  fullWidth = false,
  centered = true,
}: EmptyStateProps) {
  const config = EMPTY_STATE_CONFIG[kind] ?? EMPTY_STATE_CONFIG.noData;
  const finalTitle = title ?? config.title;
  const finalDescription = description ?? config.description;
  const finalIllustration = illustration ?? config.illustration;

  return (
    <div
      className={`ui-empty-state ${className} ${fullWidth ? "ui-empty-state--full" : ""} ${centered ? "ui-empty-state--centered" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="ui-empty-state__illustration" aria-hidden="true">
        {finalIllustration}
      </div>
      <h2 className="ui-empty-state__title">{title ?? config.title}</h2>
      <p className="ui-empty-state__description">{description ?? config.description}</p>
      {action && <div className="ui-empty-state__action">{action}</div>}
    </div>
  );
}

const EMPTY_STATE_CONFIG: Record<string, { title: string; description: string; illustration: React.ReactNode }> = {
  noData: {
    title: "No data available",
    description: "There's nothing here yet. Get started by adding your first item.",
    illustration: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--color-neutral-300)" />
        <path d="M40 20v24M40 44v.01" stroke="var(--color-neutral-400)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  noResults: {
    title: "No results found",
    description: "We couldn't find anything matching your search. Try adjusting your filters or search terms.",
    illustration: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--color-neutral-300)" />
        <path d="M28 40l8 8 16-16" stroke="var(--color-neutral-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  noAccess: {
    title: "Access denied",
    description: "You don't have permission to view this content. Contact your administrator for access.",
    illustration: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--color-neutral-300)" />
        <path d="M28 28l24 24M52 28l-24 24" stroke="var(--color-neutral-400)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again or contact support if the problem persists.",
    illustration: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--color-neutral-300)" />
        <path d="M40 24v16M40 50v.01" stroke="var(--color-error-fg)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  loading: {
    title: "Loading...",
    description: "Please wait while we fetch your data.",
    illustration: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--color-brand-primary)" strokeWidth="3" strokeDasharray="100 100" strokeDashoffset="0" strokeLinecap="round">
          <animate attributeName="strokeDashoffset" from="0" to="200" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
};