"use client";
import React, { useEffect, useRef } from "react";

interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  const spanRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const spans = spanRefs.current;

    if (!spans.length) return;

    spans.forEach((span, index) => {
      const handleMouseEnter = () => {
        span.style.fontWeight = "900";
        span.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = spans[index - 1];
        const rightNeighbor = spans[index + 1];

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      };

      const handleMouseLeave = () => {
        span.style.fontWeight = "100";
        span.style.color = "rgb(165, 180, 252)";

        const leftNeighbor = spans[index - 1];
        const rightNeighbor = spans[index + 1];

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(165, 180, 252)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(165, 180, 252)";
        }
      };

      span.addEventListener("mouseenter", handleMouseEnter);
      span.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        span.removeEventListener("mouseenter", handleMouseEnter);
        span.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          ref={(el) => {
            if (el) spanRefs.current[idx] = el;
          }}
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
