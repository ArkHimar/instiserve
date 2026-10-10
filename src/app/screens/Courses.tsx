import { Button, Badge } from "@instiserve/design-system";
import "./Courses.css";

/**
 * Courses Screen — Preliminary Screen
 * Based on Figma Courses frames in sidebar
 */
export function Courses() {
  const courses = [
    {
      id: "CSC101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Sarah Mitchell",
      students: 45,
      status: "Active",
      term: "2025/2026 - 1st Term",
      progress: 35,
    },
    {
      id: "MTH201",
      name: "Calculus II",
      instructor: "Prof. James Wilson",
      students: 32,
      status: "Active",
      term: "2025/2026 - 1st Term",
      progress: 28,
    },
    {
      id: "PHY101",
      name: "General Physics I",
      instructor: "Dr. Lisa Chen",
      students: 28,
      status: "Active",
      term: "2025/2026 - 1st Term",
      progress: 42,
    },
    {
      id: "ENG101",
      name: "English Composition",
      instructor: "Prof. Maria Rodriguez",
      students: 38,
      status: "Draft",
      term: "2025/2026 - 1st Term",
      progress: 0,
    },
    {
      id: "HIS201",
      name: "World History: Ancient Civilizations",
      instructor: "Dr. Robert Kim",
      students: 25,
      status: "Completed",
      term: "2024/2025 - 2nd Term",
      progress: 100,
    },
    {
      id: "BIO101",
      name: "Introduction to Biology",
      instructor: "Dr. Amanda Foster",
      students: 42,
      status: "Active",
      term: "2025/2026 - 1st Term",
      progress: 15,
    },
    {
      id: "CHM101",
      name: "General Chemistry",
      instructor: "Dr. Michael Brown",
      students: 30,
      status: "Pending",
      term: "2025/2026 - 2nd Term",
      progress: 0,
    },
    {
      id: "ECO101",
      name: "Principles of Economics",
      instructor: "Prof. David Lee",
      students: 35,
      status: "Active",
      term: "2025/2026 - 1st Term",
      progress: 22,
    },
  ];

  const stats = [
    { label: "Total Courses", value: "8", icon: "BookOpen" },
    { label: "Active Courses", value: "5", icon: "Activity" },
    { label: "Total Students", value: "275", icon: "Users" },
    { label: "Avg. Progress", value: "30%", icon: "TrendingUp" },
  ];

  return (
    <div className="courses-screen">
      <aside className="courses__sidebar" aria-label="Course navigation">
        <div className="sidebar__brand">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="var(--color-brand-primary)" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>InstiServe</span>
        </div>
        <nav className="sidebar__nav" aria-label="Course navigation">
          <ul>
            <li className="sidebar__item--active"><a href="#">All Courses</a></li>
            <li><a href="#">My Courses</a></li>
            <li><a href="#">Create Course</a></li>
            <li><a href="#">Curriculum</a></li>
            <li><a href="#">Timetables</a></li>
            <li><a href="#">Enrollment</a></li>
            <li><a href="#">Grades</a></li>
            <li><a href="#">Attendance</a></li>
          </ul>
        </nav>
      </aside>

      <div className="courses__main">
        <header className="courses__header">
          <div className="courses__header-left">
            <h1 className="courses__title">Courses</h1>
            <p className="courses__subtitle">Manage your school's course catalog and enrollments</p>
          </div>
          <div className="courses__header-right">
            <Button variant="ghost" size="compact">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="3" x2="13" y2="13" />
                <path d="M9 3h4v4" />
              </svg>
              Filter
            </Button>
            <Button variant="primary" size="compact">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="8" y1="3" x2="8" y2="13" />
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
              Create Course
            </Button>
          </div>
        </header>

        <main className="courses__content" role="main">
          <section className="courses__stats" aria-label="Course statistics">
            <div className="stats__grid">
              {stats.map((stat, index) => (
                <article key={index} className="stats__card">
                  <div className="stats__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {index === 0 && (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>)}
                      {index === 1 && (<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>)}
                      {index === 2 && (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /></>)}
                      {index === 3 && (<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><path d="M17 6h.01" /><path d="M7 18h.01" /></>)}
                    </svg>
                  </div>
                  <div className="stats__content">
                    <span className="stats__label">{stat.label}</span>
                    <span className="stats__value">{stat.value}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="courses__table-section" aria-labelledby="courses-heading">
            <header className="courses__table-header">
              <h2 id="courses-heading" className="courses__table-title">All Courses</h2>
              <div className="courses__table-actions">
                <select className="courses__filter" aria-label="Filter by term">
                  <option>All Terms</option>
                  <option>2025/2026 - 1st Term</option>
                  <option>2025/2026 - 2nd Term</option>
                  <option>2024/2025 - 2nd Term</option>
                </select>
                <select className="courses__filter" aria-label="Filter by status">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>
              </div>
            </header>

            <div className="courses__table-wrapper">
              <table className="courses__table" role="table">
                <thead>
                  <tr>
                    <th scope="col">Course Code</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Instructor</th>
                    <th scope="col">Students</th>
                    <th scope="col">Status</th>
                    <th scope="col">Term</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="courses__row">
                      <td className="courses__code">{course.id}</td>
                      <td className="courses__name">{course.name}</td>
                      <td className="courses__instructor">{course.instructor}</td>
                      <td className="courses__students">{course.students}</td>
                      <td>
                        <Badge tone={getStatusTone(course.status)}>{course.status}</Badge>
                      </td>
                      <td className="courses__term">{course.term}</td>
                      <td>
                        <div className="courses__progress">
                          <div className="courses__progress-bar" style={{ width: `${course.progress}%` }} />
                          <span className="courses__progress-text">{course.progress}%</span>
                        </div>
                      </td>
                      <td>
                        <div className="courses__actions">
                          <button className="courses__action-btn" aria-label={`Edit ${course.name}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5a2.121 2.121 0 0 1 3 3z" />
                              <line x1="12" y1="12" x2="15" y2="15" />
                            </svg>
                          </button>
                          <button className="courses__action-btn" aria-label={`View ${course.name}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M1 12s4-8 7-8 7 8 7 8-4 8-7 8" />
                              <circle cx="8" cy="12" r="3" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="courses__pagination">
              <nav aria-label="Course pages">
                <button className="pagination__btn" disabled aria-label="Previous page">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M10 4l-4 6 4 6" />
                  </svg>
                </button>
                <span className="pagination__pages">
                  <button className="pagination__page pagination__page--active" aria-label="Page 1">1</button>
                  <button className="pagination__page" aria-label="Page 2">2</button>
                  <button className="pagination__page" aria-label="Page 3">3</button>
                </span>
                <button className="pagination__btn" aria-label="Next page">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 4l4 6-4 6" />
                  </svg>
                </button>
              </nav>
              <span className="pagination__info">Showing 1-8 of 8 courses</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function getStatusTone(status: string): "neutral" | "info" | "success" | "warning" | "error" {
  switch (status) {
    case "Active": return "success";
    case "Draft": return "neutral";
    case "Completed": return "info";
    case "Pending": return "warning";
    default: return "neutral";
  }
}