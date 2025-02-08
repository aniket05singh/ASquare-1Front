import React, { useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(""); // Reset status message on new submit

    // Send the message using EmailJS
    emailjs
      .send(
        "your_service_id", // EmailJS service ID
        "your_template_id", // EmailJS template ID
        formData,
        "your_user_id" // EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setStatus("Message sent successfully!");
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Failed to send message.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="w-full h-screen  bg-gray-900 absolute">
    <div className="max-w-3xl mx-auto p-8 mt-30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl">
      <motion.h2
        className="text-4xl text-white text-center font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-white font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-white font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-white font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition h-40 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </motion.form>

      {/* Status Message */}
      {status && (
        <motion.div
          className={`mt-6 text-center text-white font-semibold ${
            status === "Message sent successfully!" ? "text-green-500" : "text-red-500"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {status}
        </motion.div>
      )}
    </div>
    </div>
  );
};

export default ContactUs;

