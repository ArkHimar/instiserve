import { createRoot } from "react-dom/client";
import { LandingPage } from "./app/landing/LandingPage";
import "@instiserve/design-system/tokens.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);