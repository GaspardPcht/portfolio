"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BubbleText from "./BubbleText";

interface HeaderProps {
  readonly scrollToAbout: () => void;
  readonly scrollToProject: () => void;
  readonly scrollToContact: () => void;
}

export default function Header({
  scrollToAbout,
  scrollToProject,
  scrollToContact,
}: Readonly<HeaderProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between ml-8 p-6 border-b border-gray-300">
      <div className="flex items-center w-full  justify-between  text-black">
        <motion.span
          className="text-xl font-bold font-[League Spartan] text-black stroke-black stroke-1 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BubbleText text="GASPARDPCHT" />
        </motion.span>
        <button
          className="md:hidden hover:bg-transparent text-3xl text-black relative z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
        <div className="gap-[100px] hidden md:flex font-semibold text-[#3C3C3C]">
          {["About", "Projects", "Contact"].map((item, index) => (
            <motion.span
              key={item}
              onClick={
                item === "About"
                  ? scrollToAbout
                  : item === "Projects"
                  ? scrollToProject
                  : scrollToContact
              }
              className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3C3C3C] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="hidden md:flex gap-[30px] items-center mr-5">
        {[
          {
            href: "https://www.linkedin.com/in/gaspard-pauchet-348044215/",
            src: "/assets/icons/logo-linkedin-noir.png",
            alt: "Logo LinkedIn",
            width: 50,
            height: 50,
          },
          {
            href: "https://github.com/GaspardPcht",
            src: "/assets/icons/github.svg",
            alt: "Logo GitHub",
            width: 35,
            height: 35,
          },
        ].map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
            />
          </motion.a>
        ))}
      </div>
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs bg-white h-full border-l border-gray-300 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 overflow-hidden`}
      >
        <button
          className="absolute bg-white top-4 text-black hover:bg-white right-4 text-3xl z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mt-20">
          {["About", "Projects", "Contact"].map((item) => (
            <motion.span
              key={item}
              onClick={() => {
                item === "About"
                  ? scrollToAbout()
                  : item === "Projects"
                  ? scrollToProject()
                  : scrollToContact();
                setIsMenuOpen(false);
              }}
              className="my-4 text-xl font-semibold cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
          <div className="flex gap-4 my-4">
            {[
              {
                href: "https://www.linkedin.com/in/gaspard-pauchet-348044215/",
                src: "/assets/icons/logo-linkedin-noir.png",
                alt: "Logo LinkedIn",
                width: 30,
                height: 30,
              },
              {
                href: "https://github.com/GaspardPcht",
                src: "/assets/icons/github.svg",
                alt: "Logo GitHub",
                width: 30,
                height: 30,
              },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={link.width}
                  height={link.height}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
