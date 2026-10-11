import { Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { CtaButton } from './CtaButton';
import { IDEAL_ITEMS } from '../data/landingData';

export function IdealForSection() {
  return (
    <section className="section-pad shell ideal-section">
      <SectionHeading>Este material é ideal para você que deseja</SectionHeading>
      <div className="ideal-grid">
        {IDEAL_ITEMS.map((item) => (
          <article key={item.title}>
            <span className="ideal-check">
              <Check aria-hidden="true" />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <CtaButton>QUERO ACESSAR O KIT AGORA</CtaButton>
    </section>
  );
}
