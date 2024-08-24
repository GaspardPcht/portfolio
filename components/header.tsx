import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between ml-8 p-6 border-b border-gray-300">
      <div className="flex items-center gap-[80px] text-black">
        <span className="text-2xl font-bold font-[League Spartan] text-black">
          GASPARDPCHT
        </span>
        <div className="flex gap-[100px] font-semibold text-[#3C3C3C]">
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="flex gap-[30px] items-center mr-5">
        <a
          href="https://www.linkedin.com/in/gaspard-pauchet-348044215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/logo-linkedin-noir.png"
            alt="Logo LinkedIn"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://github.com/GaspardPcht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/github.svg"
            alt="Logo GitHub"
            width={35}
            height={35}
          />
        </a>
      </div>
    </div>
  );
}
