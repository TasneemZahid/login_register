import './Welcome.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function WelcomeUi() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [token, setToken] = useState("");
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    useEffect(()=>{
        const value = cookies?.userdata|| ""
        const userData = cookies?.user || ""
        if (userData) {
            setToken(value)
            setUser(userData)
        }else{
            navigate('/')
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/logout", 
        ).then((res) => {
            console.log("response",res)
            navigate("/login")
        })
    }

    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>
                            <h1>Welcome Page</h1>
                            {user} welcome
                            <div className="login-button">
                                <button onClick={handleSubmit}>Logout</button>
                            </div>
                           
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WelcomeUi;