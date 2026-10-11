import { Zap, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { RECEIVE_ITEMS } from '../data/landingData';

export function ReceiveSection() {
  return (
    <section className="receive section-pad">
      <div className="shell receive-shell">
        <SectionHeading>Tudo o que você vai receber</SectionHeading>
        <span className="receive-badge">
          <Zap size={12} fill="currentColor" /> ACESSO IMEDIATO
        </span>

        <article className="receive-card">
          <h3>Tudo foi organizado para ser simples, visual e fácil de aplicar.</h3>
          <p>
            Após a compra, você recebe acesso ao <strong>Kit Vitaminas Injetáveis</strong>, com
            atividades organizadas para estudar e consultar sempre que precisar.
          </p>
          <img
            src="/assets/mockup-kit-novo.png"
            loading="lazy"
            width={1200}
            height={1200}
            alt="Conteúdo completo do Kit Vitaminas Injetáveis"
          />
          <ul>
            {RECEIVE_ITEMS.map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <h3 className="more-title">
          E não para por aí...
          <br />
          Tem mais!
        </h3>
      </div>
    </section>
  );
}
