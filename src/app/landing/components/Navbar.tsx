import { Button } from "@instiserve/design-system";
import "./Navbar.css";

/**
 * Navbar — InstiServe Landing Page
 * Uses design tokens for all styling
 */
export function Navbar() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__container landing-container">
        <a href="/" className="navbar__logo" aria-label="InstiServe Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="var(--color-brand-primary)" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="navbar__logo-text">InstiServe</span>
        </a>

        <div className="navbar__menu" role="menubar">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__link"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <Button variant="ghost" size="compact">
            Book a demo
          </Button>
          <Button variant="primary" size="compact">
            Get Started
          </Button>
        </div>

        <button
          className="navbar__mobile-toggle"
          aria-expanded="false"
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}