import "./Testimonials.css";

/**
 * Testimonials Section — InstiServe Landing Page
 * Corrected content from Figma (removed duplicate placeholder content)
 */
export function Testimonials() {
  const testimonials = [
    {
      quote: "The guidance and support I received gave me a new perspective and practical tools to move forward with greater confidence.",
      author: "Mr. Adebayo Lazeez",
      role: "Principal, Greenfield Secondary School",
    },
    {
      quote: "Her thoughtful approach and professional insight helped us better understand the challenges we were facing and identify clear solutions.",
      author: "Mrs. Funke Adeyemi",
      role: "Director, St. Mary's Academy",
    },
    {
      quote: "The expertise and practical recommendations brought real value to our work. The consultation was insightful, relevant, and actionable.",
      author: "Dr. Chinedu Okonkwo",
      role: "Proprietor, Lagos International College",
    },
    {
      quote: "Working together was a truly collaborative experience. The ability to listen, understand different perspectives, and create alignment was remarkable.",
      author: "Mr. Tunde Bakare",
      role: "Administrator, Apex College",
    },
    {
      quote: "The session was engaging, informative, and immediately practical. Our team left with valuable insights that we could apply right away.",
      author: "Ms. Ngozi Eze",
      role: "Head of Academics, Crown Heights School",
    },
    {
      quote: "From the initial consultation to the final recommendations, the process was professional, thoughtful, and focused on delivering real outcomes.",
      author: "Mr. Ibrahim Musa",
      role: "Director, Bright Future Academy",
    },
  ];

  return (
    <section className="testimonials landing-section" aria-labelledby="testimonials-heading">
      <div className="landing-container">
        <header className="testimonials__header landing-text-center">
          <h2 id="testimonials-heading" className="landing-heading landing-heading--section-title testimonials__label">
            Trusted by Schools Across Nigeria
          </h2>
          <h3 className="testimonials__headline landing-heading landing-heading--large">
            What School Leaders Say About InstiServe
          </h3>
        </header>

        <div className="testimonials__carousel" role="region" aria-label="Testimonials">
          <div className="testimonials__track">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonials__card">
                <blockquote className="testimonials__quote">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <footer className="testimonials__author">
                  <div className="testimonials__avatar" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="24" fill="var(--color-surface-selected)" />
                      <circle cx="24" cy="18" r="8" fill="var(--color-brand-primary)" />
                      <ellipse cx="24" cy="42" rx="14" ry="8" fill="var(--color-brand-primary)" />
                    </svg>
                  </div>
                  <div className="testimonials__author-info">
                    <cite className="testimonials__author-name">{testimonial.author}</cite>
                    <p className="testimonials__author-role">{testimonial.role}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          <div className="testimonials__controls" aria-label="Carousel controls">
            <button className="testimonials__btn testimonials__btn--prev" aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="testimonials__dots" aria-label="Testimonial indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === 0 ? "testimonials__dot--active" : ""}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === 0 ? "true" : "false"}
                />
              ))}
            </div>
            <button className="testimonials__btn testimonials__btn--next" aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}