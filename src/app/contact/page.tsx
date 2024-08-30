import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../../components/ContactsForm";

export default function Contact() {
  return (
    <div className="flex flex-col h-[90vh] w-[90vw] box-border relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-start text-[#3C3C3C] ml-[80%]"
      >
        <h1 className="text-4xl font-bold">CONTACT</h1>
      </motion.div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
