import "./Footer.css";

/**
 * Footer Component — InstiServe Landing Page
 * Separate reusable footer (also used in WhyInstiserve)
 */
export function Footer() {
  const footerLinks = {
    QuickLinks: ["About", "Expertise", "Approach", "Impact", "FAQ"],
    Services: ["Psychology & Well-being", "Agricultural Consultancy", "Training & Workshops", "Community Development"],
    AreaOfExpertise: ["Psychology & Well-being", "Agricultural Consultancy", "Training & Workshops", "Community Development"],
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="landing-container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="var(--color-brand-primary)" />
                <path d="M10 20L16 26L30 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="footer__mission">
              Supporting individuals, organisations, and communities through meaningful insight, collaboration, and positive change.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Quick Links</h4>
              <ul>
                {footerLinks.QuickLinks.map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Services</h4>
              <ul>
                {footerLinks.Services.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Area of Expertise</h4>
              <ul>
                {footerLinks.AreaOfExpertise.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="footer__contact">
            <h4 className="footer__nav-title">Get In Touch</h4>
            <address className="footer__address">
              <p><strong>Location:</strong> Redemption City, Mowe, Ogun State, Nigeria</p>
              <p><strong>Phone:</strong> <a href="tel:+23481234567879">+234 812 345 67879</a></p>
            </address>
          </div>
        </div>

        <div className="footer__copyright">
          <p>© 2026 InstiServe All Rights Reserved</p>
          <nav aria-label="Legal links">
            <a href="#">Terms of Use</a>
            <span aria-hidden="true">·</span>
            <a href="#">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}