import { TESTIMONIALS } from '../data/landingData';

export function TestimonialsSection() {
  return (
    <section className="section-pad shell testimonials-modern-section">
      <div className="section-heading text-center">
        <h2 className="testimonials-title">O QUE DIZEM OS PROFISSIONAIS</h2>
      </div>

      <div className="testimonials-modern-grid">
        {TESTIMONIALS.map((item) => (
          <article key={item.name} className="testimonial-modern-card">
            {/* Header: Foto redonda à esquerda + Nome e Profissão à direita */}
            <div className="testimonial-profile-row">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-profile-avatar"
                loading="lazy"
              />
              <div className="testimonial-profile-meta">
                <h3 className="testimonial-profile-name">{item.name}</h3>
                <span className="testimonial-profile-role">{item.role}</span>
              </div>
            </div>

            {/* 5 Estrelas */}
            <div className="testimonial-rating-stars" aria-label="5 estrelas">
              ★★★★★
            </div>

            {/* Depoimento em itálico entre aspas */}
            <p className="testimonial-quote-text">
              "{item.quote}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
