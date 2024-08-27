import Image from "next/image";
import Link from "next/link";

export default function StartScreen() {
  return (
    <div className="flex flex-col h-screen p-1 box-border relative">
      <header className="flex items-center justify-between ml-8 mb-16 p-5">
        <span className="text-2xl font-bold font-[League Spartan] text-black">
          GASPARDPCHT
        </span>
        <div className="flex gap-[30px] mr-5 items-center">
          <a
            href="https://www.linkedin.com/in/gaspard-pauchet-348044215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/logo-linkedin-noir.png"
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
              src="/assets/icons/github.svg"
              alt="Logo GitHub"
              width={35}
              height={35}
            />
          </a>
        </div>
      </header>
      <div className="flex-1 flex items-center ml-[200px] mb-[100px]">
        <h1 className="text-5xl font-bold text-[#3C3C3C]">
          <span>HEY THERE!</span>
          <br />
          <span className="mt-4 block">WELCOME IN MY UNIVERSE!</span>
        </h1>
      </div>
      <div className="absolute bottom-[0px] left-[10%] transform -translate-x-1/2">
        <Image
          src="/assets/memoji/hey.png"
          alt="Memoji Hey"
          width={200}
          height={30}
        />
      </div>
      <div className="flex justify-end mr-[200px] mb-[100px] mt-5">
        <Link
          className="w-[200px] inline-block py-2 px-8 text-2xl font-bold text-white bg-black rounded-lg text-center no-underline transition-colors duration-300 hover:bg-white hover:text-black"
          href="/home"
        >
          START
        </Link>
      </div>
    </div>
  );
}
