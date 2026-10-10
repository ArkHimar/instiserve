import "./Pagination.css";

/**
 * InstiServe Pagination — matches Figma `InstiServe/PageButton` component set
 *
 * Figma variants (3): State = Default | Current | Disabled
 * Properties: Label
 */

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Number of page buttons to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Custom labels */
  labels?: {
    previous?: string;
    next?: string;
    first?: string;
    last?: string;
  };
  className?: string;
  /** ARIA label for the navigation */
  ariaLabel?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  labels = {
    previous: "Previous",
    next: "Next",
    first: "First",
    last: "Last",
  },
  className = "",
  ariaLabel = "Pagination",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages, siblingCount);

  return (
    <nav className="ui-pagination" aria-label={ariaLabel} role="navigation">
      <ul className="ui-pagination__list">
        {showFirstLast && totalPages > siblingCount * 2 + 3 && (
          <li>
            <button
              className="ui-pagination__btn ui-pagination__btn--first"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              aria-label={labels.first}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M11 4l-5 6 5 6" />
                <path d="M5 4l5 6-5 6" />
              </svg>
            </button>
          </li>
        )}

        {showPrevNext && (
          <li>
            <button
              className="ui-pagination__btn ui-pagination__btn--prev"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={labels.previous}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10 4l-4 6 4 6" />
              </svg>
            </button>
          </li>
        )}

        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`} className="ui-pagination__ellipsis" aria-hidden="true">
                <span>...</span>
              </li>
            );
          }

          return (
            <li key={page}>
              <button
                className={`ui-pagination__btn ui-pagination__page ${page === currentPage ? "ui-pagination__page--active" : ""}`}
                onClick={() => onPageChange(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}

        {showPrevNext && (
          <li>
            <button
              className="ui-pagination__btn ui-pagination__btn--next"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label={labels.next}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 4l4 6-4 6" />
              </svg>
            </button>
          </li>
        )}

        {showFirstLast && totalPages > siblingCount * 2 + 3 && (
          <li>
            <button
              className="ui-pagination__btn ui-pagination__btn--last"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              aria-label={labels.last}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 4l5 6-5 6" />
                <path d="M11 4l-5 6 5 6" />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

function getPageNumbers(currentPage: number, totalPages: number, siblingCount: number): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  const leftBound = Math.max(2, currentPage - siblingCount);
  const rightBound = Math.min(totalPages - 1, currentPage + siblingCount);

  if (leftBound > 2) {
    pages.push("...");
  }

  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i);
  }

  if (rightBound < totalPages - 1) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
}