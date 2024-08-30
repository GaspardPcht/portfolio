import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Carousel from "../../../components/carouselCardsLanguages";
import Image from "next/image";

const cardSources = [
  "/assets/icons/react.png",
  "/assets/icons/JavaScript.png",
  "/assets/icons/typeScript.png",
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
    return (
      <div
        ref={ref}
        className="flex flex-col h-screen w-[90vw] box-border relative"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-start text-[#3C3C3C] mt-[100px] ml-[10%]"
        >
          <h1 className="text-4xl font-bold">LANGUAGES</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-[#CDCDCB] p-2 text-center flex items-center justify-center absolute mt-[200px] right-[-5%] rounded-[20px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]"
        >
          <p className="text-lg mt-3">
            I am skilled in modern web and mobile technologies including React,
            JavaScript, TypeScript, Node.js, and more. My expertise ensures the
            delivery of efficient and scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="carousel mt-[220px] gap-6 mr-[80px] ml-[200px]"
        >
          <Carousel cards={cardSources} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-0 right-[-90px] transform translate-x-[10%]"
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
