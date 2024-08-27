"use client";
import React, { useRef } from "react";
import Header from "../../../components/header";
import Image from "next/image";
import Langues from "../langues/page";
import About from "../about/page";

export default function Home() {
  const languesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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

  return (
    <div>
      <Header scrollToAbout={scrollToAbout} />
      <div className="flex flex-col h-[90vh] w-[90vw] relative box-border">
        <div className="flex flex-col items-start mt-[200px] ml-[200px] text-[#3C3C3C]">
          <h1 className="mb-5 text-5xl font-bold">
            I'M{" "}
            <span className="text-white stroke-black stroke-1">
              GASPARDPCHT
            </span>
          </h1>

          <h1 className="ml-[70px] text-4xl font-semibold">
            I'M DEVELOPER WEB AND MOBILE
          </h1>
        </div>

        <div className="absolute bottom-0 right-0 transform translate-x-[10%]">
          <Image
            src="/assets/memoji/heyHead.png"
            alt="Image de Memoji saluant"
            width={200}
            height={200}
            priority={true}
          />
        </div>

        <div
          onClick={scrollToLangues}
          className="flex justify-center items-center absolute bottom-[30px] right-[45%] transform -translate-x-1/2 cursor-pointer"
        >
          <div className="w-[30px] h-[30px] border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-black rotate-[-45deg] animate-bounce"></div>
        </div>
      </div>
      <Langues ref={languesRef} />
      <About ref={aboutRef} />
    </div>
  );
}
