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
            <img 
              src="/InstiServe-logo.png" 
              alt="InstiServe" 
              className="why-instiserve__logo-img"
              width="182"
              height="48"
            />
            <p className="why-instiserve__mission">
              One secure platform for admissions, academics, finance, and school operations—helping your team work smarter and support every learner.
            </p>
          </div>

            <nav className="why-instiserve__nav" aria-label="Footer navigation">
              <div className="why-instiserve__nav-column">
                <h4 className="why-instiserve__nav-title">Explore</h4>
                <ul>
                  {footerLinks.Explore.map((link) => (
                    <li key={link.label}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
              <div className="why-instiserve__nav-column">
                <h4 className="why-instiserve__nav-title">Platform</h4>
                <ul>
                  {footerLinks.Platform.map((link) => (
                    <li key={link.label}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="why-instiserve__contact">
              <h4 className="why-instiserve__nav-title">Ready to get started?</h4>
              <div className="why-instiserve__address">
                <p>Bring your institution&apos;s people, processes, and data together in one dependable workspace.</p>
                <p><a href="https://instiserve.org">Explore InstiServe →</a></p>
                <p><a href="https://instiserve.org/login">Sign in to your portal →</a></p>
              </div>
            </div>
          </div>

          <div className="why-instiserve__copyright">
            <p>© 2026 InstiServe. All rights reserved.</p>
            <nav aria-label="Legal links">
              <a href="https://instiserve.org/privacy">Privacy</a>
              <span aria-hidden="true">·</span>
              <a href="https://instiserve.org/help">Help centre</a>
              <span aria-hidden="true">·</span>
              <a href="https://instiserve.org/licences">Licences</a>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}
