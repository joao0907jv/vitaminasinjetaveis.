import { LockKeyhole, Mail, Check } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { QUICK_BENEFITS, PRICING } from '../data/landingData';

export function HeroSection() {
  return (
    <section className="hero shell">
      <div className="safe">
        <LockKeyhole size={15} /> COMPRA 100% SEGURA E PROTEGIDA
      </div>

      <p className="kicker">— KIT VITAMINAS INJETÁVEIS —</p>

      <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', lineHeight: 1.15 }}>
        Entenda melhor as <em>vitaminas injetáveis</em> com +150 materiais visuais
      </h1>

      <div className="coral-rule" />

      <h2>
        Estude, revise e encontre informações em um só lugar, pelo celular ou computador.
      </h2>

      <img
        className="hero-image"
        src="/assets/mockup-kit-novo.png"
        width={1200}
        height={1200}
        alt="Kit Vitaminas Injetáveis - Mockup oficial do material"
      />

      <p className="hero-copy">
        Conheça conteúdos sobre <strong>B12, vitaminas A, C e D e complexo B</strong>,
        com apresentações, características, guias visuais e cuidados importantes.
        Um acervo educativo para complementar seus estudos e consultar quando surgir uma dúvida.
      </p>

      <div className="quick-benefits">
        {QUICK_BENEFITS.map((item) => (
          <span key={item}>
            <Check />
            {item}
          </span>
        ))}
      </div>

      <p className="hero-copy" style={{ marginBottom: 14 }}>
        <strong>A partir de {PRICING.basic.price}</strong><br />
        Material digital • Pagamento único
      </p>
      <CtaButton>QUERO ACESSAR O MATERIAL AGORA</CtaButton>

      <small className="access-note">
        <Mail size={16} /> Após a confirmação do pagamento, receba os dados de acesso para baixar os PDFs e consultar pelo celular, tablet ou computador.
      </small>
    </section>
  );
}
