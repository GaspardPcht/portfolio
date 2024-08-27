import Header from "../../../components/header";
import Image from "next/image";
import Langues from "../langues/page";

export default function Home() {
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

        <div className="absolute bottom-0 right-0 transform translate-x-[10%]">
          <Image
            src="/assets/memoji/heyHead.png"
            alt="Image de Memoji saluant"
            width={200}
            height={200}
            priority={true}
          />
        </div>

        <div className="flex justify-center items-center absolute bottom-[30px] left-1/2 transform -translate-x-1/2 cursor-pointer">
          <div className="w-[30px] h-[30px] border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-black rotate-[-45deg] animate-bounce"></div>
        </div>
      </div>

      <Langues />
    </div>
  );
}
