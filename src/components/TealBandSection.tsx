import { Check } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { TEAL_BAND_BENEFITS } from '../data/landingData';

export function TealBandSection() {
  return (
    <section className="teal-band section-pad">
      <div className="shell split-benefits">
        <div>
          <p className="kicker light">MAIS PRATICIDADE PARA ESTUDAR</p>
          <h2>Tenha +150 materiais sobre vitaminas injetáveis em um só lugar</h2>
        </div>
        <ul>
          {TEAL_BAND_BENEFITS.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
        <CtaButton>QUERO ACESSAR AGORA</CtaButton>
      </div>
    </section>
  );
}
