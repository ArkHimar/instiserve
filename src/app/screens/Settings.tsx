import { Button, Badge } from "@instiserve/design-system";
import "./Settings.css";

/**
 * Settings Screen — Preliminary Screen
 * Based on Figma SETTINGS frames
 */
export function Settings() {
  const settingsSections = [
    {
      title: "General",
      items: [
        { label: "School Information", description: "Name, address, logo, contact details" },
        { label: "Academic Calendar", description: "Terms, semesters, holidays, exam periods" },
        { label: "Grading System", description: "Grade scales, GPA configuration, report cards" },
        { label: "Language & Localization", description: "Default language, date/time formats, currency" },
      ],
    },
    {
      title: "Academics",
      items: [
        { label: "Courses & Curriculum", description: "Manage courses, subjects, prerequisites" },
        { label: "Timetables", description: "Scheduling rules, conflict resolution, room allocation" },
        { label: "Assessment", description: "Exam types, weightings, continuous assessment config" },
        { label: "Attendance Rules", description: "Thresholds, notifications, biometric integration" },
      ],
    },
    {
      title: "Finance",
      items: [
        { label: "Fee Structure", description: "Fee types, amounts, discounts, scholarships" },
        { label: "Payment Gateways", description: "Configure payment providers, reconciliation" },
        { label: "Invoicing & Receipts", description: "Templates, numbering, automated generation" },
        { label: "Expenses & Payroll", description: "Categories, approval workflows, payroll runs" },
      ],
    },
    {
      title: "Users & Access",
      items: [
        { label: "Roles & Permissions", description: "Role definitions, granular permissions, audit logs" },
        { label: "Authentication", description: "SSO, MFA, password policies, session management" },
        { label: "User Management", description: "Bulk import, deactivation, profile fields" },
        { label: "Data Privacy", description: "GDPR/NDPR compliance, retention policies, export" },
      ],
    },
    {
      title: "Communication",
      items: [
        { label: "Notifications", description: "Email, SMS, push templates, scheduling" },
        { label: "Announcements", description: "School-wide, class, individual targeting" },
        { label: "Parent Portal", description: "Access settings, notification preferences" },
        { label: "Integration", description: "Email providers, SMS gateways, WhatsApp Business" },
      ],
    },
    {
      title: "System",
      items: [
        { label: "Integrations", description: "LMS, biometric, payment, government portals" },
        { label: "Backup & Restore", description: "Automated schedules, point-in-time recovery" },
        { label: "Audit Logs", description: "Activity tracking, compliance reporting" },
        { label: "Maintenance", description: "Downtime windows, version updates, health checks" },
      ],
    },
  ];

  return (
    <div className="settings-screen">
      <aside className="settings__sidebar" aria-label="Settings navigation">
        <div className="sidebar__brand">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="var(--color-brand-primary)" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>InstiServe</span>
        </div>
        <nav className="sidebar__nav" aria-label="Settings sections">
          <ul>
            {settingsSections.map((section, index) => (
              <li key={index} className={`sidebar__item ${index === 0 ? "sidebar__item--active" : ""}`}>
                <a href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="settings__main">
        <header className="settings__header">
          <h1 className="settings__title">Settings</h1>
          <p className="settings__subtitle">Configure your school platform preferences and integrations</p>
        </header>

        <main className="settings__content" role="main">
          {settingsSections.map((section, index) => (
            <section key={index} id={section.title.toLowerCase().replace(/\s+/g, "-")} className="settings__section">
              <header className="settings__section-header">
                <h2 className="settings__section-title">{section.title}</h2>
                <span className="settings__section-count">{section.items.length} settings</span>
              </header>

              <div className="settings__items">
                {section.items.map((item, itemIndex) => (
                  <article key={itemIndex} className="settings__item">
                    <div className="settings__item-content">
                      <h3 className="settings__item-title">{item.label}</h3>
                      <p className="settings__item-description">{item.description}</p>
                    </div>
                    <Button variant="secondary" size="compact">
                      Configure
                    </Button>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}