
"use client"; 

import React from "react";
import Image from "next/image";

interface CardProps {
  logoSrc: string;
}

const CardsLanguages: React.FC<CardProps> = ({ logoSrc }) => {
  return (
    <div className="flex-shrink-0 items-center content-center bg-[#FEFEFE] rounded-xl border shadow-lg">
      <Image
        src={logoSrc}
        alt="Technology logo"
        width={200}
        height={200}
        className="rounded-xl"
      />
    </div>
  );
};

export default CardsLanguages;
