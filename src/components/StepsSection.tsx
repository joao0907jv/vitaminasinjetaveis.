export function StepsSection() {
  return (
    <section className="steps-vertical-section">
      <div className="steps-vertical-shell">
        {/* Título Principal */}
        <h2 className="steps-main-title">
          COMO É O
          <br />
          ACESSO
        </h2>
        <p className="steps-subtitle">(PASSO A PASSO)</p>

        {/* Lista Vertical de Passos */}
        <div className="steps-vertical-list">
          {/* Passo 1 */}
          <article className="step-vertical-item">
            <span className="step-emoji-icon" role="img" aria-label="Carrinho de compras">
              🛒
            </span>
            <h3 className="step-title">Conclua sua compra</h3>
            <p className="step-description">
              Após o pagamento, seu acesso é liberado{' '}
              <strong>automaticamente</strong>.
            </p>
          </article>

          {/* Passo 2 */}
          <article className="step-vertical-item">
            <span className="step-emoji-icon" role="img" aria-label="Ingresso de acesso">
              🎟️
            </span>
            <h3 className="step-title">Entre na área de membros</h3>
            <p className="step-description">
              Você recebe os dados para acessar a <strong>área de membros</strong>, onde todo o
              material fica organizado.
            </p>
          </article>

          {/* Passo 3 */}
          <article className="step-vertical-item">
            <span className="step-emoji-icon" role="img" aria-label="Pasta de arquivos">
              📁
            </span>
            <h3 className="step-title">Baixe os arquivos</h3>
            <p className="step-description">
              Dentro do material, você encontra as vitaminas, o guia visual e os bônus organizados por
              categoria, <strong>tudo pronto para aplicar</strong>.
            </p>
          </article>

          {/* Passo 4 */}
          <article className="step-vertical-item">
            <span className="step-emoji-icon" role="img" aria-label="Celular e tablet">
              📱
            </span>
            <h3 className="step-title">Use pelo Celular/Tablet ou Imprima</h3>
            <p className="step-description">
              Consulte pelo celular, tablet ou computador — ou imprima as páginas para levar aos
              estudos e consultas sempre que precisar.
            </p>
          </article>
        </div>

        {/* Botão Verde em Destaque */}
        <div className="steps-cta-wrapper">
          <a className="steps-green-btn" href="#oferta">
            QUERO MEU ACESSO AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
