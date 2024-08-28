import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../../../components/modal";
import { useState } from "react";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    link: "",
  });

  const handleImageClick = (title: string, text: string, link: string) => {
    setModalContent({ title, text, link });
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
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </motion.div>

      <section>
        <div className="ml-[100px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-5 flex justify-center items-center">
              <button
                onClick={() =>
                  handleImageClick(
                    "Flow Studio",
                    "Flow Studio is a website dedicated to pole dancing, developed on WordPress. It showcases classes, schedules, and special events, all within an elegant and user-friendly interface.",
                    "https://poledancewithme.wordpress.com/"
                  )
                }
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
                onClick={() =>
                  handleImageClick(
                    "Dog Around",
                    "Dog Around is a social network for dog lovers, allowing users to connect with each other and share their experiences.",
                    "https://dogaround.com/"
                  )
                }
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
                onClick={() =>
                  handleImageClick(
                    "Cinema Hub",
                    "Cinema Hub is a movie review platform, offering detailed reviews and ratings for the latest films.",
                    "https://cinemahub.com/"
                  )
                }
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 border-none bg-transparent"
              >
                <Image
                  fill
                  src="/assets/image/cinema.avif"
                  alt="Cinema Hub"
                  className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </button>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <button
                  onClick={() =>
                    handleImageClick(
                      "Train Timetable",
                      "Train Timetable is a travel app providing up-to-date information on train schedules and routes.",
                      "https://traintimetable.com/"
                    )
                  }
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 border-none bg-transparent"
                >
                  <Image
                    fill
                    src="/assets/image/train.avif"
                    alt="Train Timetable"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </button>
                <button
                  onClick={() =>
                    handleImageClick(
                      "Twitter Trends",
                      "Twitter Trends is a social media dashboard that tracks trending topics and hashtags on Twitter.",
                      "https://twittertrends.com/"
                    )
                  }
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 border-none bg-transparent"
                >
                  <Image
                    fill
                    src="/assets/image/twitter.avif"
                    alt="Twitter Trends"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </button>
              </div>
            </div>

            {/* Fourth Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <button
                onClick={() =>
                  handleImageClick(
                    "Weather Forecast",
                    "Weather Forecast is an app that provides real-time weather updates and forecasts for cities around the world.",
                    "https://weatherforecast.com/"
                  )
                }
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow border-none bg-transparent"
              >
                <Image
                  fill
                  src="/assets/image/weather.avif"
                  alt="Weather Forecast"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </button>
            </div>

            {/* Fifth Item */}
            <div className="col-span-2 sm:col-span-1 md:col-span-5 flex justify-center items-center">
              <button
                onClick={() =>
                  handleImageClick(
                    "New York Times Archive",
                    "The New York Times Archive offers access to historical articles and publications from the iconic newspaper.",
                    "https://nytimesarchive.com/"
                  )
                }
                className="group relative flex flex-col overflow-hidden rounded-lg bg-[#E3E0DC] w-full h-[100px] p-0 m-0 border-none bg-transparent"
              >
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src="/assets/image/newYorkTimes.avif"
                    alt="New York Times Archive"
                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title={modalContent.title}
        text={modalContent.text}
        link={modalContent.link}
      />
    </div>
  );
}
