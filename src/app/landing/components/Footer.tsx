import "./Footer.css";

/**
 * Footer Component — InstiServe Landing Page
 * Updated with recommended InstiServe footer content
 */
export function Footer() {
  const footerLinks = {
    Explore: [
      { label: "Platform features", href: "#core-features-heading" },
      { label: "Product tour", href: "#project-tours-heading" },
      { label: "Pricing", href: "#pricing-heading" },
      { label: "Frequently asked questions", href: "#faq-heading" },
    ],
    Platform: [
      { label: "Admissions & enrolment", href: "#core-features-heading" },
      { label: "Academics & results", href: "#core-features-heading" },
      { label: "Billing & payments", href: "#core-features-heading" },
      { label: "Communication & operations", href: "#core-features-heading" },
    ],
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="landing-container">
        <div className="footer__main">
          <div className="footer__brand">
            <img 
              src="/InstiServe-logo.png" 
              alt="InstiServe" 
              className="footer__logo-img"
              width="182"
              height="48"
            />
            <p className="footer__mission">
              One secure platform for admissions, academics, finance, and school operations—helping your team work smarter and support every learner.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Explore</h4>
              <ul>
                {footerLinks.Explore.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Platform</h4>
              <ul>
                {footerLinks.Platform.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__tagline">
          <h4 className="footer__nav-title">Ready to get started?</h4>
          <p>Bring your institution&apos;s people, processes, and data together in one dependable workspace.</p>
          <p><a href="https://instiserve.org">Explore InstiServe →</a></p>
          <p><a href="https://instiserve.org/login">Sign in to your portal →</a></p>
        </div>

        <div className="footer__copyright">
          <p>© 2026 InstiServe. All rights reserved.</p>
          <nav aria-label="Legal links">
            <a href="https://instiserve.org/privacy">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="https://instiserve.org/help">Help centre</a>
            <span aria-hidden="true">·</span>
            <a href="https://instiserve.org/licences">Licences</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
