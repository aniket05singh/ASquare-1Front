import React, { useEffect, useState } from "react";
import { auth, signOut } from "../Auth/firebase";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import Gauge1234 from "../components/Gauge";  // ✅ Fix import
import Recommendation from "../components/Recommendation";
import { motion } from "framer-motion";


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {id,setId,setLogFlag,setDefi} = React.useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [value, setValue] = useState({});
  const [isSubmitted,setIsSubmitted] = useState(true);
  useEffect(() => {
    if (Object.keys(value).length > 0 && avgMale.length > 0) {
      const newDefi = Object.entries(value)
        .filter(([key, val]) => val / avgMale[0][key] < 100 / 300)
        .map(([key]) => key);
  
      setDefi(newDefi);
      console.log("Updated defi:", newDefi);
    }
  }, [value, setDefi]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!id) return; // Avoid making request if missing data
  
      try {
        const response = await fetch("https://asquare-01.onrender.com/history1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
  
        const data = await response.json();
        setValue(data.data);
        console.log("Success:", data.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
  
    fetchHistory(); // Call the function
  
  }, [id]); // Dependencies: Runs when `id` or `selectedDate` change
  
  const avgMale = [{
    Carbohydrate: 325, // g
    Protein: 56, // g
    Total_lipid_fat: 70, // g
    Vitamin_A: 900, // µg
    Vitamin_B_6: 1.3, // mg
    Vitamin_B_12: 2.4, // µg
    Vitamin_C_total_ascorbic_acid: 90, // mg
    Vitamin_D: 15, // µg
    Vitamin_E_alpha_tocopherol: 15, // mg
    Vitamin_K_phylloquinone: 120, // µg
    Calcium: 1000, // mg
    Iron_Fe: 8, // mg
    Magnesium_Mg: 420, // mg
    Potassium_K: 3400, // mg
    Zinc_Zn: 11, // mg
    Sodium_Na: 2300, // mg
    Iodine: 1, // µg
    Selenium_Se: 55, // µg
    Phosphorus_P: 700, // mg
    Manganese_Mn: 2.3, // mg
    Copper_Cu: 0.9, // mg
    Fiber_total_dietary: 38, // g
    Water: 3700, // mL
    Cholesterol: 300 // mg (upper limit)
}];

const avgFemale = [{
  Carbohydrate: 275, // g
  Protein: 46, // g
  Total_lipid_fat: 70, // g
  Vitamin_A: 700, // µg
  Vitamin_B_6: 1.3, // mg
  Vitamin_B_12: 2.4, // µg
  Vitamin_C_total_ascorbic_acid: 75, // mg
  Vitamin_D: 15, // µg
  Vitamin_E_alpha_tocopherol: 15, // mg
  Vitamin_K_phylloquinone: 90, // µg
  Calcium: 1000, // mg
  Iron_Fe: 18, // mg
  Magnesium_Mg: 320, // mg
  Potassium_K: 2600, // mg
  Zinc_Zn: 8, // mg
  Sodium_Na: 2300, // mg
  Iodine: 1, // µg
  Selenium_Se: 55, // µg
  Phosphorus_P: 700, // mg
  Manganese_Mn: 1.8, // mg
  Copper_Cu: 0.9, // mg
  Fiber_total_dietary: 25, // g
  Water: 2700, // mL
  Cholesterol: 300 // mg (upper limit)
}];



  // Get today's date
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  // Get the date 15 days ago
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - 15);
  const formattedPastDate = pastDate.toISOString().split("T")[0];
  console.log(pastDate,formattedPastDate);
    const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logging out");
    signOut(auth);
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    console.log("logged out");
    setId(null);
    setLogFlag(true);
    navigate("/login");
    // window.location.href = "/signup";
  };
  const handleSubmit = async (e) => {
    setIsSubmitted(false);
    e.preventDefault();
    console.log("handleSubmit")
    console.log(selectedDate);
    console.log(id);
    await fetch('https://asquare-01.onrender.com/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:id,
        date:selectedDate
      }),
    })
      .then((response) => response.json())
      .then((data) => {setValue(data.data);console.log('Success:', data.data)})
      .catch((error) => console.error('Error:', error));

    
  };


  return (
    <>
    
    {id != null &&(
      <motion.div
      className="mt-20 text-center flex flex-col items-center justify-center space-y-4 p-6 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dashboard Title */}
      <motion.h2
        className="text-4xl font-extrabold text-blue-400 tracking-wide"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h2>

      {/* Welcome Message */}
      <p className="text-lg text-gray-300 font-medium">
        Welcome, <span className="text-blue-300 font-semibold">{user?.displayName}!</span>
      </p>

      {/* Profile Image */}
      <motion.img
        src={user?.photoURL}
        alt="Profile"
        className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md hover:shadow-xl transition transform hover:scale-110"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Logout Button */}
      <motion.button
        onClick={handleLogout}
        className="px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full font-semibold shadow-md hover:shadow-xl transition transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Logout
      </motion.button>
    </motion.div>
    )}
     <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select a Date (Past 15 Days Only)</h2>
      <form onSubmit={handleSubmit}>
  <label className="block mb-2 font-medium">Date:</label>
  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    min={formattedPastDate}
    max={formattedToday}
    className="border p-2 rounded w-full"
    required
  />
  <button
    type="submit" // Keep type="submit"
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Submit
  </button>
</form>

    </div >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {value && Object.keys(value).length > 0 ? (
    Object.entries(value).map(([key, val]) => (
      <Gauge1234 key={key} name={key} value={val / avgMale[0][key]} />
    ))
  ) : (
    <p className="text-gray-500"></p>
  )}
</div>

<div>
  {isSubmitted&&<Recommendation/>}
</div>

    
    </>
  );
};

export default Dashboard;
