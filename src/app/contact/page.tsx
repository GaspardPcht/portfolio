import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../../components/ContactsForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col h-[90vh] w-[90vw] box-border relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] ml-[70%]"
      >
        <h1 className="text-4xl font-bold">CONTACT</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row mt-[50px] gap-6">
        <div className="bg-[#CDCDCB] p-6 rounded-xl shadow-lg max-w-md lg:max-w-lg max-h-[140px] overflow-auto flex-1 ml-4">
          <p className="text-lg text-black">
            I would be delighted to discuss your projects or answer any
            questions you may have. Feel free to get in touch!
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-[90px] transform translate-x-[10%]"
      >
        <Image
          src="/assets/memoji/thumb.png"
          alt="Image de Memoji saluant"
          width={200}
          height={200}
          priority={true}
        />
      </motion.div>
    </div>
  );
}
