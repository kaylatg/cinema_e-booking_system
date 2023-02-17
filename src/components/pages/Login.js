import React from 'react'
import '../../App.css'
import './Login.css'
import { useNavigate } from "react-router-dom";

export const Login = ({stateChanger}) => {
  const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        stateChanger(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
    }

    return (
      <>
        <form className="login">
        <h1>Login</h1>
	        <div className = "login-form">
		        <label className = "login-form-email">Email:</label>
		        <input className = "login-form-email" name="email" placeholder="" />
                <label className = "login-form-password">Password</label>
		        <input className = "login-form-password" name="password" placeholder="" />
                <button className = "login-form-button" onClick = {event => handleSubmit(event)}>Login</button>
                <a className = "login-form-signup" href="/">Don't have an account? Become a cinner!</a>

	        </div>

        </form>
      </>
    )
  }