import React from "react";
import { auth, googleProvider, signInWithPopup } from "../Auth/firebase";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const { setId, setLogFlag, setFormFlag,setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setId(result.user.uid);
      console.log(result);
      setUser(result.user);
  
      const response = await fetch('https://asquare-01.onrender.com/checkUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: result.user.uid }),
      });
  
      const data = await response.json();
      console.log("API Response:", data);
      console.log(data.success);

  
      if (!data.success) {
        setFormFlag(true); // ✅ This updates state
        console.log("Form flag set to true");
      } else {
        navigate("/dashboard"); // ✅ Redirect to dashboard only if user exists
      }
    } catch (error) {
      console.error("Google Login Error:", error);
    }
    setLogFlag(false);
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="w-[400px] h-[400px] p-8 rounded-xl text-white bg-gray-900 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Login with Google</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-xl"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
