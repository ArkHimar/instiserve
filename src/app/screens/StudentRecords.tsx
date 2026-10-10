import { Button, Badge, TextField, Select, Switch, Checkbox, Radio, RadioGroup, Tabs, Pagination, TableRow, EmptyState, Alert } from "@instiserve/design-system";
import { useState } from "react";
import "./StudentRecords.css";

/**
 * Student Records — Mock feature screen
 * Demonstrates InstiServe design system in a realistic student management context
 */
export function StudentRecords() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Mock student data
  const students = [
    { id: "STU-2024-001", name: "Adebayo Kunle", email: "kunle.adebayo@student.ng", idNumber: "STU-2024-001", program: "Computer Science", level: "300 Level", status: "active", guardian: "Mr. Adebayo Senior", phone: "+234 801 234 5678" },
    { id: "STU-2024-002", name: "Chioma Nwosu", email: "chioma.nwosu@student.ng", idNumber: "STU-2024-002", program: "Medicine", level: "400 Level", status: "active", guardian: "Mrs. Nwosu Grace", phone: "+234 802 345 6789" },
    { id: "STU-2024-003", name: "Ibrahim Musa", email: "ibrahim.musa@student.ng", idNumber: "STU-2024-003", program: "Engineering", level: "200 Level", status: "active", guardian: "Alhaji Musa", phone: "+234 803 456 7890" },
    { id: "STU-2024-004", name: "Fatima Abubakar", email: "fatima.abubakar@student.ng", idNumber: "STU-2024-004", program: "Law", level: "500 Level", status: "graduated", guardian: "Alhaji Abubakar", phone: "+234 804 567 8901" },
    { id: "STU-2024-005", name: "Emeka Okafor", email: "emeka.okafor@student.ng", idNumber: "STU-2024-005", program: "Business Admin", level: "300 Level", status: "on_leave", guardian: "Mr. Okafor Peter", phone: "+234 805 678 9012" },
    { id: "STU-2024-006", name: "Aisha Bello", email: "aisha.bello@student.ng", idNumber: "STU-2024-006", program: "Pharmacy", level: "400 Level", status: "active", guardian: "Mallam Bello", phone: "+234 806 789 0123" },
    { id: "STU-2024-007", name: "David Okeke", email: "david.okeke@student.ng", idNumber: "STU-2024-007", program: "Computer Science", level: "200 Level", status: "suspended", guardian: "Mr. Okeke James", phone: "+234 807 890 1234" },
    { id: "STU-2024-008", name: "Grace Eze", email: "grace.eze@student.ng", idNumber: "STU-2024-008", program: "Nursing", level: "300 Level", status: "active", guardian: "Mrs. Eze Mary", phone: "+234 808 901 2345" },
    { id: "STU-2024-009", name: "Yusuf Garba", email: "yusuf.garba@student.ng", idNumber: "STU-2024-009", program: "Agriculture", level: "400 Level", status: "active", guardian: "Alhaji Garba", phone: "+234 809 012 3456" },
    { id: "STU-2024-010", name: "Blessing Ade", email: "blessing.ade@student.ng", idNumber: "STU-2024-010", program: "Education", level: "200 Level", status: "active", guardian: "Pastor Ade", phone: "+234 810 123 4567" },
    { id: "STU-2024-011", name: "Samuel Okon", email: "samuel.okon@student.ng", idNumber: "STU-2024-011", program: "Mass Comm", level: "100 Level", status: "active", guardian: "Mr. Okon", phone: "+234 811 234 5678" },
    { id: "STU-2024-012", name: "Precious Udeh", email: "precious.udeh@student.ng", idNumber: "STU-2024-012", program: "Biochemistry", level: "300 Level", status: "active", guardian: "Dr. Udeh", phone: "+234 812 345 6789" },
    { id: "STU-2024-013", name: "Musa Yusuf", email: "musa.yusuf@student.ng", idNumber: "STU-2024-013", program: "Physics", level: "200 Level", status: "on_leave", guardian: "Alhaji Yusuf", phone: "+234 813 456 7890" },
    { id: "STU-2024-014", name: "Ruth Daniel", email: "ruth.daniel@student.ng", idNumber: "STU-2024-014", program: "Microbiology", level: "300 Level", status: "active", guardian: "Mrs. Daniel", phone: "+234 814 567 8901" },
    { id: "STU-2024-015", name: "Chinedu Okoro", email: "chinedu.okoro@student.ng", idNumber: "STU-2024-015", program: "Architecture", level: "400 Level", status: "active", guardian: "Engr. Okoro", phone: "+234 815 678 9012" },
    { id: "STU-2024-016", name: "Halima Sani", email: "halima.sani@student.ng", idNumber: "STU-2024-016", program: "Public Health", level: "200 Level", status: "active", guardian: "Dr. Sani", phone: "+234 816 789 0123" },
    { id: "STU-2024-017", name: "Victor Nwankwo", email: "victor.nwankwo@student.ng", idNumber: "STU-2024-017", program: "Economics", level: "300 Level", status: "active", guardian: "Mr. Nwankwo", phone: "+234 817 890 1234" },
    { id: "STU-2024-018", name: "Amina Aliyu", email: "amina.aliyu@student.ng", idNumber: "STU-2024-018", program: "Vet Medicine", level: "500 Level", status: "graduated", guardian: "Alhaji Aliyu", phone: "+234 818 901 2345" },
  ];

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "on_leave", label: "On Leave" },
    { value: "suspended", label: "Suspended" },
    { value: "graduated", label: "Graduated" },
  ];

  const getStatusTone = (status: string) => {
    switch (status) {
      case "active": return "success";
      case "on_leave": return "warning";
      case "suspended": return "error";
      case "graduated": return "info";
      default: return "neutral";
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.idNumber.toLowerCase().includes(search.toLowerCase()) ||
      student.program.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) 
      ? prev.filter(id => id !== id) 
      : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredStudents.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredStudents.map(s => s.id));
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="student-records-screen">
      <aside className="sr-sidebar" aria-label="Student Records navigation">
        <div className="sr-sidebar__brand">
          <img src="/InstiServe-logo.png" alt="InstiServe" width="182" height="48" />
        </aside>

        <div className="sr-main">
          <header className="sr-header">
            <div className="sr-header__left">
              <h1 className="sr-title">Student Records</h1>
              <p className="sr-subtitle">Manage student enrollment, records, and academic progress</p>
            </header>
            <div className="sr-header-actions">
              <Button variant="ghost" size="compact" onClick={() => setShowFilters(!showFilters)}>
                Filters
              </Button>
              <Button variant="primary" size="regular">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="8" y1="3" x2="8" y2="13" />
                  <line x1="3" y1="8" x2="13" y2="8" />
                </svg>
                Add Student
              </Button>
            </header>

            <main className="sr-content">
              <section className="sr-stats" aria-label="Student statistics">
                <div className="stats-grid">
                  <article className="stat-card">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">1,247</span>
                      <span className="stat-label">Total Students</span>
                    </div>
                  </article>
                  <article className="stat-card">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-success-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">1,189</span>
                      <span className="stat-label">Active</span>
                    </div>
                  </article>
                  <article className="stat-card">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.47h16.94a2 2 0 0 0 1.71-3.47L10.29 3.86z" />
                        <path d="M10 9v4M10 15v.01" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">23</span>
                      <span className="stat-label">On Leave</span>
                    </div>
                  </article>
                  <article className="stat-card">
                    <div className="stat-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-error-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="15" x2="9" y2="9" />
                        <line x1="9" y1="15" x2="15" y2="9" />
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">12</span>
                      <span className="stat-label">Suspended</span>
                    </div>
                  </article>
                </div>
              </section>

              <section className="sr-filters" aria-label="Student filters" hidden={!showFilters}>
                <div className="filters-panel">
                  <div className="filters-row">
                    <TextField
                      label="Search"
                      placeholder="Search by name, email, ID..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search students..."
                    />
                    <Select
                      label="Status"
                      options={statusOptions}
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    />
                  </div>
                  <div className="filters-row">
                    <TextField
                      label="Program"
                      placeholder="All Programs"
                    />
                    <Select
                      label="Level"
                      options={[
                        { value: "all", label: "All Levels" },
                        { value: "100", label: "100 Level" },
                        { value: "200", label: "200 Level" },
                        { value: "300", label: "300 Level" },
                        { value: "400", label: "400 Level" },
                        { value: "500", label: "500 Level" },
                      ]}
                      value="all"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="filters-actions">
                    <Button variant="ghost" onClick={() => { setSearch(""); setStatusFilter("all"); setShowFilters(false); }}>
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </section>

              <section className="sr-table-section" aria-labelledby="students-heading">
                <header className="sr-table-header">
                  <h2 id="students-heading" className="sr-table-title">All Students ({filteredStudents.length})</h2>
                  <div className="sr-table-actions">
                    <span className="sr-selected-count">
                      {selectedIds.length} selected
                    </span>
                    <div className="sr-bulk-actions" hidden={selectedIds.length === 0}>
                      <Button variant="ghost" size="compact">Export</Button>
                      <Button variant="ghost" size="compact" disabled>Message</Button>
                      <Button variant="secondary" size="compact">Bulk Action</Button>
                    </div>
                  </div>
                </header>

                <div className="sr-table-wrapper">
                  <table className="sr-table" role="grid">
                    <thead>
                      <tr>
                        <th scope="col" className="sr-th-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedIds.length === filteredStudents.length && filteredStudents.length > 0}
                            indeterminate={selectedIds.length > 0 && selectedIds.length < filteredStudents.length}
                            onChange={toggleSelectAll}
                            aria-label="Select all students"
                          />
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">ID Number</th>
                        <th scope="col">Program</th>
                        <th scope="col">Level</th>
                        <th scope="col">Status</th>
                        <th scope="col">Guardian</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.length === 0 ? (
                        <tr>
                          <td colSpan={10} className="sr-table__empty">
                            <EmptyState kind="noResults" />
                          </td>
                        </tr>
                      ) : (
                        filteredStudents.map((student) => (
                          <tr
                            key={student.id}
                            className={`sr-row ${selectedIds.includes(student.id) ? "sr-row--selected" : ""}`}
                            onClick={() => toggleExpand(student.id)}
                          >
                            <td className="sr-td-checkbox">
                              <input
                                type="checkbox"
                                checked={selectedIds.includes(student.id)}
                                onChange={() => toggleSelect(student.id)}
                                aria-label={`Select ${student.name}`}
                              />
                            </td>
                            <td className="sr-td-name">
                              <div className="student-name-cell">
                                <span className="student-name">{student.name}</span>
                                <span className="student-id">ID: {student.idNumber}</span>
                              </div>
                            </td>
                            <td><a href={`mailto:${student.email}`} className="student-email">{student.email}</a></td>
                            <td className="student-id-col">{student.idNumber}</td>
                            <td className="student-program">{student.program}</td>
                            <td className="student-level">{student.level}</td>
                            <td>
                              <Badge tone={getStatusTone(student.status)}>
                                {student.status.replace("_", " ")}
                              </Badge>
                            </td>
                            <td className="student-guardian">
                              <div className="guardian-info">
                                <span className="guardian-name">{student.guardian}</span>
                                <span className="guardian-phone">{student.phone}</span>
                              </div>
                            </td>
                            <td className="actions-col">
                              <div className="row-actions">
                                <button className="action-btn" aria-label={`View ${student.name}`} onClick={(e) => { e.stopPropagation(); toggleExpand(student.id); }}>
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M1 12s4-8 9-8 9 8 9 8-3 8-9 8z" />
                                    <circle cx="8" cy="12" r="3" />
                                  </svg>
                                </button>
                                <button className="action-btn" aria-label={`Edit ${student.name}`} onClick={(e) => e.stopPropagation()}>
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5a2.121 2.121 0 0 1 3 3z" />
                                    <line x1="12" y1="12" x2="15" y2="15" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <Pagination
                  currentPage={page}
                  totalPages={3}
                  onPageChange={setPage}
                  siblingCount={1}
                  showFirstLast
                  showPrevNext
                />
              </section>

              {expandedId && (
                <section className="sr-expansion" aria-labelledby={`expansion-${expandedId}`}>
                  <div className="sr-expansion-content">
                    <h3>Student Details</h3>
                    <p>Detailed view for {students.find(s => s.id === expandedId)?.name}</p>
                    <div className="expansion-grid">
                      <div className="expansion-field">
                        <label>Email</label>
                        <span>{students.find(s => s.id === expandedId)?.email}</span>
                      </div>
                      <div className="expansion-field">
                        <label>Phone</label>
                        <span>{students.find(s => s.id === expandedId)?.phone}</span>
                      </div>
                      <div className="expansion-field">
                        <label>Guardian</label>
                        <span>{students.find(s => s.id === expandedId)?.guardian}</span>
                      </div>
                      <div className="expansion-field">
                        <label>Guardian Phone</label>
                        <span>{students.find(s => s.id === expandedId)?.phone}</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}