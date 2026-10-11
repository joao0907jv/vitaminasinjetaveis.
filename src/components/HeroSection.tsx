import { LockKeyhole, Mail, Check } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { QUICK_BENEFITS } from '../data/landingData';

export function HeroSection() {
  return (
    <section className="hero shell">
      <div className="safe">
        <LockKeyhole size={15} /> COMPRA 100% SEGURA E PROTEGIDA
      </div>

      <p className="kicker">— KIT VITAMINAS INJETÁVEIS —</p>

      <h1>
        <em>+150 MATERIAIS DE</em>
        <br />
        VITAMINAS INJETÁVEIS
      </h1>

      <div className="coral-rule" />

      <h2>
        Tenha +150 materiais sobre Vitaminas Injetáveis reunidos em um único Kit para estudar,
        consultar e revisar quando precisar.
      </h2>

      <img
        className="hero-image"
        src="/assets/mockup-kit-novo.png"
        width={1200}
        height={1200}
        alt="Kit Vitaminas Injetáveis - Mockup oficial do material"
      />

      <p className="hero-copy">
        Chega de perder tempo! Em vez de procurar conteúdos soltos ou depender de dezenas de fontes
        diferentes, você recebe{' '}
        <strong>+150 materiais organizados e fáceis de consultar</strong> sobre vitaminas,
        apresentações, características, cuidados e segurança.
      </p>

      <div className="quick-benefits">
        {QUICK_BENEFITS.map((item) => (
          <span key={item}>
            <Check />
            {item}
          </span>
        ))}
      </div>

      <CtaButton>QUERO ACESSAR O MATERIAL AGORA</CtaButton>

      <small className="access-note">
        <Mail size={16} /> Acesso digital enviado após a confirmação do pagamento.
      </small>
    </section>
  );
}
