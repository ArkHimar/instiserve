import React, { useState } from "react";
import { Button, Badge } from "@instiserve/design-system";
import "./Dashboard.css";

interface StatCard {
  label: string;
  value: string;
  icon: string;
}

interface Activity {
  icon: string;
  title: string;
  meta: string;
  time: string;
}

export function Dashboard() {
  const stats: StatCard[] = [
    { label: "Total Students", value: "12,037", icon: "Users" },
    { label: "Programmes", value: "23", icon: "Book" },
    { label: "Graduates", value: "2", icon: "GraduationCap" },
    { label: "Staff Members", value: "34", icon: "UserCircle" },
  ];

  const activities: Activity[] = [
    { icon: "BookmarkSimple", title: "Score entry inline", meta: "Course enrollment by Emmanuel", time: "2 min ago" },
    { icon: "BookmarkSimple", title: "Learning infrastructure update", meta: "Exist record preceeds", time: "15 min ago" },
    { icon: "BookmarkSimple", title: "Course registration added", meta: "First semester course added", time: "1 hour ago" },
    { icon: "BookmarkSimple", title: "Bible Quiz scheduled", meta: "Rescheduled bible quiz", time: "3 hours ago" },
    { icon: "BookmarkSimple", title: "Bible Quiz scheduled", meta: "Rescheduled bible quiz", time: "5 hours ago" },
  ];

  return (
    <div className="dashboard-screen">
      <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
        <div className="dashboard-brand">
          <svg width="182" height="48" viewBox="0 0 182 48" fill="none">
            <rect width="182" height="48" rx="10" fill="#0088FF" />
            <path d="M24 24L36 36L60 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="72" y="32" fill="white" fontSize="18" fontWeight="600" fontFamily="Outfit, sans-serif">InstiServe</text>
          </svg>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening at your institution.</p>
        </header>

        <section className="dashboard-stats" aria-label="Statistics">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="dashboard-activities" aria-label="Recent activities">
          <h2>Recent Activities</h2>
          <ul className="activities-list">
            {activities.map((activity, index) => (
              <li key={index} className="activity-item">
                <div className="activity-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="activity-content">
                  <span className="activity-title">{activity.title}</span>
                  <span className="activity-meta">{activity.meta}</span>
                </div>
                <time className="activity-time">{activity.time}</time>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;