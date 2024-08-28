import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
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
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#E3E0DC] w-full h-[100px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill={true}
                    src="/assets/image/flowStudio.png"
                    alt=""
                    className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    flow
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  fill={true}
                  src="/assets/image/dogAround.avif"
                  alt=""
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  DogAround
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  fill={true}
                  src="/assets/image/cinema.avif"
                  alt=""
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Cinema
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    fill={true}
                    src="/assets/image/train.avif"
                    alt=""
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    TicketHack
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    fill={true}
                    src="/assets/image/twitter.avif"
                    alt=""
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    HackaTweet
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  fill={true}
                  src="/assets/image/weather.avif"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-5 flex justify-center items-center">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#E3E0DC] w-full h-[100px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill={true}
                    src="/assets/image/newYorkTimes.avif"
                    alt=""
                    className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    flow
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
