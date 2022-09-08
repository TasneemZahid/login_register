import './RegisterUi.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import { useNavigate } from 'react-router-dom';

function RegisterUi() {
    // const [user, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!(email && password)) {
        //   return setErrMessage("Email and password is required!");
        // }
        axios.post("http://localhost:4000/register", {
            email,
            password,
        }).then((res) => {
            console.log("response",res)
            navigate("/verify")
        })
        // setUsers(user.data);
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
                        <form onSubmit={handleSubmit}>
                            <h1>Register Page</h1>
                           
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input
                                    type="email"
                                    className="name"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input
                                    type="password"
                                    className="name"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="register-button">
                                <button>Register</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterUi;