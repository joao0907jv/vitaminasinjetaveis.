export function GuaranteeSection() {
  return (
    <section className="guarantee-centered-section section-pad">
      <div className="shell text-center">
        {/* Selo Dourado de Garantia Centralizado */}
        <div className="guarantee-seal-wrapper">
          <img
            src="/assets/selo-garantia-15-dias.svg"
            alt="Selo 15 Dias de Garantia de Satisfação"
            className="guarantee-gold-seal"
            width={160}
            height={168}
          />
        </div>

        {/* Título Centralizado */}
        <h2 className="guarantee-centered-title">
          Garantia de 15 Dias — Zero Risco Para Você
        </h2>

        {/* Textos Centralizados com Margem e Tipografia Alinhada */}
        <div className="guarantee-content-box">
          <p>
            Após a compra, você terá 15 dias completos para acessar o material, conhecer os conteúdos
            e explorar os bônus com calma.
          </p>
          <p>
            Veja como o Kit Vitaminas Injetáveis pode ajudar você a encontrar materiais de estudo e
            consulta de forma mais rápida, visual e organizada. Caso o material não faça sentido para
            a sua rotina, basta solicitar o reembolso dentro do prazo.
          </p>
          <strong className="guarantee-closing">
            Sem burocracia. Sem perguntas.
          </strong>
        </div>
      </div>
    </section>
  );
}
