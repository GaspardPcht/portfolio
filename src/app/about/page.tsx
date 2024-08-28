import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-[90vw] box-border relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] mt-[100px] mb-[100px] ml-[30%]"
      >
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-[#CDCDCB] p-3 text-center flex items-center justify-center absolute mt-[300px] right-[10%] rounded-[20px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]"
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-[90px] transform translate-x-[10%]"
      >
        <Image
          src="/assets/memoji/zen.png"
          alt="Image de Memoji saluant"
          width={200}
          height={200}
          priority={true}
        />
      </motion.div>
    </div>
  );
});

About.displayName = "About";

export default About;
