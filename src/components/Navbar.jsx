import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom instead of react-router
import { UserContext } from "../App";
import Login from "./Login";
import PersonalInfoForm from "./PersonalInfoForm";

const Navbar = () => {
  const { id, setId, logflag, setLogFlag, formflag,user } = React.useContext(UserContext);
  // const user = JSON.parse(localStorage.getItem("user"));
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control hamburger menu

  // Sync UserContext with localStorage on initial render
  useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId && !id) {
      setId(storedUserId); // Update the context with the id from localStorage
    }
  }, [id, setId]);

  return (
    <div className="h-full w-full">
      <div className="bg-gray-800 text-white p-4 w-full border-green-700 flex justify-between fixed top-0 z-10">
        {/* Logo Section */}
        <div className="flex gap-4 ml-4">
          <div>logo</div>
          <div>ASquare</div>
        </div>
        
        {/* Desktop Navigation Section */}
        <div className="hidden md:flex justify-evenly gap-20 mr-10">
          <Link to="/">Home</Link>
          <Link to="/cal">Calorie Tracker</Link>
          <Link to="/contact">Contact Us</Link>
          {/* Show Dashboard or Login */}
          {id ? (
            <Link to="/dashboard">{user?.displayName}</Link>
          ) : (
            <button onClick={() => setLogFlag(true)} className="text-white">
             <Link to="/login" >login</Link>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Section */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-6">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/cal" onClick={() => setIsMobileMenuOpen(false)}>Calorie Tracker</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            {/* Show Dashboard or Login */}
            {id ? (
              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>{user?.displayName ?? "jadugar"}</Link>
            ) : (
              <button onClick={() => { setLogFlag(true); setIsMobileMenuOpen(false); }} className="text-white">
                <Link to="/login" >login</Link>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Show Login component when logflag is true */}

    </div>
  );
};

export default Navbar;
