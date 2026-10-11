import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-custom-section">
      <div className="faq-custom-shell">
        <h2 className="faq-custom-title">Perguntas Frequentes</h2>

        {/* Card Branco Central com Accordion */}
        <div className="faq-card-container">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="faq-item-row">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    {idx + 1}. {item.question}
                  </span>
                  <ChevronDown
                    className={`faq-chevron-icon ${isOpen ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botão de Ação Inferior */}
        <div className="faq-cta-wrapper">
          <a className="faq-cta-btn" href="#oferta">
            QUERO O PLANO COMPLETO AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
