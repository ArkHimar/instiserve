import "./Breadcrumb.css";

/**
 * InstiServe Breadcrumb — matches Figma `InstiServe/Breadcrumb` component set
 *
 * Figma variants (4): State = Default | Hover | Current | Disabled
 * Properties: Label
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  /** Icon for the item */
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Max items to show before collapsing */
  maxItems?: number;
  /** Separator character */
  separator?: React.ReactNode;
  className?: string;
  /** Aria label for the navigation */
  ariaLabel?: string;
}

export function Breadcrumb({
  items,
  maxItems = 5,
  separator = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12l5-6 5 6" />
    </svg>
  ),
  className = "",
  ariaLabel = "Breadcrumb",
}: BreadcrumbProps) {
  const visibleItems = items.length > maxItems
    ? [items[0], { label: "..." }, ...items.slice(-(maxItems - 1))]
    : items;

  return (
    <nav className="ui-breadcrumb" aria-label={ariaLabel} role="navigation">
      <ol className="ui-breadcrumb__list">
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;
          const isEllipsis = item.label === "...";

          if (isEllipsis) {
            return (
              <li key="ellipsis" className="ui-breadcrumb__ellipsis" aria-hidden="true">
                <span>{separator}</span>
                <span className="ui-breadcrumb__ellipsis-text">...</span>
                <span>{separator}</span>
              </li>
            );
          }

          return (
            <li key={item.label} className="ui-breadcrumb__item">
              {index > 0 && !isEllipsis && (
                <span className="ui-breadcrumb__separator" aria-hidden="true">{separator}</span>
              )}
              {isLast ? (
                <span
                  className="ui-breadcrumb__current"
                  aria-current="page"
                >
                  {item.icon && <span className="ui-breadcrumb__icon" aria-hidden="true">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className={item.disabled ? "ui-breadcrumb__link ui-breadcrumb__link--disabled" : "ui-breadcrumb__link"}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : 0}
                >
                  {item.icon && <span className="ui-breadcrumb__icon" aria-hidden="true">{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className="ui-breadcrumb__link ui-breadcrumb__link--disabled">
                  {item.icon && <span className="ui-breadcrumb__icon" aria-hidden="true">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}