"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Image from "next/image";
import Langues from "../langues/page";
import About from "../about/page";
import Projects from "../projects/page";
import BubbleText from "../../../components/BubbleText";
import Contact from "../contact/page";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Home() {
  const sectionsRef = {
    langues: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionsRef) => {
    const ref = sectionsRef[section].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex-col">
      <Header
        scrollToAbout={() => scrollToSection("about")}
        scrollToProject={() => scrollToSection("project")}
        scrollToContact={() => scrollToSection("contact")}
      />
      <div className="relative flex flex-col h-[90vh] w-[90vw] box-border md:ml-20 ml-4 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative flex flex-col item-start md:mt-[100px] md:ml-[100px] text-[#3C3C3C]"
        >
          <h1 className="mb-5 md:text-5xl text-3xl  font-bold">
            I'M{" "}
            <span className="text-white stroke-black stroke-1 relative z-10">
              <BubbleText text="GASPARDPCHT" />
            </span>
          </h1>
          <h1 className="md:ml-[70px] md:text-4xl text-2xl font-semibold">
            I'M DEVELOPER WEB AND MOBILE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-[80px] md:mb-0 right-0 transform translate-x-[10%] md:bottom-[10vh]"
        >
          <Image
            src="/assets/memoji/heyHead.png"
            alt="Image de Memoji saluant"
            width={200}
            height={200}
            priority={true}
            className="opacity-0 md:opacity-100"
          />
        </motion.div>

        <button
          onClick={() => scrollToSection("langues")}
          className="flex flex-col justify-center items-center absolute mb-40 md:mb-0 bottom-[-20px] md:bottom-[10vh] right-[45%] md:right-[50%] transform -translate-x-1/2 cursor-pointer animate-bounce bg-transparent border-none hover:bg-transparent text-black"
          aria-label="Scroll to Langues section"
        >
          <div className="text-3xl">
            <RxDoubleArrowDown />
          </div>
        </button>
      </div>
      <div ref={sectionsRef.langues} className="md:mt-0">
        <Langues />
      </div>
      <div ref={sectionsRef.about} className=" md:mt-0">
        <About />
      </div>
      <div ref={sectionsRef.project} className="relative">
        <Projects />
      </div>
      <div
        ref={sectionsRef.contact}
        className="relative flex mt-[1200px] md:mt-[1000px]"
      >
        <Contact />
      </div>
    </div>
  );
}
