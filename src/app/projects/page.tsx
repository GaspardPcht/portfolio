import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../../../components/modal";
import { useState } from "react";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-[90vw] box-border relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] mt-[100px] mb-[100px] ml-[60%]"
      >
        <h1 className="text-4xl font-bold">PROJETS</h1>
      </motion.div>

      <section>
        <div className="ml-[100px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-5 flex justify-center items-center">
              <button
                onClick={handleImageClick}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#E3E0DC] w-full h-[100px] p-0 m-0 border-none bg-transparent"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src="/assets/image/flowStudio.png"
                    alt="Flow Studio"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </button>
            </div>

            {/* Second Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <button
                onClick={handleImageClick}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow border-none bg-transparent"
              >
                <Image
                  fill
                  src="/assets/image/dogAround.avif"
                  alt="Dog Around"
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </button>
            </div>

            {/* Third Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <button
                onClick={handleImageClick}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 border-none bg-transparent"
              >
                <Image
                  fill
                  src="/assets/image/cinema.avif"
                  alt="Cinema"
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </button>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <button
                  onClick={handleImageClick}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 border-none bg-transparent"
                >
                  <Image
                    fill
                    src="/assets/image/train.avif"
                    alt="Train"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </button>
                <button
                  onClick={handleImageClick}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 border-none bg-transparent"
                >
                  <Image
                    fill
                    src="/assets/image/twitter.avif"
                    alt="Twitter"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </button>
              </div>
            </div>

            {/* Fourth Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <button
                onClick={handleImageClick}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow border-none bg-transparent"
              >
                <Image
                  fill
                  src="/assets/image/weather.avif"
                  alt="Weather"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </button>
            </div>

            {/* Fifth Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-5 flex justify-center items-center">
              <button
                onClick={handleImageClick}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#E3E0DC] w-full h-[100px] p-0 m-0 border-none bg-transparent"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src="/assets/image/newYorkTimes.avif"
                    alt="New York Times"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
