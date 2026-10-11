import { Clock3, Sparkles, Check, Gift } from 'lucide-react';
import { PRICING, BONUSES } from '../data/landingData';
import { PaymentIcons } from './PaymentIcons';

export function PricingSection() {
  return (
    <section className="pricing section-pad" id="oferta">
      <div className="shell">
        <div className="pricing-heading">
          <h2>
            <Clock3 aria-hidden="true" /> ÚLTIMA CHANCE — CONDIÇÃO ESPECIAL POR TEMPO LIMITADO
          </h2>
          <p>Escolha a melhor opção para você:</p>
        </div>

        <div className="price-grid">
          {/* Plano Básico */}
          <article className="price-card">
            <p className="plan-tag">{PRICING.basic.tag}</p>
            <small className="plan-subtitle">{PRICING.basic.subtitle}</small>
            <p className="plan-description">{PRICING.basic.description}</p>
            <ul>
              {PRICING.basic.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <span>POR APENAS:</span>
            <strong className="price">{PRICING.basic.price}</strong>
            <a className="buy secondary-buy" href={PRICING.basic.checkoutUrl}>
              QUERO ACESSAR AGORA
            </a>
          </article>

          {/* Plano Completo (Featured - Formato Especificado) */}
          <article className="price-card featured featured-card-detailed">
            {/* Tag Mais Escolhido no topo */}
            <div className="popular">
              <Sparkles size={13} /> MAIS ESCOLHIDO
            </div>

            {/* Aviso de Tempo Limitado com relógio */}
            <div className="limited-offer-badge">
              <Clock3 size={13} />
              <span>OFERTA POR TEMPO LIMITADO</span>
            </div>

            {/* Nome do Plano */}
            <h3 className="plan-tag">{PRICING.complete.tag}</h3>
            <p className="plan-subtitle-strong">{PRICING.complete.subtitle}</p>
            <p className="plan-description">{PRICING.complete.description}</p>

            {/* Imagem do Kit Completo com Bônus */}
            <img
              src={PRICING.complete.image}
              width={1200}
              height={1200}
              alt="Kit Vitaminas Injetáveis Completo com quatro bônus"
              className="featured-bundle-image"
            />

            {/* Lista Principal de Conteúdos */}
            <ul className="featured-features-list">
              <li>
                <Check />
                <span>+150 materiais sobre vitaminas injetáveis</span>
              </li>
              <li>
                <Check />
                <span>Conteúdos para estudo e revisão</span>
              </li>
              <li>
                <Check />
                <span>Guias e materiais visuais</span>
              </li>
              <li>
                <Check />
                <span>Cuidados e segurança</span>
              </li>
              <li>
                <Check />
                <span>Acesso imediato em PDF / Digital</span>
              </li>
            </ul>

            {/* Lista Especificando os Bônus com Preços */}
            <div className="bonus-items-breakdown">
              {BONUSES.map((bonus) => (
                <div key={bonus.id} className="bonus-item-row">
                  <div className="bonus-item-left">
                    <Gift size={15} className="bonus-item-icon" />
                    <span className="bonus-item-title">{bonus.title}</span>
                  </div>
                  <span className="bonus-item-val">{bonus.originalPrice}</span>
                </div>
              ))}
            </div>

            {/* Bloco de Preço */}
            <div className="price-block-container">
              <span className="old-price-line">De R$ 84,50</span>
              <span className="price-label">POR APENAS:</span>
              <strong className="price price-highlight">{PRICING.complete.price}</strong>
              <small className="installments">ou em até 3x de R$ 10,65 no cartão</small>
            </div>

            {/* Botão de Compra */}
            <a className="buy buy-highlight" href={PRICING.complete.checkoutUrl}>
              QUERO ACESSAR AGORA
            </a>

            {/* Ícones de Formas de Pagamento (Payt, Pix, Visa, Mastercard) */}
            <PaymentIcons />
          </article>
        </div>
      </div>
    </section>
  );
}
