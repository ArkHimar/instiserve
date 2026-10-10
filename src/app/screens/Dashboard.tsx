import { Button, Badge } from "@instiserve/design-system";
import "./Dashboard.css";

/**
 * Admin Dashboard — Preliminary Screen
 * Based on Figma DASHBOARD frame (938:10201)
 * Mock data for demonstration
 */
export function Dashboard() {
  const kpis = [
    { label: "Students", value: "12,037", icon: "Users", trend: "+2.3%", trendUp: true },
    { label: "Programmes", value: "23", icon: "Books", trend: "+1", trendUp: true },
    { label: "Graduates", value: "2", icon: "UserList", trend: "—", trendUp: false },
    { label: "Staff Members", value: "34", icon: "UsersThree", trend: "+3", trendUp: true },
    { label: "Today's Attendance", value: "459", icon: "CalendarCheck", trend: "+12%", trendUp: true },
    { label: "Payment Received", value: "#340,000", icon: "HandCoins", trend: "+8.2%", trendUp: true },
  ];

  const chartData = [
    { month: "Jan", value: 120 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 150 },
    { month: "Apr", value: 200 },
    { month: "May", value: 180 },
    { month: "Jun", value: 220 },
    { month: "Jul", value: 210 },
    { month: "Aug", value: 190 },
    { month: "Sep", value: 230 },
    { month: "Oct", value: 240 },
  };

  const activities = [
    { icon: "BookmarkSimple", title: "Score entry inline", meta: "Course enrollment by Emmanuel", time: "2 min ago" },
    { icon: "BookmarkSimple", title: "Learning infrastructure update", meta: "Exist record preceeds", time: "15 min ago" },
    { icon: "BookmarkSimple", title: "Course registration added", meta: "First semester course added", time: "1 hour ago" },
    { icon: "BookmarkSimple", title: "Bible Quiz scheduled", meta: "Rescheduled bible quiz", time: "3 hours ago" },
    { icon: "BookmarkSimple", title: "Bible Quiz scheduled", meta: "Rescheduled bible quiz", time: "5 hours ago" },
  ];

  const reminders = [
    { title: "Examination starting in 30 mins", meta: "Course enrollment by Emmanuel" },
    { title: "Live sessions is ongoing", meta: "Course enrollment by Emmanuel" },
    { title: "Assignment has been posted", meta: "Course enrollment by Emmanuel" },
    { title: "Course registration is ongoing", meta: "Course enrollment by Emmanuel" },
    { title: "Payment is ongoing", meta: "Course enrollment by Emmanuel" },
  ];

  return (
    <div className="dashboard-screen">
      <aside className="dashboard__sidebar" aria-label="Sidebar navigation">
        <div className="sidebar__brand">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="var(--color-brand-primary)" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>InstiServe</span>
        </div>
        <nav className="sidebar__nav" aria-label="Main navigation">
          <ul>
            <li className="sidebar__item--active"><a href="#">Dashboard</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Staff</a></li>
            <li><a href="#">Parents</a></li>
            <li><a href="#">CBT</a></li>
            <li><a href="#">Result</a></li>
            <li><a href="#">AI Assistant</a></li>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Feedbacks</a></li>
          </ul>
        </nav>
        <div className="sidebar__footer">
          <span className="sidebar__term">2025/2026 - 1st Term</span>
          <div className="sidebar__user">
            <div className="sidebar__user-avatar" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="var(--color-surface-selected)" />
                <circle cx="16" cy="12" r="6" fill="var(--color-brand-primary)" />
                <ellipse cx="16" cy="26" rx="10" ry="5" fill="var(--color-brand-primary)" />
              </svg>
            </div>
            <div className="sidebar__user-info">
              <span className="sidebar__user-name">Adio Olatunde</span>
              <span className="sidebar__user-role">Admin</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="dashboard__main">
        <header className="dashboard__topnav" role="banner">
          <div className="topnav__search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="10" cy="10" r="7" />
              <path d="M14 14l5 5" />
            </svg>
            <input type="search" placeholder="Search..." aria-label="Search dashboard" />
          </div>
          <div className="topnav__actions">
            <span className="topnav__term-badge">2025/2026 - 1st Term</span>
            <div className="topnav__user" aria-label="User menu">
              <div className="topnav__user-avatar" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="var(--color-surface-selected)" />
                  <circle cx="18" cy="13" r="7" fill="var(--color-brand-primary)" />
                  <ellipse cx="18" cy="29" rx="11" ry="6" fill="var(--color-brand-primary)" />
                </svg>
              </div>
              <span className="topnav__user-name">Adio Olatunde</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 12l4-4 4 4" />
              </svg>
            </div>
          </div>
        </header>

        <main className="dashboard__content" role="main">
          <section className="dashboard__greeting" aria-labelledby="greeting-heading">
            <h1 id="greeting-heading" className="dashboard__greeting-text">Good morning, Olaniyan Emmanuel</h1>
          </section>

          <section className="dashboard__kpi" aria-label="Key Performance Indicators">
            <div className="kpi__grid">
              {kpis.map((kpi, index) => (
                <article key={index} className="kpi__card">
                  <div className="kpi__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {index === 0 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />}
                      {index === 1 && <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />}
                      {index === 2 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />}
                      {index === 3 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />}
                      {index === 4 && <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />}
                      {index === 5 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" />}
                    </svg>
                  </div>
                  <div className="kpi__content">
                    <span className="kpi__label">{kpi.label}</span>
                    <div className="kpi__value-row">
                      <span className="kpi__value">{kpi.value}</span>
                      {kpi.trend !== "—" && (
                        <span className={`kpi__trend ${kpi.trendUp ? "kpi__trend--up" : "kpi__trend--down"}`}>
                          {kpi.trend}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="dashboard__grid">
            <section className="dashboard__stats" aria-labelledby="stats-heading">
              <header className="stats__header">
                <h2 id="stats-heading" className="stats__title">Quick Statistics</h2>
                <div className="stats__controls">
                  <select className="stats__select" aria-label="Chart metric">
                    <option>Attendance</option>
                    <option>Enrollment</option>
                    <option>Payments</option>
                  </select>
                  <select className="stats__select" aria-label="Time period">
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </header>
              <div className="stats__chart" role="img" aria-label="Attendance chart showing monthly trends">
                <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="stats__svg">
                  <defs>
                    <linearGradient id="statsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={(() => {
                      const points = chartData.map((d, i) => {
                        const x = 40 + (i / (chartData.length - 1)) * 320;
                        const y = 180 - (d.value / 250) * 160;
                        return `${x},${y}`;
                      }).join(" L ");
                      return `M${points}`;
                    })()}
                    stroke="var(--color-brand-primary)"
                    strokeWidth="3"
                    fill="url(#statsGradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {chartData.map((d, i) => (
                    <circle
                      key={d.month}
                      cx={40 + (i / (chartData.length - 1)) * 320}
                      cy={180 - (d.value / 250) * 160}
                      r="4"
                      fill="var(--color-brand-primary)"
                    />
                  ))}
                </svg>
                <div className="stats__x-axis">
                  {chartData.map((d, i) => (
                    <span key={d.month} style={{ left: `${40 + (i / (chartData.length - 1)) * 320}px` }}>{d.month}</span>
                  ))}
                </div>
                <div className="stats__y-axis">
                  <span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                </div>
              </div>
            </section>

            <section className="dashboard__recent" aria-labelledby="recent-heading">
              <header className="recent__header">
                <h2 id="recent-heading" className="recent__title">Recent Activities</h2>
                <a href="#" className="recent__view-all">View full log →</a>
              </header>
              <ul className="recent__list" role="list">
                {activities.map((activity, index) => (
                  <li key={index} className="recent__item">
                    <div className="recent__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v16M4 10h12" />
                      </svg>
                    </div>
                    <div className="recent__content">
                      <span className="recent__title">{activity.title}</span>
                      <span className="recent__meta">{activity.meta}</span>
                    </div>
                    <time className="recent__time">{activity.time}</time>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="dashboard__reminders" aria-labelledby="reminders-heading">
            <h2 id="reminders-heading" className="reminders__title">Reminders</h2>
            <ul className="reminders__list" role="list">
              {reminders.map((reminder, index) => (
                <li key={index} className="reminders__item">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" aria-hidden="true">
                    <path d="M9 2v14M5 9h8" />
                  </svg>
                  <div className="reminders__content">
                    <span className="reminders__title">{reminder.title}</span>
                    <span className="reminders__meta">{reminder.meta}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}