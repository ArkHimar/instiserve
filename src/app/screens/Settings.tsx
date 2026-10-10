import React from "react";
import { Button, Badge, TextField, Select, Switch, Checkbox, Radio, RadioGroup, Tabs, Pagination, TableRow, EmptyState, Alert } from "@instiserve/design-system";
import { useState } from "react";
import "./Settings.css";

/**
 * Settings Screen — Preliminary Screen
 * Based on Figma SETTINGS frame (700-1595)
 */
export function Settings() {
  const [activeTab, setActiveTab] = useState("school-info");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("2025/2026 - 1st Term");
  const [userName, setUserName] = useState("Adio Olatunde");
  const [schoolName, setSchoolName] = useState("RCCG Radio");
  const [schoolEmail, setSchoolEmail] = useState("rcmadmin@gmail.com");
  const [phone, setPhone] = useState("0000-0000-000");
  const [website, setWebsite] = useState("www.rcm.edu.ng");
  const [address, setAddress] = useState("1, Redemption City, Mowe, Ogun State.");
  const [attendanceType, setAttendanceType] = useState("Daily");
  const [appName, setAppName] = useState("RCCG Radio");
  const [primaryColor, setPrimaryColor] = useState("#0088FF");
  const [accentColor, setAccentColor] = useState("#242749");
  const [faviconUrl, setFaviconUrl] = useState("");
  const [loginBgUrl, setLoginBgUrl] = useState("");
  const [affiliateName, setAffiliateName] = useState("RCCG Radio");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle states
  const [allowStudentPhoto, setAllowStudentPhoto] = useState(true);
  const [alwaysShowScrollbars, setAlwaysShowScrollbars] = useState(false);
  const [courseRegistrationOpen, setCourseRegistrationOpen] = useState(true);
  const [requireFinancialClearance, setRequireFinancialClearance] = useState(false);
  const [moduleRetakePolicy, setModuleRetakePolicy] = useState(false);
  const [hideGradeVerseBranding, setHideGradeVerseBranding] = useState(false);

  const tabs = [
    { id: "school-info", label: "School Info" },
    { id: "academic-info", label: "Academic Info" },
    { id: "level", label: "Level" },
    { id: "payment", label: "Payment" },
    { id: "results", label: "Results" },
    { id: "tertiary", label: "Tertiary" },
    { id: "campus", label: "Campus" },
    { id: "mode", label: "Mode" },
  ];

  const attendanceOptions = [
    { value: "Daily", label: "Daily" },
    { value: "Per lecture", label: "Per lecture" },
    { value: "Per session", label: "Per session" },
  ];

  return (
    <div className="settings-screen">
      <aside className="sr-sidebar" aria-label="Settings navigation">
        <div className="sr-sidebar__brand">
          <img src="/InstiServe-logo.png" alt="InstiServe" width="182" height="48" />
        </div>
        <nav className="sr-sidebar__nav" aria-label="Settings sections">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.id} className={activeTab === tab.id ? "sr-sidebar__item--active" : ""}>
                <a href={`#${tab.id}`}>{tab.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__left">
            <h1 className="sr-title">Settings</h1>
            <p className="sr-subtitle">Configure your institution settings and preferences</p>
          </div>
          <div className="sr-header__actions">
            <div className="sr-header__search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="10" cy="10" r="7" />
                <path d="M14 14l5 5" />
              </svg>
              <input
                type="search"
                placeholder="Search settings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search settings"
              />
            </div>
            <div className="sr-header__actions">
              <span className="sr-header__term">{term}</span>
              <div className="sr-header__user">
                <div className="sr-header__user-avatar" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="var(--color-surface-selected)" />
                    <circle cx="16" cy="12" r="6" fill="var(--color-brand-primary)" />
                    <ellipse cx="16" cy="26" rx="10" ry="5" fill="var(--color-brand-primary)" />
                  </svg>
                </div>
                <span className="sr-header__user-name">{userName}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 12l4-4 4 4" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        <main className="sr-content">
          <section className="sr-greeting" aria-labelledby="greeting-heading">
            <h2 id="greeting-heading" className="sr-greeting__title">Settings</h2>
            <p className="sr-greeting__subtitle">Configure your institution settings and preferences</p>
          </section>

          <Tabs
            tabs={tabs.map(t => ({ id: t.id, label: t.label }))}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant="pill"
            fullWidth
          />

          <div className="sr-tab-panel">
            {activeTab === "school-info" && (
              <section className="sr-section" aria-labelledby="school-info-heading">
                <header className="sr-section-header">
                  <h2 id="school-info-heading" className="sr-section-title">School Information</h2>
                  <p className="sr-section-subtitle">Manage your school's identity and contact details</p>
                </header>

                <div className="sr-form-grid">
                  <div className="sr-form-section">
                    <h3 className="sr-form-section-title">School Logo</h3>
                    <div className="sr-logo-upload">
                      <div className="sr-logo-preview">
                        <div className="sr-logo-placeholder">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                            <rect width="48" height="48" rx="8" fill="var(--color-surface-selected)" />
                            <path d="M12 24L18 30L36 12" stroke="var(--color-brand-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="sr-logo-hint">Click or drag an image to upload your school logo</p>
                        <p className="sr-logo-hint sr-logo-hint--detail">JPG, JPEG, PNG and WEBP. Max 2MB</p>
                      </div>
                      <Button variant="primary" size="compact">Upload</Button>
                    </div>
                  </div>

                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">School Information</h3>
                    <div className="sr-form-row">
                      <TextField
                        label="School name"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        placeholder="Enter school name"
                      />
                    </div>
                    <div className="sr-form-row">
                      <TextField
                        label="School Email address"
                        type="email"
                        value={schoolEmail}
                        onChange={(e) => setSchoolEmail(e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="sr-form-row">
                      <TextField
                        label="Phone Number"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="sr-form-row">
                      <TextField
                        label="Website"
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Enter website URL"
                      />
                    </div>
                    <div className="sr-form-row">
                      <Textarea
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                        rows={2}
                      />
                    </div>
                    <div className="sr-form-row">
                      <Select
                        label="Attendance Type"
                        options={attendanceOptions}
                        value={attendanceType}
                        onChange={(e) => setAttendanceType(e.target.value)}
                      />
                    </div>

                    <div className="sr-form-actions">
                      <Button variant="primary" size="regular">Save changes</Button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "academic-info" && (
              <section className="sr-section" aria-labelledby="academic-info-heading">
                <header className="sr-section-header">
                  <h2 id="academic-info-heading" className="sr-section-title">Academic Information</h2>
                  <p className="sr-section-subtitle">Configure academic settings and policies</p>
                </header>

                <div className="sr-form-grid">
                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Features Settings</h3>
                    <div className="sr-toggle-list">
                      <div className="sr-toggle-item">
                        <div className="sr-toggle-info">
                          <h4 className="sr-toggle-title">Allow students to upload their own photo</h4>
                          <p className="sr-toggle-description">When enabled, students can upload a profile photo from their dashboard settings.</p>
                        </div>
                        <Switch
                          checked={allowStudentPhoto}
                          onChange={setAllowStudentPhoto}
                          onLabel="On"
                          offLabel="Off"
                        />
                      </div>
                      <div className="sr-toggle-item">
                        <div className="sr-toggle-info">
                          <h4 className="sr-toggle-title">Always show scrollbars</h4>
                          <p className="sr-toggle-description">When enabled, scrollbars stay visible across the admin and student portals instead of being hidden. Users can still override this in their browser settings.</p>
                        </div>
                        <Switch
                          checked={alwaysShowScrollbars}
                          onChange={setAlwaysShowScrollbars}
                          onLabel="On"
                          offLabel="Off"
                        />
                      </div>
                      <div className="sr-toggle-item">
                        <div className="sr-toggle-info">
                          <h4 className="sr-toggle-title">Course registration open</h4>
                          <p className="sr-toggle-description">When off, students cannot submit or change course registrations until you reopen it. Staff can still register students manually.</p>
                        </div>
                        <Switch
                          checked={courseRegistrationOpen}
                          onChange={setCourseRegistrationOpen}
                          onLabel="On"
                          offLabel="Off"
                        />
                      </div>
                      <div className="sr-toggle-item">
                        <div className="sr-toggle-info">
                          <h4 className="sr-toggle-title">Require financial clearance for course registration</h4>
                          <p className="sr-toggle-description">Students must settle their bills — or meet your configured payment threshold — before they can submit course registrations.</p>
                        </div>
                        <Switch
                          checked={requireFinancialClearance}
                          onChange={setRequireFinancialClearance}
                          onLabel="On"
                          offLabel="Off"
                        />
                      </div>
                      <div className="sr-toggle-item">
                        <div className="sr-toggle-info">
                          <h4 className="sr-toggle-title">Module retake policy</h4>
                          <p className="sr-toggle-description">Controls when students can register a fresh attempt of a module they have already sat.</p>
                        </div>
                        <Switch
                          checked={moduleRetakePolicy}
                          onChange={setModuleRetakePolicy}
                          onLabel="On"
                          offLabel="Off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "branding" && (
              <section className="sr-section" aria-labelledby="branding-heading">
                <header className="sr-section-header">
                  <h2 id="branding-heading" className="sr-section-title">Branding</h2>
                  <p className="sr-section-subtitle">Customize your institution's visual identity</p>
                </header>

                <div className="sr-form-grid">
                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">App Name</h3>
                    <TextField
                      label="App Name"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      placeholder="Enter app name"
                    />
                  </div>

                  <div className="sr-form-section">
                    <h3 className="sr-form-section-title">Primary Color</h3>
                    <div className="sr-color-picker">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="sr-color-input"
                      />
                      <TextField
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        placeholder="#0088FF"
                      />
                    </div>
                  </div>

                  <div className="sr-form-section">
                    <h3 className="sr-form-section-title">Accent Color</h3>
                    <div className="sr-color-picker">
                      <input
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="sr-color-input"
                      />
                      <TextField
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        placeholder="#242749"
                      />
                    </div>
                  </div>

                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Favicon URL</h3>
                    <TextField
                      label="Favicon URL"
                      value={faviconUrl}
                      onChange={(e) => setFaviconUrl(e.target.value)}
                      placeholder="Enter favicon URL"
                    />
                  </div>

                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Login Background Image URL</h3>
                    <TextField
                      label="Login Background Image URL"
                      value={loginBgUrl}
                      onChange={(e) => setLoginBgUrl(e.target.value)}
                      placeholder="Enter background image URL"
                    />
                  </div>

                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Hide GradeVerse Branding</h3>
                    <div className="sr-toggle-item">
                      <div className="sr-toggle-info">
                        <h4 className="sr-toggle-title">Hide GradeVerse branding</h4>
                        <p className="sr-toggle-description">Remove GradeVerse references from the portal footer and public forms.</p>
                      </div>
                      <Switch
                        checked={hideGradeVerseBranding}
                        onChange={setHideGradeVerseBranding}
                        onLabel="On"
                        offLabel="Off"
                      />
                    </div>
                  </div>

                  <div className="sr-form-actions">
                    <Button variant="primary" size="regular">Save branding</Button>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "partner-affiliate" && (
              <section className="sr-section" aria-labelledby="partner-heading">
                <header className="sr-section-header">
                  <h2 id="partner-heading" className="sr-section-title">Partner / Affiliate</h2>
                  <p className="sr-section-subtitle">Configure partner and affiliate settings</p>
                </header>

                <div className="sr-form-grid">
                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Partner / Affiliate Logo</h3>
                    <div className="sr-logo-upload">
                      <div className="sr-logo-preview">
                        <div className="sr-logo-placeholder">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                            <rect width="48" height="48" rx="8" fill="var(--color-surface-selected)" />
                            <path d="M12 24L18 30L36 12" stroke="var(--color-brand-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="sr-logo-hint">Click or drag an image to upload your partner / affiliate logo.</p>
                        <p className="sr-logo-hint sr-logo-hint--detail">JPG, JPEG, PNG and WEBP. Max 2MB</p>
                      </div>
                      <Button variant="primary" size="compact">Upload</Button>
                    </div>
                  </div>

                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Affiliate Name</h3>
                    <TextField
                      label="Affiliate Name"
                      value={affiliateName}
                      onChange={(e) => setAffiliateName(e.target.value)}
                      placeholder="Enter affiliate name"
                    />
                  </div>

                  <div className="sr-form-actions">
                    <Button variant="primary" size="regular">Save changes</Button>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "password" && (
              <section className="sr-section" aria-labelledby="password-heading">
                <header className="sr-section-header">
                  <h2 id="password-heading" className="sr-section-title">Password</h2>
                  <p className="sr-section-subtitle">Change your account password</p>
                </header>

                <div className="sr-form-grid">
                  <div className="sr-form-section sr-form-section--full">
                    <h3 className="sr-form-section-title">Change Password</h3>
                    <div className="sr-form-row">
                      <TextField
                        label="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div className="sr-form-row">
                      <TextField
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                      />
                      <TextField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="sr-form-actions">
                    <Button variant="primary" size="regular">Change password</Button>
                  </div>
                </div>
              </section>
            )}

            {["academic-info", "level", "payment", "results", "tertiary", "campus", "mode"].includes(activeTab) && (
              <section className="sr-section" aria-labelledby={`${activeTab}-heading`}>
                <header className="sr-section-header">
                  <h2 id={`${activeTab}-heading`} className="sr-section-title">
                    {tabs.find(t => t.id === activeTab)?.label || "Settings"}
                  </h2>
                  <p className="sr-section-subtitle">This section is under construction</p>
                </header>
                <div className="sr-coming-soon">
                  <p>{tabs.find(t => t.id === activeTab)?.label} settings coming soon</p>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

const attendanceOptions = [
  { value: "Daily", label: "Daily" },
  { value: "Per lecture", label: "Per lecture" },
  { value: "Per session", label: "Per session" },
];

export default Settings;