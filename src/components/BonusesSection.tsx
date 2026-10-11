import { Gift } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { BONUSES } from '../data/landingData';

export function BonusesSection() {
  return (
    <section className="bonuses section-pad">
      <div className="shell text-center">
        <div className="section-heading">
          <h2>E não para por aí...</h2>
          <p className="bonuses-subtitle">
            Você ainda recebe 4 bônus exclusivos para ter ainda mais ideias em sua rotina
          </p>
        </div>

        <div className="flex justify-center">
          <span className="bonus-section-tag">
            <Gift aria-hidden="true" /> 4 BÔNUS EXCLUSIVOS
          </span>
        </div>

        <div className="bonus-grid text-left">
          {BONUSES.map((bonus) => (
            <article key={bonus.id}>
              <div className="bonus-stars" aria-label="5 estrelas">
                ★★★★★
              </div>
              <img
                src={bonus.image}
                loading="lazy"
                width={290}
                height={395}
                alt={`Capa do bônus ${bonus.id}: ${bonus.title}`}
              />
              <b className="bonus-number">
                <Gift aria-hidden="true" /> BÔNUS {bonus.id} — HOJE
              </b>
              <h3>{bonus.title}</h3>
              <p>{bonus.description}</p>
              <span>
                Valor: <s>{bonus.originalPrice}</s> <strong>HOJE GRÁTIS</strong>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
