import { ShieldCheck } from 'lucide-react';

export function FooterSection() {
  return (
    <footer>
      <div className="shell">
        <ShieldCheck />
        <p>
          <strong>Material educacional e de apoio para estudantes, interessados e profissionais da saúde.</strong>{' '}
          Os conteúdos possuem finalidade informativa e não substituem formação profissional, avaliação,
          diagnóstico, prescrição, protocolos clínicos ou orientação de profissional habilitado.
        </p>
        <small>© 2026. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
