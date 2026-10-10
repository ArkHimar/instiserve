import "./Footer.css";

/**
 * Footer Component — InstiServe Landing Page
 * Updated with recommended InstiServe footer content
 */
export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="landing-container">
        <div className="footer__main">
          <div className="footer__brand">
            <img 
              src="/InstiServe-logo.png" 
              alt="InstiServe" 
              className="footer__logo-img"
              width="182"
              height="48"
            />
            <p className="footer__mission">
              Empowering educational institutions with the technology, tools, and insights to manage education, support learners, and create opportunities for growth.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">About InstiServe</h4>
              <ul>
                <li><a href="#about">About InstiServe</a></li>
                <li><a href="#institutions">Explore Institutions</a></li>
                <li><a href="#for-institutions">For Institutions</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Our Solutions</h4>
              <ul>
                <li><a href="#discovery">Institution Discovery</a></li>
                <li><a href="#school-management">School Management</a></li>
                <li><a href="#lms">Learning Management System (LMS)</a></li>
                <li><a href="#eclass">E-Class & Virtual Learning</a></li>
                <li><a href="#cbt">CBT & Online Assessments</a></li>
                <li><a href="#records">Student & Academic Records</a></li>
              </ul>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Explore InstiServe</h4>
              <ul>
                <li><a href="#institutions">Find an Institution</a></li>
                <li><a href="#manage">Manage Your Institution</a></li>
                <li><a href="#teach">Teach & Learn Online</a></li>
                <li><a href="#applications">Student Applications</a></li>
                <li><a href="#demo">Book a Demo</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__tagline">
          <p>Discover Institutions. Manage Education. Create Opportunities.</p>
        </div>

        <div className="footer__copyright">
          <p>© 2026 InstiServe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}