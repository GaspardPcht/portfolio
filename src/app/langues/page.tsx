import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "../../../components/carouselCardsLanguages";
import Image from "next/image";

const cardSources = [
  "/assets/icons/react.png",
  "/assets/icons/JavaScript.png",
  "/assets/icons/type.png",
  "/assets/icons/native.png",
  "/assets/icons/next.png",
  "/assets/icons/node.png",
  "/assets/icons/html.png",
  "/assets/icons/css.png",
  "/assets/icons/express.png",
  "/assets/icons/Redux.png",
];

const Langues = forwardRef<HTMLDivElement, { scrollToAbout: () => void }>(
  ({ scrollToAbout }, ref) => {
    const { ref: headerRef, inView: headerInView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const { ref: textRef, inView: textInView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const { ref: carouselRef, inView: carouselInView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className="flex flex-col h-screen md:w-[90vw] box-border relative"
      >
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: headerInView ? 1 : 0,
            x: headerInView ? 0 : -100,
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-start text-[#3C3C3C] mt-[100px] ml-[10%]"
        >
          <h1 className="text-4xl font-bold">LANGUAGES</h1>
        </motion.div>

        <motion.div
          ref={textRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-[#CDCDCB] text-center flex-col flex items-center justify-center absolute mt-[200px] md:right-[-1%] w-[90%]
          lg:w-[60%] p-6 rounded-xl shadow-lg ml-[68px]"
        >
          <p className="text-lg mt-3">
            I am skilled in modern web and mobile technologies including React,
            JavaScript, TypeScript, Node.js, and more. My expertise ensures the
            delivery of efficient and scalable solutions.
          </p>
        </motion.div>

        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: carouselInView ? 1 : 0,
            y: carouselInView ? 0 : 50,
          }}
          transition={{ delay: 1, duration: 0.5 }}
          className="carousel ml-[85px] md:mt-[220px] mt-[300px] gap-6 md:mr-[80px] md:ml-[200px]"
        >
          <Carousel cards={cardSources} />
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute md:bottom-0 -bottom-[15vh] right-[-90px] transform translate-x-[10%]"
        >
          <Image
            src="/assets/memoji/delicious.png"
            alt="Image de Memoji saluant"
            width={200}
            height={200}
            priority={true}
          />
        </motion.div>
      </div>
    );
  }
);

Langues.displayName = "Langues";
export default Langues;
