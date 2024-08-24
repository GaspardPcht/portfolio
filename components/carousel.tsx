"use client"; 

import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "./cards"; 

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

interface CarouselProps {
  cards: string[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const controls = useAnimation();
  const [direction, setDirection] = React.useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    const startX = event.clientX;
    const scrollLeft = carouselRef.current?.scrollLeft || 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (carouselRef.current) {
        const x = event.clientX - startX;
        carouselRef.current.scrollLeft = scrollLeft - x;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="relative overflow-x-auto w-4/5 mt-[100px] mb-[100px]"
      onMouseDown={handleMouseDown}
      ref={carouselRef}
    >
      <motion.div
        className="flex space-x-4"
        animate={controls}
        initial="center"
        variants={carouselVariants}
        custom={direction}
      >
        {cards.map((cardSrc, index) => (
          <Card key={index} logoSrc={cardSrc} />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
