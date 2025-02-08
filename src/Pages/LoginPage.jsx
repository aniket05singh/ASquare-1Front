import React, { useEffect } from 'react';
import Login from '../components/Login';
import { UserContext } from "../App";
import PersonalInfoForm from '../components/PersonalInfoForm';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { logflag, formflag } = React.useContext(UserContext);
    const navigate = useNavigate();

    console.log("Login Flag:", logflag, "Form Flag:", formflag);

    useEffect(() => {
        if (!logflag && !formflag) {
            navigate("/");
        }
    }, [logflag, formflag, navigate]);

    return (
        <div className='w-full h-full bg-gray-900'>
            {logflag && <Login />}
            {formflag && <PersonalInfoForm />}
        </div>
    );
};

export default LoginPage;
