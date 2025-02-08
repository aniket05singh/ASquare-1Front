import React  from 'react'
import { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import CalPage from './Pages/CalPage';
import ContactPage from './Pages/ContactPage';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import LoginPage from './Pages/LoginPage';



export const UserContext = createContext();
const App = () => {
    const [id, setId] = useState(null);
    const [logflag,setLogFlag] = useState(false);
    const [formflag,setFormFlag] = useState(false);
    const[user,setUser]=useState(null);
    const [defi,setDefi]=useState([]);
  return (
    <UserContext.Provider value={{defi,setDefi,id,setId,logflag,setLogFlag,formflag,setFormFlag,user,setUser}}>
      <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><Home/></>} />
        <Route path="login" element={<><Navbar/><LoginPage/></>} />
        <Route path="cal" element={<><Navbar/><CalPage /></>} />
        <Route path="contact" element={<><Navbar/><ContactPage /></>} />
        <Route path="dashboard" element={<><Navbar/><Dashboard /></>} />
      </Routes>
    </Router>
    </UserContext.Provider>
    
  )
}

export default App
