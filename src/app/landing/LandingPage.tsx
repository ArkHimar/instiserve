import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { CoreFeatures } from "./components/CoreFeatures";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { ProjectTours } from "./components/ProjectTours";
import { FAQ } from "./components/FAQ";
import { WhyInstiserve } from "./components/WhyInstiserve";
import "@instiserve/design-system/tokens.css";
import "./LandingPage.css";

/**
 * InstiServe Landing Page
 * Built with design tokens from @instiserve/design-system
 * Sections marked with ⚠️ DESIGN REVIEW use placeholder content from Figma
 * that needs Product Designer review before production.
 */
export function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <CoreFeatures />
        <Testimonials />
        <Pricing />
        <ProjectTours />
        <FAQ />
        <WhyInstiserve />
      </main>
    </div>
  );
}

export default LandingPage;
