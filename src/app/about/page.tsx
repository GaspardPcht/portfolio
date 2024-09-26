"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef2, inView: imageInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col h-screen w-[90vw] box-border relative">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: headerInView ? 1 : 0,
          x: headerInView ? 0 : -100,
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] mt-[40px] mb-[100px] md:ml-[40%] ml-[30%]"
      >
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-[#CDCDCB] text-center flex items-center justify-center absolute mt-[200px] md:mt-[300px] md:right-[3%] w-[90%] xl:w-[50%] p-6 rounded-xl shadow-lg ml-[40px] md:ml-0"
      >
        <p className="text-lg mt-3">
          I am a 23-year-old web and mobile developer based in France.
          Passionate about technology, I specialize in building responsive
          websites and mobile applications that focus on user experience and
          functionality. With a strong foundation in modern web technologies and
          mobile frameworks, I enjoy turning ideas into digital solutions and
          continuously improving my skills in this fast-evolving industry.
        </p>
      </motion.div>

      <motion.div
        ref={imageRef1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: imageInView1 ? 1 : 0, y: imageInView1 ? 0 : 50 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-[25%] left-[200px] transform translate-x-[10%]"
      >
        <Image
          src="/assets/image/me.png"
          alt="Image de Memoji saluant"
          width={300}
          height={300}
          priority={true}
          className="rounded-xl opacity-0 md:opacity-100"
        />
      </motion.div>

      <motion.div
        ref={imageRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: imageInView2 ? 1 : 0, y: imageInView2 ? 0 : 50 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute md:bottom-0 bottom-[0px] md:left-[45%] left-[30%] transform translate-x-[10%]"
      >
        <Image
          src="/assets/memoji/zen.png"
          alt="Image de Memoji saluant"
          width={200}
          height={200}
          priority={true}
          className="opacity-0 md:opacity-100"
        />
      </motion.div>
    </div>
  );
};

export default About;
