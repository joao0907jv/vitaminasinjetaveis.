import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { FIRST_CAROUSEL_ITEMS, CarouselItem } from '../data/landingData';

export function ShowcaseSection() {
  const [selectedPoster, setSelectedPoster] = useState<CarouselItem | null>(null);

  // Duplicamos 3x para loop contínuo perfeitamente fluido sem lacunas
  const marqueeItems = [
    ...FIRST_CAROUSEL_ITEMS,
    ...FIRST_CAROUSEL_ITEMS,
    ...FIRST_CAROUSEL_ITEMS,
  ];

  return (
    <section className="showcase-custom-section section-pad" id="materiais">
      <div className="shell text-center">
        {/* Título com destaque em coral na palavra principal */}
        <h2 className="showcase-custom-title">
          Veja alguns dos <span className="highlight-coral">materiais</span> que você poderá usar
        </h2>

        {/* Subtítulo explicativo */}
        <p className="showcase-custom-subtitle">
          Não são apenas folhas soltas. São propostas visuais organizadas para facilitar a
          consulta e o estudo de acordo com o objetivo que você deseja trabalhar.
        </p>

        {/* Imagem do Mockup e Comparativo Antes x Depois com fundo transparente */}
        <div className="showcase-hero-image-wrapper">
          <img
            src="/assets/showcase-completo.svg"
            alt="Materiais organizados e comparativo Antes x Depois"
            className="showcase-hero-image"
            loading="lazy"
            width={1536}
            height={1024}
          />
        </div>
      </div>

      {/* Carrossel em Contínuo Movimento Infinito */}
      <div className="marquee-outer-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="marquee-card-item"
              onClick={() => setSelectedPoster(item)}
              title="Clique para ampliar"
            >
              <img
                src={item.image}
                alt={item.title}
                className="marquee-card-img"
                loading="lazy"
              />
              <div className="marquee-card-overlay">
                <span className="marquee-zoom-pill">
                  <ZoomIn size={16} /> Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox ao clicar na imagem */}
      {selectedPoster && (
        <div
          className="poster-modal-backdrop"
          onClick={() => setSelectedPoster(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="poster-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="poster-modal-close"
              onClick={() => setSelectedPoster(null)}
              aria-label="Fechar"
            >
              <X size={26} />
            </button>
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
              className="poster-modal-img"
            />
            <div className="poster-modal-footer">
              <h3>{selectedPoster.title}</h3>
              <p>{selectedPoster.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
