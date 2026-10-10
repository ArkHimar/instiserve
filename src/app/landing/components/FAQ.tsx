import { useState } from "react";
import { Button } from "@instiserve/design-system";
import "./FAQ.css";

/**
 * FAQ Section — InstiServe Landing Page
 * Corrected content from Figma (removed fish product placeholder content)
 */
export function FAQ() {
  const faqs = [
    {
      question: "What types of schools is InstiServe designed for?",
      answer: "InstiServe is built for modern K-12 schools — primary, secondary, and combined institutions. Whether you run a single campus or a multi-campus network, our platform scales with you.",
    },
    {
      question: "How long does implementation take?",
      answer: "Most schools are up and running within 2-4 weeks. Our dedicated onboarding team handles data migration, staff training, and configuration. Larger networks may take 6-8 weeks for full rollout.",
    },
    {
      question: "Can InstiServe integrate with our existing systems?",
      answer: "Yes. InstiServe offers REST APIs and pre-built integrations for popular payment gateways, SMS providers, biometric devices, and learning management systems. Custom integrations are available on Premium and Enterprise plans.",
    },
    {
      question: "Is our data secure and private?",
      answer: "Absolutely. InstiServe is built with security-first architecture: AES-256 encryption at rest, TLS 1.3 in transit, role-based access control, audit logs, and GDPR/NDPR compliance. Your school's data never leaves your institution without explicit consent.",
    },
    {
      question: "What support is included?",
      answer: "All plans include email support during business hours. Standard adds chat support. Premium and Enterprise include phone support, dedicated success managers, and SLA guarantees. 24/7 priority support is Enterprise-only.",
    },
    {
      question: "How does pricing work for multi-campus schools?",
      answer: "Multi-campus networks get volume discounts. Each campus is billed per student, with a network-level admin dashboard at no extra cost. Enterprise plans include custom pricing for large networks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq landing-section" aria-labelledby="faq-heading">
      <div className="landing-container">
        <header className="faq__header landing-text-center">
          <h2 id="faq-heading" className="landing-heading landing-heading--section-title faq__label">
            Frequently Asked Questions
          </h2>
          <h3 className="faq__headline landing-heading landing-heading--large">
            Everything You Need to Know About InstiServe
          </h3>
        </header>

        <div className="faq__list" role="list">
          {faqs.map((faq, index) => (
            <article key={index} className="faq__item">
              <button
                className={`faq__question ${openIndex === index ? "faq__question--open" : ""}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="faq__answer"
                hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="faq__cta landing-text-center">
          <p className="faq__cta-text">Still have questions?</p>
          <p className="faq__cta-subtext">
            We start by understanding your school, identifying bottlenecks, and mapping out opportunities for automation.
          </p>
          <Button variant="primary" size="regular" className="faq__cta-btn">
            Chat with our support
          </Button>
        </div>
      </div>
    </section>
  );
}