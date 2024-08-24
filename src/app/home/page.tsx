import Header from "../../../components/header";
import Image from "next/image";
import Langues from "../langues/page";

export default function Home() {
  // const scrollToSection = () => {
  //   const section = document.getElementById("targetSection");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-[90vh] w-[90vw] relative box-border">
        <div className="flex flex-col items-start mt-[200px] ml-[200px] text-[#3C3C3C]">
          <h1 className="mb-5 text-5xl font-bold">
            I'M{" "}
            <span className="text-white stroke-black stroke-1">
              GASPARDPCHT
            </span>
          </h1>

          <h1 className="ml-[70px] text-4xl font-semibold">
            I'M DEVELOPER WEB AND MOBILE
          </h1>
        </div>
        <div className="absolute bottom-[-20px] right-[-10%] transform -translate-x-1/2">
          <Image
            src="/assets/heyHead.png"
            alt="Memoji Hey"
            width={200}
            height={200}
          />
        </div>
        <div
          className="flex justify-center items-center absolute bottom-[30px] right-[45%] transform -translate-x-1/2 cursor-pointer"
         
        >
          <div className="w-[30px] h-[30px] border-r-[5px] border-t-[5px] border-black rotate-[135deg] animate-bounce"></div>
        </div>
      </div>
      <Langues />
    </div>
  );
}
