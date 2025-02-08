import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our Website
        </motion.h1>
        <p className="text-lg max-w-2xl">
          We provide top-notch services to enhance your experience. Learn more about us and our creators below.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Web Development", "App Development", "UI/UX Design"].map((service, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">{service}</h3>
              <p className="text-sm mt-2">
                High-quality {service.toLowerCase()} solutions tailored for you.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to deliver innovative and efficient solutions for digital growth. We are a team of passionate developers and designers dedicated to making the web a better place.
        </p>
      </section>

      {/* Meet the Creators Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet the Creators</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Alice Johnson", "Bob Smith", "Charlie Davis"].map((creator, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">{creator}</h3>
              <p className="text-sm mt-2">A dedicated professional bringing expertise and innovation.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
