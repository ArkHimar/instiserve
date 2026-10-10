import React from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./LandingPage";
import "@instiserve/design-system/tokens.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);