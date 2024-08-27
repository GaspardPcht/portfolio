"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface AnimatedButtonProps {
  text: string;
  href?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, href }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  useEffect(() => {
    const button = btnRef.current;
    const span = spanRef.current;

    if (!button || !span) return;

    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!span) return;

      const { width, left } = button.getBoundingClientRect();
      const offsetX = e.clientX - left;
      const percentage = (offsetX / width) * 100;

      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        span.style.transition = "left 0.25s ease";
        span.style.left = `${percentage}%`;
      });
    };

    const handleMouseLeave = () => {
      if (!span) return;

      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        span.style.transition = "left 0.25s ease";
        span.style.left = "50%";
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(requestId);
    };
  }, []);

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white hover:bg-black"
      onClick={handleClick}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {text}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default AnimatedButton;
