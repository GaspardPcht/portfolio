import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  text?: string;
  link?: string; // Optional link prop
}

const Modal = ({
  isOpen,
  setIsOpen,
  title = "Default Title",
  text = "Default text",
  link,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#3C3C3C] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="flex gap-2 items-center mb-4">
              <FaArrowLeft
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:text-gray-400 cursor-pointer transition-colors"
              />
            </div>

            <h3 className="text-3xl font-bold text-center mb-2">{title}</h3>
            <p className="text-center mb-6">{text}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 underline mt-4"
              >
                Visit Project
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
