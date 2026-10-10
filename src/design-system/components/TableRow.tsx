import "./TableRow.css";

/**
 * InstiServe TableRow — matches Figma `InstiServe/TableRow` component set
 *
 * Figma variants (3): State = Default | Selected | Hover
 * Properties: Name, Email, Identifier, Role, Department, Label
 */

export interface TableRowData {
  id: string;
  name: string;
  email: string;
  identifier: string;
  role: string;
  department: string;
  label?: string;
  /** Custom cell renderers */
  cells?: Record<string, React.ReactNode>;
}

export interface TableRowProps {
  data: TableRowData;
  selected?: boolean;
  onSelect?: (id: string) => void;
  onClick?: () => void;
  /** Selectable row (shows checkbox) */
  selectable?: boolean;
  /** Clickable row (triggers onClick) */
  clickable?: boolean;
  /** Expanded row (shows details) */
  expanded?: boolean;
  /** Expansion content */
  expansion?: React.ReactNode;
  className?: string;
  /** Row actions */
  actions?: React.ReactNode;
}

export function TableRow({
  data,
  selected,
  onSelect,
  onClick,
  selectable = false,
  clickable = false,
  expanded = false,
  expansion,
  className = "",
  actions,
}: TableRowProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLInputElement || e.target.closest("button, a, [role='button']")) {
      return;
    }
    onClick?.();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onSelect?.(data.id);
  };

  return (
    <>
      <tr
        className={`ui-table-row ${data.id} ${selected ? "ui-table-row--selected" : ""} ${className}`}
        onClick={clickable ? handleClick : undefined}
        style={clickable ? { cursor: "pointer" } : undefined}
        aria-selected={selected}
      >
        {selectable && (
          <td className="ui-table-row__cell ui-table-row__cell--checkbox">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => e.stopPropagation()}
              aria-label={`Select ${data.name}`}
            />
          </td>
        )}
        <td className="ui-table-row__cell ui-table-row__cell--name">
          <div className="ui-table-row__name-cell">
            <span className="ui-table-row__name">{data.name}</span>
            {data.label && <span className="ui-table-row__label">{data.label}</span>}
          </div>
        </td>
        <td className="ui-table-row__cell ui-table-row__cell--email">
          <a href={`mailto:${data.email}`} className="ui-table-row__email">{data.email}</a>
        </td>
        <td className="ui-table-row__cell ui-table-row__cell--identifier">
          <span className="ui-table-row__identifier">{data.identifier}</span>
        </td>
        <td className="ui-table-row__cell ui-table-row__cell--role">
          <span className="ui-table-row__role">{data.role}</span>
        </td>
        <td className="ui-table-row__cell ui-table-row__cell--department">
          <span className="ui-table-row__department">{data.department}</span>
        </td>
        <td className="ui-table-row__cell ui-table-row__cell--actions">
          {actions}
        </td>
      </tr>
      {expanded && expansion && (
        <tr className="ui-table-row__expansion">
          <td colSpan={99} className="ui-table-row__expansion-cell">
            <div className="ui-table-row__expansion-content">{expansion}</div>
          </td>
        </tr>
      )}
    </>
  );
}

/**
 * Table component wrapper for TableRow
 */
export interface TableProps {
  columns: Array<{
    key: string;
    header: string;
    render?: (row: any) => React.ReactNode;
    width?: string;
  }>;
  data: any[];
  selectedRows?: string[];
  onSelectionChange?: (ids: string[]) => void;
  selectable?: boolean;
  clickable?: boolean;
  onRowClick?: (row: any) => void;
  expandedRows?: string[];
  onExpandChange?: (id: string) => void;
  expansionRender?: (row: any) => React.ReactNode;
  actionsRender?: (row: any) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
}

export function Table({
  columns,
  data,
  selectedRows = [],
  onSelectionChange,
  selectable = false,
  clickable = false,
  onRowClick,
  expandedRows = [],
  onExpandChange,
  expansionRender,
  actionsRender,
  emptyMessage = "No data available",
  className = "",
}: TableProps) {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSelectionChange?.(data.map((d) => d.id));
    } else {
      onSelectionChange?.([]);
    }
  };

  return (
    <div className="ui-table-wrapper">
      <table className="ui-table" role="grid">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" style={{ width: col.width }} className="ui-table__th">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="ui-table__empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className={`ui-table-row ${row.id} ${selectedRows.includes(row.id) ? "ui-table-row--selected" : ""}`}
                onClick={() => clickable && onRowClick?.(row)}
                style={clickable ? { cursor: "pointer" } : undefined}
                aria-selected={selectedRows.includes(row.id)}
              >
                {columns.map((col) => (
                  <td key={col.key} className="ui-table__td">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            )))}
          </tbody>
      </table>
    </div>
  );
}