import "./ProjectTours.css";

/**
 * Project Tours / Dashboard Preview Section — InstiServe Landing Page
 * Shows dashboard preview for different user roles
 */
export function ProjectTours() {
  const roles = [
    {
      role: "Admin",
      description: "Full school oversight with analytics, staff management, and system configuration.",
      image: "admin",
      icon: "🏢",
    },
    {
      role: "Teacher",
      description: "Classroom tools for attendance, grading, lesson planning, and student communication.",
      image: "teacher",
      icon: "👩‍🏫",
    },
    {
      role: "Students",
      description: "Personalized portal for courses, assignments, results, and timetables.",
      image: "students",
      icon: "👨‍🎓",
    },
    {
      role: "Parents",
      description: "Real-time visibility into child's progress, fees, attendance, and school communications.",
      image: "parents",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  const dashboardStats = [
    { label: "Students", value: "12,037", icon: "👥" },
    { label: "Programmes", value: "23", icon: "📚" },
    { label: "Graduates", value: "2", icon: "🎓" },
    { label: "Staff Members", value: "34", icon: "👨‍🏫" },
  ];

  const recentActivities = [
    { action: "Score entry inline", user: "Course enrollment by Emmanuel", time: "2 min ago" },
    { action: "Course enrollment", user: "Learning infrastructure update", time: "5 min ago" },
    { action: "Record updated", user: "Exist record preceeds", time: "12 min ago" },
    { action: "Registration added", user: "Course registration by Emmanuel", time: "18 min ago" },
    { action: "Semester added", user: "First semester course added", time: "25 min ago" },
    { action: "Quiz scheduled", user: "Bible Quiz scheduled", time: "32 min ago" },
    { action: "Quiz rescheduled", user: "Rescheduled bible quiz", time: "38 min ago" },
    { action: "Quiz scheduled", user: "Bible Quiz scheduled", time: "45 min ago" },
    { action: "Quiz rescheduled", user: "Rescheduled bible quiz", time: "52 min ago" },
  ];

  const reminders = [
    "Examination starting in 30 mins",
    "Course enrollment by Emmanuel",
    "Live sessions is ongoing",
    "Course enrollment by Emmanuel",
    "Assignment has been posted",
    "Course enrollment by Emmanuel",
    "Course registration is ongoing",
    "Course enrollment by Emmanuel",
    "Payment is ongoing",
    "Course enrollment by Emmanuel",
  ];

  return (
    <section className="project-tours landing-section" aria-labelledby="project-tours-heading">
      <div className="landing-container">
        <header className="project-tours__header landing-text-center">
          <h2 id="project-tours-heading" className="landing-heading landing-heading--section-title project-tours__label">
            Project Tours
          </h2>
          <h3 className="project-tours__headline landing-heading landing-heading--large">
            See InstiServe in Action
          </h3>
        </header>

        <div className="project-tours__roles landing-grid landing-grid--4">
          {roles.map((role) => (
            <article key={role.role} className="project-tours__role-card">
              <div className="project-tours__role-image" aria-hidden="true">
                <div className={`project-tours__role-placeholder project-tours__role-placeholder--${role.image.toLowerCase()}`}>
                  <span>{role.icon}</span>
                </div>
              </div>
              <h3 className="project-tours__role-name">{role.role}</h3>
              <p className="project-tours__role-description">{role.description}</p>
            </article>
          ))}
        </div>

        <div className="project-tours__divider landing-divider" />

        <div className="project-tours__dashboard-preview">
          <h3 className="project-tours__dashboard-title">Admin Dashboard Preview</h3>

          <div className="project-tours__dashboard-header">
            <div className="project-tours__dashboard-user">
              <div className="project-tours__user-avatar" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="var(--color-surface-selected)" />
                  <circle cx="20" cy="15" r="7" fill="var(--color-brand-primary)" />
                  <ellipse cx="20" cy="35" rx="12" ry="7" fill="var(--color-brand-primary)" />
                </svg>
              </div>
              <div className="project-tours__user-info">
                <p className="project-tours__user-greeting">Good morning, Olaniyan Emmanuel</p>
                <p className="project-tours__user-role">Admin</p>
              </div>
            </div>

            <div className="project-tours__dashboard-meta">
              <div className="project-tours__search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="10" cy="10" r="7" />
                  <path d="M14 14l5 5" />
                </svg>
                <input type="search" placeholder="Search..." aria-label="Search dashboard" />
              </div>
              <span className="project-tours__term-badge">2025/2026 - 1st Term</span>
            </div>
          </div>

          <div className="project-tours__stats landing-grid landing-grid--4">
            {dashboardStats.map((stat) => (
              <article key={stat.label} className="project-tours__stat-card">
                <span className="project-tours__stat-icon" aria-hidden="true">{stat.icon}</span>
                <div className="project-tours__stat-value">{stat.value}</div>
                <div className="project-tours__stat-label">{stat.label}</div>
              </article>
            ))}
          </div>

          <div className="project-tours__dashboard-content landing-grid landing-grid--2">
            <section className="project-tours__attendance" aria-labelledby="attendance-heading">
              <h3 id="attendance-heading" className="project-tours__section-title">Today's Attendance</h3>
              <div className="project-tours__attendance-chart" aria-hidden="true">
                <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20,180 L60,140 L100,160 L140,100 L180,120 L220,80 L260,90 L300,60 L340,70 L380,50"
                    stroke="var(--color-brand-primary)"
                    strokeWidth="3"
                    fill="url(#attendanceGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="project-tours__attendance-meta">
                <span className="project-tours__attendance-count">459 present</span>
                <span className="project-tours__attendance-period">Monthly view</span>
              </div>
            </section>

            <section className="project-tours__recent-activity" aria-labelledby="activity-heading">
              <header className="project-tours__section-header">
                <h3 id="activity-heading" className="project-tours__section-title">Recent Activities</h3>
                <a href="#" className="project-tours__view-all">View full log →</a>
              </header>
              <ul className="project-tours__activity-list">
                {recentActivities.map((activity, index) => (
                  <li key={index} className="project-tours__activity-item">
                    <div className="project-tours__activity-main">
                      <span className="project-tours__activity-action">{activity.action}</span>
                      <span className="project-tours__activity-user">{activity.user}</span>
                    </div>
                    <time className="project-tours__activity-time">{activity.time}</time>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="project-tours__reminders" aria-labelledby="reminders-heading">
            <h3 id="reminders-heading" className="project-tours__section-title">Reminders</h3>
            <ul className="project-tours__reminders-list">
              {reminders.map((reminder, index) => (
                <li key={index} className="project-tours__reminder-item">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" aria-hidden="true">
                    <path d="M9 2v14M5 9h8" />
                  </svg>
                  <span>{reminder}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}