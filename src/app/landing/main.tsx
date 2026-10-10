import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { StudentRecords } from "../screens/StudentRecords";
import { Settings } from "../screens/Settings";
import "@instiserve/design-system/tokens.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-records" element={<StudentRecords />} />
        <Route path="/student-records/*" element={<StudentRecords />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);