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
          Welcome to ASquare
        </motion.h1>
        <p className="text-lg max-w-2xl">
        Welcome to ASquare, your personal nutrition assistant! Our web application helps you track your daily food intake and monitors your nutrient levels. If any deficiencies are detected, our system recommends healthy foods to balance your diet and improve overall well-being. Stay on top of your nutrition with real-time tracking and a smarter way to maintain a healthy lifestyle. Start your journey towards better health today!
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Daily Nutrition Tracker", "Nutrition Deficiency Detection", "Food Reccommendation To Correct Deficiency "].map((service, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">{service}</h3>
             
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
        At ASquare, we are dedicated to revolutionizing the way people manage their nutrition and overall well-being. Our mission is to provide a smart, user-friendly platform that helps individuals track their daily food intake, identify nutrient deficiencies, and receive personalized dietary recommendations.

<h3 className="text-3xl font-semibold mb-6 mt-6">Our Vision</h3>
We envision a world where everyone has easy access to the knowledge and tools they need to maintain a balanced and healthy diet. By leveraging technology, data analytics, and AI-powered insights, we aim to empower users with valuable nutritional guidance tailored to their unique needs.
</p>
      </section>

      {/* Meet the Creators Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet the Creators</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Aniket Singh", "Anish Kumar"].map((creator, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">{creator}</h3>
              <p className="text-sm mt-2">IIIT Sonepat 2nd Year Student</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
