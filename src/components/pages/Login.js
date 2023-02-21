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

    const handleSubmitAdmin = event => {
      event.preventDefault();
      stateChanger(true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("isAdmin", true);
      navigate("/adminhome");
  }

    return (
      <>
        <form className="login">
        <h1>Welcome Back Cinner!</h1>
	        <div className = "login-form">
		        <input className = "login-form-email" name="email" placeholder="email" />
		        <input className = "login-form-password" name="password" placeholder="password" />
            <button className = "login-form-button" onClick = {event => handleSubmit(event)}>Log in</button>
            <a className = "login-form-signup" href="/signup">Don't have an account? Sign up!</a>
            <a className = "admin-login" href="/adminhome" onClick = {event => handleSubmitAdmin(event)} >Admin Login</a>
	        </div>

        </form>
      </>
    )
  }