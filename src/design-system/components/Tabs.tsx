import { useState, useRef, useEffect } from "react";
import "./Tabs.css";

/**
 * InstiServe Tabs — matches Figma `InstiServe/Tab` component set
 *
 * Figma variants (6): Style = Underline | Pill, State = Default | Selected | Disabled
 * Properties: Label
 */

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  /** Optional badge count */
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "underline" | "pill";
  fullWidth?: boolean;
  className?: string;
  /** Controlled mode */
  activeTab?: string;
  onTabClick?: (tabId: string) => void;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = "underline",
  fullWidth = false,
  className = "",
  activeTab: controlledActiveTab,
  onTabClick,
}: TabsProps) {
  const isControlled = controlledActiveTab !== undefined;
  const [uncontrolledActiveTab, setUncontrolledActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const activeTab = isControlled ? controlledActiveTab : uncontrolledActiveTab;
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Update indicator position
  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return;
    const activeButton = tabsRef.current.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
    if (activeButton && indicatorRef.current) {
      const { left, width } = activeButton.getBoundingClientRect();
      const containerLeft = tabsRef.current.getBoundingClientRect().left;
      indicatorRef.current.style.width = `${width}px`;
      indicatorRef.current.style.transform = `translateX(${left - containerLeft}px)`;
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab?.disabled) return;

    if (!isControlled) {
      setUncontrolledActiveTab(tabId);
    }
    onChange?.(tabId);
    onTabClick?.(tabId);
  };

  const variantClass = variant === "pill" ? "ui-tabs--pill" : "";
  const fullWidthClass = fullWidth ? "ui-tabs--full" : "";

  return (
    <div className={`ui-tabs ${variantClass} ${fullWidthClass} ${className}`} ref={tabsRef} role="tablist" aria-label="Tabs">
      {variant === "underline" && (
        <div className="ui-tabs__indicator" ref={indicatorRef} aria-hidden="true" />
      )}
      <div className="ui-tabs__list" role="tablist" aria-label="Tab navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-disabled={tab.disabled}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            className={`ui-tabs__tab ${activeTab === tab.id ? "ui-tabs__tab--active" : ""} ${tab.disabled ? "ui-tabs__tab--disabled" : ""}`}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            data-tab-id={tab.id}
          >
            <span className="ui-tabs__tab-label">{tab.label}</span>
            {tab.count !== undefined && tab.count > 0 && (
              <span className="ui-tabs__badge" aria-label={`${tab.count} items`}>{tab.count}</span>
            )}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="ui-tabs__panel"
        >
          {tab.children}
        </div>
      ))}
    </div>
  );
}

function handleKeyDown(e: React.KeyboardEvent, currentTabId: string) {
  const tabsList = e.currentTarget.parentElement?.querySelectorAll('[role="tab"]:not([disabled])') as NodeListOf<HTMLButtonElement>;
  const tabsArray = Array.from(tabsList);
  const currentIndex = tabsArray.findIndex((t) => t.id === `tab-${currentTabId}`);

  let nextIndex = currentIndex;
  switch (e.key) {
    case "ArrowRight":
      nextIndex = (currentIndex + 1) % tabsArray.length;
      e.preventDefault();
      break;
    case "ArrowLeft":
      nextIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
      e.preventDefault();
      break;
    case "Home":
      nextIndex = 0;
      e.preventDefault();
      break;
    case "End":
      nextIndex = tabsArray.length - 1;
      e.preventDefault();
      break;
    default:
      return;
  }

  tabsArray[nextIndex]?.focus();
  tabsArray[nextIndex]?.click();
}

export interface TabPanelProps {
  id: string;
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
}