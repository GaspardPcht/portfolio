"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./cards";

const Carousel: React.FC<{ cards: string[] }> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollSpeed = 0.5; // Vitesse du défilement 
    const scrollAmount = 0.5; // Distance parcourue 
    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        scrollInterval = setInterval(() => {
          carouselRef.current!.scrollBy({
            left: scrollAmount,
            behavior: "auto",
          });

          // Réinitialisez la position de défilement pour un défilement continu
          if (scrollLeft + clientWidth >= maxScrollLeft) {
            carouselRef.current!.scrollTo({ left: 0, behavior: "auto" });
          }
        }, scrollSpeed);
      }
    };

    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [cards.length]);

  return (
    <div className="relative overflow-hidden w-full h-[200px] mt-[100px]">
      <div
        className="flex"
        ref={carouselRef}
        style={{ display: "flex", whiteSpace: "nowrap", overflow: "hidden" }}
      >
        <motion.div className="flex space-x-4" style={{ display: "flex" }}>
          {[...cards, ...cards].map((cardSrc, index) => (
            <Card key={index} logoSrc={cardSrc} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
