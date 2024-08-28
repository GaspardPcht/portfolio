// pages/projects.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import CarouselProject from "../../../components/CarouselCards";
import Modal from "../../../components/modal";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    link: "",
    frontend: "",
    backend: "",
    functionalities:''
  });

  const handleImageClick = (
    title: string,
    text: string,
    link: string,
    frontend: string,
    backend: string,
    functionalities:string,
  ) => {
    setModalContent({ title, text, link, frontend, backend, functionalities });
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-[90vw] box-border relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] mt-[100px] ml-[60%]"
      >
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </motion.div>
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
      />
    </div>
  );
}
