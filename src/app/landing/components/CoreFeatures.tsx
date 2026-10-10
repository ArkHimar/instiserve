import "./CoreFeatures.css";

/**
 * Core Features Section — InstiServe Landing Page
 * Corrected content from Figma (removed placeholder fish content)
 */
export function CoreFeatures() {
  const featureCategories = [
    {
      category: "Academic & Learning",
      icon: "📚",
      features: [
        { name: "Courses & Curriculum", description: "Design and manage curricula with version control and learning outcomes mapping." },
        { name: "Timetables", description: "Automated scheduling with conflict resolution and resource allocation." },
        { name: "Results & Grading", description: "Flexible grading schemes, continuous assessment, and automated report cards." },
        { name: "Attendance", description: "Digital roll calls, biometric integration, and real-time analytics." },
      ],
    },
    {
      category: "Admissions",
      icon: "📝",
      features: [
        { name: "Online Applications", description: "Branded application portals with document upload and payment integration." },
        { name: "Application Tracking", description: "Real-time status updates for applicants and admissions teams." },
        { name: "Document Management", description: "Secure storage with OCR, verification workflows, and expiry alerts." },
        { name: "Enrollment", description: "One-click enrollment with automatic class assignment and ID generation." },
      ],
    },
    {
      category: "Finance",
      icon: "💰",
      features: [
        { name: "School Fees", description: "Flexible fee structures with sibling discounts, scholarships, and installments." },
        { name: "Payments & Receipts", description: "Multiple gateways, instant reconciliation, and automated receipts." },
        { name: "Expenses Tracking", description: "Budget vs actuals, purchase orders, and vendor management." },
        { name: "Payroll", description: "Automated salary runs, tax compliance, and payslip distribution." },
      ],
    },
    {
      category: "Administration",
      icon: "⚙️",
      features: [
        { name: "Staff Management", description: "HR records, performance reviews, leave management, and certifications." },
        { name: "Student Records", description: "Comprehensive profiles with academic history, health, and guardian info." },
        { name: "Reports & Analytics", description: "Custom dashboards, regulatory reports, and predictive insights." },
        { name: "Role-Based Access", description: "Granular permissions with audit trails and SSO integration." },
      ],
    },
  ];

  return (
    <section className="core-features landing-section" aria-labelledby="core-features-heading">
      <div className="landing-container">
        <header className="core-features__header landing-text-center">
          <h2 id="core-features-heading" className="landing-heading landing-heading--large core-features__headline">
            Everything Your School Needs In One Platform
          </h2>
          <p className="core-features__subheadline landing-body landing-body--muted">
            Four integrated modules cover every aspect of school operations — from admission to graduation.
          </p>
        </header>

        <div className="core-features__categories">
          {featureCategories.map((category) => (
            <article key={category.category} className="core-features__category">
              <header className="core-features__category-header">
                <span className="core-features__icon" aria-hidden="true">{category.icon}</span>
                <h3 className="core-features__category-title">{category.category}</h3>
              </header>

              <div className="core-features__features landing-grid landing-grid--2">
                {category.features.map((feature) => (
                  <article key={feature.name} className="core-features__feature">
                    <h4 className="core-features__feature-name">{feature.name}</h4>
                    <p className="core-features__feature-description">{feature.description}</p>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}