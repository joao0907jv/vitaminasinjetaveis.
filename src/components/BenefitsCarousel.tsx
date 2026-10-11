import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SECOND_CAROUSEL_ITEMS, CarouselItem } from '../data/landingData';

export function BenefitsCarousel() {
  const [selectedPoster, setSelectedPoster] = useState<CarouselItem | null>(null);

  const marqueeItems = [
    ...SECOND_CAROUSEL_ITEMS,
    ...SECOND_CAROUSEL_ITEMS,
    ...SECOND_CAROUSEL_ITEMS,
  ];

  return (
    <section className="benefits-carousel section-pad" aria-label="Materiais incluídos no kit">
      <div className="shell">
        <SectionHeading>Conheça alguns materiais do Kit</SectionHeading>
      </div>

      {/* Segundo Carrossel em Contínuo Movimento */}
      <div className="marquee-outer-wrapper mt-6">
        <div className="marquee-track marquee-track-reverse">
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
