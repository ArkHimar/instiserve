import "./WhyInstiserve.css";

/**
 * Why InstiServe Section — InstiServe Landing Page
 * Value propositions and differentiators
 */
export function WhyInstiserve() {
  const reasons = [
    {
      icon: "🏗️",
      title: "All-in-one platform",
      description: "Admissions, academics, finance, and administration unified in one seamless platform — no more disconnected tools.",
    },
    {
      icon: "⚡",
      title: "Quick implementation",
      description: "Get up and running in days, not months. Our guided onboarding and pre-configured templates accelerate time-to-value.",
    },
    {
      icon: "🔒",
      title: "Secure & private",
      description: "Your school's data stays within your institution. Bank-grade encryption, granular access controls, and full audit trails.",
    },
    {
      icon: "🤝",
      title: "Dedicated support",
      description: "We're with you every step of the way — from onboarding to optimization. Dedicated success managers on Premium and Enterprise.",
    },
    {
      icon: "🎯",
      title: "Easy to use",
      description: "Built for non-technical users and teams. Intuitive interfaces, contextual help, and minimal training required.",
    },
    {
      icon: "📈",
      title: "Data-driven decisions",
      description: "Real-time analytics, predictive insights, and customizable reports empower leadership to act with confidence.",
    },
  ];

  const footerLinks = {
    QuickLinks: ["About", "Expertise", "Approach", "Impact", "FAQ"],
    Services: ["Psychology & Well-being", "Agricultural Consultancy", "Training & Workshops", "Community Development"],
    AreaOfExpertise: ["Psychology & Well-being", "Agricultural Consultancy", "Training & Workshops", "Community Development"],
  };

  return (
    <section className="why-instiserve landing-section" aria-labelledby="why-instiserve-heading">
      <div className="landing-container">
        <header className="why-instiserve__header landing-text-center">
          <h2 id="why-instiserve-heading" className="landing-heading landing-heading--section-title why-instiserve__label">
            Why InstiServe
          </h2>
          <h3 className="why-instiserve__headline landing-heading landing-heading--large">
            Why Schools Choose InstiServe
          </h3>
        </header>

        <div className="why-instiserve__reasons landing-grid landing-grid--3">
          {reasons.map((reason) => (
            <article key={reason.title} className="why-instiserve__reason-card">
              <div className="why-instiserve__icon" aria-hidden="true">
                <span>{reason.icon}</span>
              </div>
              <h3 className="why-instiserve__title">{reason.title}</h3>
              <p className="why-instiserve__description">{reason.description}</p>
            </article>
          ))}
        </div>

        <div className="why-instiserve__divider landing-divider" />

        <footer className="why-instiserve__footer">
          <div className="why-instiserve__footer-main">
            <div className="why-instiserve__brand">
              <div className="why-instiserve__logo" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="var(--color-brand-primary)" />
                  <path d="M10 20L16 26L30 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="why-instiserve__mission">
                Supporting individuals, organisations, and communities through meaningful insight, collaboration, and positive change.
              </p>
            </div>

            <nav className="why-instiserve__nav" aria-label="Footer navigation">
              <div className="why-instiserve__nav-column">
                <h4 className="why-instiserve__nav-title">Quick Links</h4>
                <ul>
                  {footerLinks.QuickLinks.map((link) => (
                    <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="why-instiserve__nav-column">
                <h4 className="why-instiserve__nav-title">Services</h4>
                <ul>
                  {footerLinks.Services.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="why-instiserve__nav-column">
                <h4 className="why-instiserve__nav-title">Area of Expertise</h4>
                <ul>
                  {footerLinks.AreaOfExpertise.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="why-instiserve__contact">
              <h4 className="why-instiserve__nav-title">Get In Touch</h4>
              <address className="why-instiserve__address">
                <p><strong>Location:</strong> Redemption City, Mowe, Ogun State, Nigeria</p>
                <p><strong>Phone:</strong> <a href="tel:+23481234567879">+234 812 345 67879</a></p>
              </address>
            </div>
          </div>

          <div className="why-instiserve__copyright">
            <p>© 2026 InstiServe All Rights Reserved</p>
            <nav aria-label="Legal links">
              <a href="#">Terms of Use</a>
              <span aria-hidden="true">·</span>
              <a href="#">Privacy Policy</a>
              <span aria-hidden="true">·</span>
              <a href="#">Cookie Policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}