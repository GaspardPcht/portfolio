import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fieger5",
        "template_vu7u33y", 
        formData,
        "a04RyuWoXUIMeDNPc" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setSuccessMessage(
            "Erreur lors de l'envoi du message. Veuillez réessayer plus tard."
          );
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="w-full h-[90vh] max-w-lg mx-auto mt-8 p-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nom
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Envoyer
        </button>
      </div>
      {successMessage && (
        <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
