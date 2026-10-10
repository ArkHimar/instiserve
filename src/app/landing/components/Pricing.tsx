import { Button } from "@instiserve/design-system";
import "./Pricing.css";

/**
 * Pricing Section — InstiServe Landing Page
 * Corrected content from Figma (removed placeholder content)
 */
export function Pricing() {
  const plans = [
    {
      name: "Starter",
      period: "Per student / term",
      price: "₦3,000",
      features: [
        "Courses & Curriculum",
        "Timetables",
        "Results & Grading",
        "Attendance",
      ],
      cta: "Book a demo",
      popular: false,
    },
    {
      name: "Standard",
      period: "Per student / term",
      price: "₦4,500",
      features: [
        "Everything in Starter",
        "Admissions Management",
        "Fee Collection & Receipts",
        "Basic Reports & Analytics",
        "Parent Portal",
      ],
      cta: "Book a demo",
      popular: true,
    },
    {
      name: "Premium",
      period: "Per student / term",
      price: "₦7,500",
      features: [
        "Everything in Standard",
        "Advanced Analytics & BI",
        "Custom Integrations (API)",
        "Dedicated Support",
        "SLA Guarantee",
        "Staff Payroll & HR",
      ],
      cta: "Book a demo",
      popular: false,
    },
    {
      name: "Enterprise",
      period: "Custom pricing",
      price: "Custom",
      features: [
        "Everything in Premium",
        "Multi-campus Management",
        "Custom Development",
        "On-premise Deployment Option",
        "24/7 Priority Support",
        "Dedicated Success Manager",
        "Data Residency Options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const billingOptions = [
    { label: "Term", value: "term" },
    { label: "Session", value: "session" },
    { label: "Semester", value: "semester" },
  ];

  return (
    <section className="pricing landing-section" aria-labelledby="pricing-heading">
      <div className="landing-container">
        <header className="pricing__header landing-text-center">
          <h2 id="pricing-heading" className="landing-heading landing-heading--section-title pricing__label">
            Pricing
          </h2>
          <h3 className="pricing__headline landing-heading landing-heading--large">
            Choose the Plan That's Right For You
          </h3>

          <div className="pricing__toggle" role="radiogroup" aria-label="Billing period">
            {billingOptions.map((option) => (
              <button
                key={option.value}
                className={`pricing__toggle-btn ${option.value === "term" ? "pricing__toggle-btn--active" : ""}`}
                role="radio"
                aria-checked={option.value === "term"}
              >
                {option.label}
              </button>
            ))}
          </div>
        </header>

        <div className="pricing__grid landing-grid landing-grid--4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing__card ${plan.popular ? "pricing__card--popular" : ""}`}
            >
              {plan.popular && (
                <span className="pricing__popular-badge">Most Recommended</span>
              )}

              <header className="pricing__card-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <div className="pricing__price">
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__period">{plan.period}</span>
                </div>
              </header>

              <ul className="pricing__features" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" stroke="var(--color-brand-primary)" strokeWidth="2" />
                      <path d="M6 10l3 3 6-6" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <footer className="pricing__card-footer">
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="regular"
                  className="pricing__cta"
                >
                  {plan.cta}
                </Button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}