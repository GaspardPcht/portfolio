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
  const languesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToLangues = () => {
    if (languesRef.current) {
      window.scrollTo({
        top: languesRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      window.scrollTo({
        top: projectRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex-col">
      <Header
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <div className="relative flex flex-col h-[90vh] w-[90vw] box-border ml-20 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" relative flex flex-col item-start md:mt-[100px] md:ml-[100px] text-[#3C3C3C]"
        >
          <h1 className="mb-5 text-5xl font-bold">
            I'M{" "}
            <span className="text-white stroke-black stroke-1 relative z-10">
              <BubbleText text="GASPARDPCHT" />
            </span>
          </h1>
          <h1 className="md:ml-[70px] text-4xl font-semibold">
            I'M DEVELOPER WEB AND MOBILE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" absolute -bottom-[13vh] right-0 transform translate-x-[10%] md:bottom-[10vh]"
        >
          <Image
            src="/assets/memoji/heyHead.png"
            alt="Image de Memoji saluant"
            width={200}
            height={200}
            priority={true}
          />
        </motion.div>

        <button
          onClick={scrollToLangues}
          className="flex flex-col justify-center items-center absolute bottom-[30px] md:bottom-[10vh] right-[45%] md:right-[50%] transform -translate-x-1/2 cursor-pointer animate-bounce bg-transparent border-none hover:bg-transparent text-black "
          aria-label="Scroll to Langues section"
        >
          <div className="text-3xl">
            <RxDoubleArrowDown />
          </div>
        </button>
      </div>
      <div ref={languesRef} className="mt-32 md:mt-0">
        <Langues scrollToAbout={scrollToAbout} />
      </div>
      <div ref={aboutRef} className="mt-40 md:mt-0">
        <About />
      </div>
      <div ref={projectRef} className="relative ">
        <Projects />
      </div>
      <div
        ref={contactRef}
        className=" relative flex mt-[1200px] md:mt-[1000px]"
      >
        <Contact />
      </div>
    </div>
  );
}
