import { useState } from "react";
import "./HomepageDesign.css";

const automationFeatures = [
  {
    type: "admissions",
    title: "Admissions",
    description: "Move applicants from enquiry to enrolment with clear workflows, document checks, and real-time status updates.",
  },
  {
    type: "payments",
    title: "Swift school fees payment",
    description: "Give families flexible ways to pay while your finance team gets instant receipts and simpler reconciliation.",
  },
  {
    type: "results",
    title: "Result computation",
    description: "Compute grades accurately, publish results faster, and give every learner a clear view of their progress.",
  },
];

const modules = [
  { title: "Academic & learning", items: ["Courses & curriculum", "Timetables", "Results & grading", "Attendance"] },
  { title: "Admissions", items: ["Online applications", "Application tracking", "Document management", "Enrolment"] },
  { title: "Finance", items: ["School fees", "Payments & receipts", "Expenses tracking", "Payroll"] },
  { title: "Administration", items: ["Staff management", "Student records", "Reports & analytics", "Role-based access"] },
];

const roles = ["Admins", "Teachers", "Students", "Parents"];

const reasons: Array<readonly [string, string]> = [
  ["All-in-one platform", "Admissions, academics, finance, and operations work together in one connected platform."],
  ["Quick implementation", "Get up and running in days, with guided onboarding and practical support."],
  ["Secure & private", "Your school’s data stays protected with access controls and clear audit trails."],
  ["Dedicated support", "We stay with your team from setup to everyday use and continuous improvement."],
  ["Easy to use", "A clean, familiar experience built for school teams, families, and learners."],
  ["Data-driven decisions", "Turn live school data into useful reports and confident next steps."],
];

const testimonials = [
  "InstiServe gave our team a clearer way to manage daily school operations and spend more time supporting learners.",
  "The platform brought admissions, academics, and finance together. We now work from the same reliable information.",
  "Our staff adapted quickly because the experience feels simple, focused, and built around how schools actually work.",
  "Parents receive information faster, while our team has far fewer spreadsheets and repeated manual tasks.",
  "Results processing is more accurate and considerably faster. That improvement has been felt across the school.",
  "From onboarding to ongoing support, the InstiServe team has been responsive, practical, and committed to our success.",
];

const faqs = [
  ["What types of institutions can use InstiServe?", "InstiServe supports primary schools, secondary schools, colleges, training organisations, and multi-campus institutions. Each workspace can be configured around the institution’s own structure and processes."],
  ["How long does implementation take?", "Most institutions can begin using their core modules within two to four weeks. The timeline depends on data migration, integrations, and the number of teams being onboarded."],
  ["Can we start with only the modules we need?", "Yes. You can begin with the workflows that matter most today and add more modules as your institution grows."],
  ["Can InstiServe work with our existing systems?", "Yes. InstiServe supports integrations for payments, messaging, identity, reporting, and other institutional tools. Custom integrations are available where required."],
  ["How is our institution’s data protected?", "InstiServe uses secure access controls, encrypted connections, backups, and audit trails to protect institutional data and help teams manage access responsibly."],
  ["What support is available after launch?", "Every institution receives onboarding guidance and ongoing support. Advanced plans include priority support and a dedicated success contact."],
];

const plans = [
  { name: "Starter", price: "₦3,000", features: ["Courses & curriculum", "Timetables", "Results & grading", "Attendance"] },
  { name: "Standard", price: "₦4,500", features: ["Everything in Starter", "Admissions management", "Payments & receipts", "Parent portal"] },
  { name: "Premium", price: "₦7,500", featured: true, features: ["Everything in Standard", "Advanced reports", "Payroll & HR", "Priority support"] },
  { name: "Enterprise", price: "Custom pricing", features: ["Everything in Premium", "Multiple campuses", "Custom integrations", "Dedicated success manager"] },
];

function SectionTag({ children }: { children: string }) {
  return <span className="home-tag"><span aria-hidden="true">⊞</span>{children}</span>;
}

function ProductCanvas({ className = "" }: { className?: string }) {
  return (
    <div className={`product-canvas ${className}`} aria-label="InstiServe product preview">
      <div className="product-canvas__topbar">
        <span /><span /><span />
        <div className="product-canvas__address">app.instiserve.org</div>
      </div>
      <div className="product-canvas__body">
        <aside className="product-canvas__rail">
          <div className="product-canvas__mark">I</div>
          {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
        </aside>
        <div className="product-canvas__workspace">
          <div className="product-canvas__heading"><span /><span /></div>
          <div className="product-canvas__stats">
            {Array.from({ length: 4 }).map((_, index) => <div key={index}><i /><b /></div>)}
          </div>
          <div className="product-canvas__panels"><div /><div /></div>
        </div>
      </div>
    </div>
  );
}

export function HomepageDesign() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState("Admins");
  const [openFaq, setOpenFaq] = useState(0);
  const [billing, setBilling] = useState("Session");

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home-page">
      <header className="home-nav">
        <div className="home-shell home-nav__inner">
          <a className="home-nav__logo" href="#top" aria-label="InstiServe home">
            <img src="/InstiServe-logo.png" alt="InstiServe" />
          </a>
          <nav className={`home-nav__links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          </nav>
          <button className="home-button home-button--nav" onClick={() => scrollTo("demo")}>Book a demo</button>
          <button className="home-nav__toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="home-hero" id="top" aria-labelledby="home-title">
          <div className="home-grid-pattern" aria-hidden="true" />
          <div className="home-shell home-hero__inner">
            <SectionTag>THE OPERATING PLATFORM FOR MODERN SCHOOLS</SectionTag>
            <h1 id="home-title">Run Your Entire School<br />From <span>One <i aria-hidden="true" className="laptop-icon" /> Platform</span></h1>
            <p>Manage admissions, academics, results, fees, communication and<br className="desktop-break" /> student services from one connected platform.</p>
            <div className="home-actions">
              <button className="home-button home-button--light" onClick={() => scrollTo("how-it-works")}>See how it works</button>
              <button className="home-button home-button--blue" onClick={() => scrollTo("demo")}>Book a demo</button>
            </div>
            <div className="home-hero__trust"><span />Trusted by 5,000+ modern schools<span /></div>
            <ProductCanvas className="home-hero__canvas" />
          </div>
        </section>

        <section className="home-section automation" id="features" aria-labelledby="automation-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>FEATURES</SectionTag>
              <h2 id="automation-title">How We Bring Automation to Life</h2>
            </header>
            <div className="automation__grid">
              {automationFeatures.map((feature) => (
                <article className="automation-card" key={feature.title}>
                  <div className={`automation-card__art automation-card__art--${feature.type}`} aria-hidden="true">
                    {feature.type === "admissions" && <><div className="admission-stack"><i /><i /><i /><i /></div><div className="admission-note"><b>✓</b><span>Admission has been granted<small>Jun 02, 2026</small></span></div></>}
                    {feature.type === "payments" && <><div className="payment-wave">InstiServe</div>{["Paul Jolade", "Nasiru James", "Adelani Sikemi", "Emmanuel Ojo"].map(name => <div className="payment-pill" key={name}><b>✓</b><span>{name}<small>Payment successful</small></span></div>)}</>}
                    {feature.type === "results" && <div className="result-bars">{[48,88,76,68,82,54].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section modules" id="solutions" aria-labelledby="modules-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>CORE FEATURES</SectionTag>
              <h2 id="modules-title">Everything Your School<br />Needs In One Platform</h2>
            </header>
            <div className="modules__grid">
              {modules.map((module) => (
                <article className="module-card" key={module.title}>
                  <span className="module-card__icon" aria-hidden="true">▣</span>
                  <h3>{module.title}</h3>
                  <ul>{module.items.map(item => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section tour" id="how-it-works" aria-labelledby="tour-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>PRODUCT TOURS</SectionTag>
              <h2 id="tour-title">See InstiServe in Action</h2>
            </header>
            <div className="tour__tabs" role="tablist" aria-label="Product tour roles">
              {roles.map(role => <button key={role} role="tab" aria-selected={activeRole === role} className={activeRole === role ? "is-active" : ""} onClick={() => setActiveRole(role)}>{role}</button>)}
            </div>
            <div className="tour__canvas-wrap">
              <ProductCanvas className="tour__canvas" />
              <div className="tour__caption"><strong>{activeRole}</strong><span>Explore a focused workspace built around the tasks that matter to {activeRole.toLowerCase()}.</span></div>
            </div>
          </div>
        </section>

        <section className="home-section reasons" aria-labelledby="reasons-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>WHY INSTISERVE</SectionTag>
              <h2 id="reasons-title">Why Schools Choose InstiServe</h2>
            </header>
            <div className="reasons__grid">
              {reasons.map(([title, description]) => <article key={title + description}><span aria-hidden="true">⌂</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="home-section quotes" id="resources" aria-labelledby="quotes-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>TESTIMONIALS</SectionTag>
              <h2 id="quotes-title">Trusted by Schools Across Nigeria</h2>
            </header>
            <div className="quotes__grid">
              {testimonials.map((quote, index) => <figure key={quote}><blockquote><span aria-hidden="true">❝</span><p>{quote}</p></blockquote><figcaption><strong>{["Mrs Amina Bello", "Mr Adewale James", "Mrs Nneka Okafor", "Mr Tunde Bakare", "Ms Ngozi Eze", "Mr Ibrahim Musa"][index]}</strong><span>School leader, Nigeria</span></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className="home-section faq" aria-labelledby="faq-title">
          <div className="home-shell faq__shell">
            <header className="home-section__heading">
              <SectionTag>FAQ</SectionTag>
              <h2 id="faq-title">Frequently Asked Questions</h2>
            </header>
            <div className="faq__list">
              {faqs.map(([question, answer], index) => (
                <article className="faq-row" key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index} aria-controls={`answer-${index}`}><span>{question}</span><b aria-hidden="true">{openFaq === index ? "−" : "+"}</b></button>
                  <div id={`answer-${index}`} hidden={openFaq !== index}><p>{answer}</p></div>
                </article>
              ))}
            </div>
            <aside className="faq__cta"><div><h3>Still have questions?</h3><p>Tell us what your institution needs, and we’ll show you how InstiServe can help.</p></div><a className="home-button home-button--light" href="mailto:support@instiserve.org">Chat with our support</a></aside>
          </div>
        </section>

        <section className="home-section pricing" id="pricing" aria-labelledby="pricing-title">
          <div className="home-shell">
            <header className="home-section__heading">
              <SectionTag>PRICING</SectionTag>
              <h2 id="pricing-title">Choose The Plan That’s Right For You</h2>
              <div className="pricing__toggle" role="group" aria-label="Billing period">
                {["Session", "Semester"].map(option => <button className={billing === option ? "is-active" : ""} key={option} onClick={() => setBilling(option)}>{option}</button>)}
              </div>
            </header>
            <div className="pricing__grid">
              {plans.map(plan => <article className={`price-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>{plan.featured && <div className="price-card__recommended">✦ Most Recommended</div>}<div className="price-card__body"><span className="price-card__name">{plan.name}</span><h3>{plan.price}{plan.price !== "Custom pricing" && <small>/ student</small>}</h3><button className={`home-button ${plan.featured ? "home-button--blue" : "home-button--dark"}`} onClick={() => scrollTo("demo")}>Book a demo</button><ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div></article>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer" id="demo">
        <div className="home-shell">
          <section className="home-footer__cta" aria-labelledby="demo-title">
            <div><h2 id="demo-title">Ready to Run Your<br />School From One Place</h2><p>See how one connected platform can simplify daily work, improve visibility, and support every learner.</p><a className="home-button home-button--light" href="mailto:hello@instiserve.org?subject=InstiServe%20demo">Book a demo</a></div>
            <ProductCanvas className="home-footer__canvas" />
          </section>
          <div className="home-footer__grid">
            <div className="home-footer__brand"><img src="/InstiServe-logo.png" alt="InstiServe" /><p>One secure platform for admissions, academics, finance, and school operations—helping your team work smarter and support every learner.</p></div>
            <nav aria-label="Quick links"><h3>Quick Links</h3><a href="#top">Home</a><a href="#features">Features</a><a href="#how-it-works">Product tour</a><a href="#pricing">Pricing</a></nav>
            <nav aria-label="Platform links"><h3>Platform</h3><a href="#solutions">Admissions & enrolment</a><a href="#solutions">Academics & results</a><a href="#solutions">Billing & payments</a><a href="#solutions">Operations</a></nav>
            <div className="home-footer__contact"><h3>Get In Touch</h3><a href="mailto:hello@instiserve.org">hello@instiserve.org</a><a href="https://instiserve.org/login">Sign in to your portal</a><a href="https://instiserve.org">Explore InstiServe</a></div>
          </div>
          <div className="home-footer__bottom"><p>© 2026 InstiServe. All rights reserved.</p><nav aria-label="Legal links"><a href="https://instiserve.org/privacy">Privacy</a><a href="https://instiserve.org/help">Help centre</a><a href="https://instiserve.org/licences">Licences</a></nav></div>
        </div>
      </footer>
    </div>
  );
}

export default HomepageDesign;
