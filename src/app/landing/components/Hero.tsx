import { Button } from "@instiserve/design-system";
import "./Hero.css";

/**
 * Hero Section — InstiServe Landing Page
 * Content corrected from Figma (removed placeholder/fish content)
 */
export function Hero() {
  return (
    <section className="hero landing-section" aria-labelledby="hero-heading">
      <div className="landing-container">
        <div className="hero__content">
          <span className="landing-badge">New: AI-Powered Result Computation</span>

          <h1 id="hero-heading" className="landing-heading landing-heading--large hero__headline">
            The operating platform for modern schools
          </h1>

          <p className="hero__subheadline landing-body landing-body--muted">
            Manage admissions, academics, results, fees, communication and student services
            from one connected platform.
          </p>

          <div className="landing-buttons hero__actions">
            <Button variant="primary" size="regular" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              See how it works
            </Button>
            <Button variant="secondary" size="regular" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a demo
            </Button>
          </div>

          <div className="hero__trust">
            <p className="landing-caption hero__trust-label">Trusted by 5,000+ modern schools</p>
            <div className="hero__logos" aria-label="Trusted schools">
              {/* Placeholder for school logos */}
              <span className="hero__logo-placeholder">Greenfield Secondary</span>
              <span className="hero__logo-placeholder">St. Mary's Academy</span>
              <span className="hero__logo-placeholder">Lagos International</span>
              <span className="hero__logo-placeholder">Apex College</span>
              <span className="hero__logo-placeholder">Crown Heights</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__dashboard-preview">
            {/* Dashboard preview illustration */}
            <div className="hero__preview-header">
              <div className="hero__preview-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="hero__preview-content">
              <div className="hero__stat-cards">
                <div className="hero__stat">
                  <span className="hero__stat-value">12,037</span>
                  <span className="hero__stat-label">Students</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">23</span>
                  <span className="hero__stat-label">Programmes</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">2</span>
                  <span className="hero__stat-label">Graduates</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">34</span>
                  <span className="hero__stat-label">Staff</span>
                </div>
              </div>
              <div className="hero__preview-chart">
                <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20,180 L60,140 L100,160 L140,100 L180,120 L220,80 L260,90 L300,60 L340,70 L380,50"
                    stroke="var(--color-brand-primary)"
                    strokeWidth="3"
                    fill="url(#chartGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}