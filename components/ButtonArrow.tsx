import React from "react";
import { useRouter } from "next/navigation";

interface ButtonArrowProps {
  text: string;
  href: string;
  type?: "button" | "submit";
}

const ButtonArrow: React.FC<ButtonArrowProps> = ({ text, href, type }) => {
    const router = useRouter();

  const handleClick = () => {
    if (href) {
      // Handle internal routing
      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }
  };

  return (
    <div>
      <a

        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#3C3C3C] border-2 border-[#3C3C3C] rounded-xl hover:text-white group hover:bg-[#3C3C3C]"
        onClick={handleClick}
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-[#3C3C3C] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative">{text}</span>
      </a>
    </div>
  );
};

export default ButtonArrow;
