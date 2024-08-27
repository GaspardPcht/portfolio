import React, { forwardRef } from "react";
import Image from "next/image";

interface AboutProps {
  
}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-[90vw] box-border relative"
    >
      <div className="flex flex-col items-start text-[#3C3C3C] mt-[100px] mb-[100px] ml-[30%]">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
      </div>
      <div className="bg-[#CDCDCB] p-3 text-center flex items-center justify-center absolute mt-[300px] right-[10%] rounded-[20px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <p className="text-lg mt-3">
          I am a 23-year-old web and mobile developer based in France.
          Passionate about technology, I specialize in building responsive
          websites and mobile applications that focus on user experience and
          functionality. With a strong foundation in modern web technologies and
          mobile frameworks, I enjoy turning ideas into digital solutions and
          continuously improving my skills in this fast-evolving industry.
        </p>
      </div>
      <div className="absolute bottom-0 left-[90px] transform translate-x-[10%]">
        <Image
          src="/assets/memoji/zen.png"
          alt="Image de Memoji saluant"
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute bottom-[30px] right-[40%] transform -translate-x-1/2 cursor-pointer animate-bounce">
        <p>Projects</p>
        <div className="w-[30px] h-[30px] border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-black hover:border-t-white"></div>
      </div>
    </div>
  );
});

About.displayName = "About"; // Add displayName for better debugging

export default About;
