"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-[800px] mx-auto p-6 bg-wghite shadow-mgd rounded-mgd relative my-20"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Selim</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 font-semibold text-gray-800"
        >
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EFCED9]"
          required
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.3 }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 font-semibold text-gray-800"
        >
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EFCED9]"
          required
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.35 }}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 font-semibold text-gray-800"
        >
          Message
        </label>
        <motion.textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EFCED9]"
          required
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.4 }}
        />
      </div>
      <div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full px-4 py-2 text-white font-semibold bg-[#EFCED9] rounded-md hover:bg-[rgb(246,174,198)] focus:outline-none "
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Submit
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;