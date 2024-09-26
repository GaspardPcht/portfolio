"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CarouselProject from "../../../components/CarouselCardsProjects";
import Modal from "../../../components/ModalProjects";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    link: "",
    frontend: "",
    backend: "",
    functionalities: "",
    projetURL: "",
  });

  const handleImageClick = (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities: string,
    projetURL: string
  ) => {
    setModalContent({
      title,
      text,
      link,
      frontend,
      backend,
      functionalities,
      projetURL,
    });
    setIsModalOpen(true);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col h-screen w-[90vw] box-border relative"
    >
      <div className="flex flex-col items-start text-[#3C3C3C] mt-[40px] md:mt-[100px] md:ml-[60%] ml-[32%]">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </div>
      <div>
        <CarouselProject onCardClick={handleImageClick} />
      </div>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title={modalContent.title}
        text={modalContent.text}
        link={modalContent.link}
        frontend={modalContent.frontend}
        backend={modalContent.backend}
        functionalities={modalContent.functionalities}
        projetURL={modalContent.projetURL}
      />
    </motion.div>
  );
}
