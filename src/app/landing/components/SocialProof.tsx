import "./SocialProof.css";

/**
 * Social Proof Section — InstiServe Landing Page
 * "Trusted by 5,000+ modern schools"
 */
export function SocialProof() {
  const schools = [
    { name: "Greenfield Secondary School", location: "Lagos, Nigeria" },
    { name: "St. Mary's Academy", location: "Abuja, Nigeria" },
    { name: "Lagos International College", location: "Lagos, Nigeria" },
    { name: "Apex College", location: "Port Harcourt, Nigeria" },
    { name: "Crown Heights School", location: "Kano, Nigeria" },
    { name: "Bright Future Academy", location: "Ibadan, Nigeria" },
  ];

  return (
    <section className="social-proof landing-section" aria-labelledby="social-proof-heading">
      <div className="landing-container">
        <header className="social-proof__header landing-text-center">
          <h2 id="social-proof-heading" className="landing-heading landing-heading--section-title social-proof__label">
            Trusted by 5,000+ modern schools
          </h2>
        </header>

        <div className="social-proof__grid">
          {schools.map((school) => (
            <article key={school.name} className="social-proof__card">
              <div className="social-proof__logo" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="var(--color-surface-selected)" />
                  <path d="M12 20L18 26L28 14" stroke="var(--color-brand-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="social-proof__name">{school.name}</h3>
              <p className="social-proof__location">{school.location}</p>
            </article>
          ))}
        </div>

        <p className="social-proof__cta landing-text-center">
          <a href="#pricing" className="social-proof__link">
            View all schools →
          </a>
        </p>
      </div>
    </section>
  );
}