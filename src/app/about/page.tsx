import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface AboutProps {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
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
      className="flex flex-col h-screen w-[90vw] box-border relative"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: headerInView ? 1 : 0, x: headerInView ? 0 : -100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] mt-[100px] mb-[100px] ml-[40%]"
      >
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-[#CDCDCB] text-center flex items-center justify-center absolute mt-[300px] right-[10%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] p-6 rounded-xl shadow-lg"
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
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
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
