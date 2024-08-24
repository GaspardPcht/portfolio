
"use client"; 

import React from "react";
import Image from "next/image";

interface CardProps {
  logoSrc: string;
}

const Card: React.FC<CardProps> = ({ logoSrc }) => {
  return (
    <div className="flex-shrink-0 bg-gray-100 rounded-3xl border border-gray-300 shadow-lg">
      <Image
        src={logoSrc}
        alt="Technology logo"
        width={200}
        height={200}
        className="rounded-2xl"
      />
    </div>
  );
};

export default Card;
