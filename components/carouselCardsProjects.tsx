"use client";

import React, { useRef, useEffect } from "react";
import CardsLanguages from "./cardsLanguages";

const Carousel: React.FC<{ cards: string[] }> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 1; // Distance parcourue à chaque mouvement
  const scrollSpeed = 10; // Temps entre chaque mouvement en millisecondes

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Calculer la largeur totale pour le défilement infini
    const { clientWidth, scrollWidth } = carousel;
    const totalScrollWidth = scrollWidth / 2; // Largeur totale visible + dupliquée

    const startScrolling = () => {
      let scrollInterval: NodeJS.Timeout;

      scrollInterval = setInterval(() => {
        if (carousel) {
          const { scrollLeft } = carousel;

          // Défilement
          carousel.scrollBy({
            left: scrollAmount,
            behavior: "auto",
          });

          // Réinitialiser la position de défilement pour un défilement continu
          if (scrollLeft >= totalScrollWidth) {
            carousel.scrollTo({ left: 0, behavior: "auto" });
          }
        }
      }, scrollSpeed);

      return scrollInterval;
    };

    const interval = startScrolling();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cards.length]);

  return (
    <div className="relative overflow-hidden w-full h-[200px] mt-[100px] rounded-[20px]">
      <div
        className="flex"
        ref={carouselRef}
        style={{ display: "flex", whiteSpace: "nowrap", overflow: "hidden" }}
      >
        <div className="flex space-x-2">
          {[...cards, ...cards].map((cardSrc, index) => (
            <CardsLanguages key={index} logoSrc={cardSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
