import { SectionHeading } from './SectionHeading';
import { CtaButton } from './CtaButton';
import { FEATURES } from '../data/landingData';

export function FeatureSection() {
  return (
    <section className="section-pad shell feature-section">
      <SectionHeading>O Kit de Vitaminas Injetáveis possui:</SectionHeading>
      <div className="feature-grid">
        {FEATURES.map((item) => (
          <article key={item.title}>
            <span className="feature-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="feature-note">Materiais organizados para estudar, revisar e consultar.</p>
      <CtaButton>QUERO O KIT DE VITAMINAS INJETÁVEIS</CtaButton>
    </section>
  );
}
