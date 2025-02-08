import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const PersonalInfoForm = () => {
  const { id, setFormFlag } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    id,
    name: '',
    nationality: '',
    height: '',
    weight: '',
    dob: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("inside personalInfo")
    await fetch('https://asquare-01.onrender.com/infosubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: formData.id,
        name: formData.name,
        nationality: formData.nationality,
        height: formData.height,
        weight: formData.weight,
        dob: formData.dob,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));

    setFormFlag(false);
    navigate("/");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
      <h2 className="text-3xl text-center text-white font-bold mb-8">Personal Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name input */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">Full Name</label>
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

        {/* Nationality input */}
        <div>
          <label htmlFor="nationality" className="block text-white font-medium mb-2">Nationality</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Height input */}
        <div>
          <label htmlFor="height" className="block text-white font-medium mb-2">Height (in cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Weight input */}
        <div>
          <label htmlFor="weight" className="block text-white font-medium mb-2">Weight (in kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Date of Birth input */}
        <div>
          <label htmlFor="dob" className="block text-white font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg text-white">
          <h3 className="text-xl font-semibold mb-4">Submitted Information:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Nationality: {submittedData.nationality}</p>
          <p>Height: {submittedData.height} cm</p>
          <p>Weight: {submittedData.weight} kg</p>
          <p>Date of Birth: {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
