import './LoginUi.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import { useNavigate } from 'react-router-dom';

function LoginUi() {
    // const [user, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", {
            email,
            password,
        },{ withCredentials: true }).then((res) => {
            console.log("response",res.data)
            if (res.data?.body.Profile && res.data.body.Profile.Email ) {
              console.log("hello")
              localStorage.setItem('token',res.data.token)
              localStorage.setItem('user',JSON.stringify( res.data.body.Profile.Email))
              navigate('/welcome')
            }
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
                            <h1>Login Page</h1>
                           
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
                            <div className="login-button">
                                <button>Login</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginUi;