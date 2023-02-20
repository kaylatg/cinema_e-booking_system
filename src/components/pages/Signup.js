import React from 'react'
import '../../App.css'
import './Signup.css'
import { useNavigate } from "react-router-dom";

export const Signup = ({stateChanger}) => {
  const navigate = useNavigate();

    const handleSubmit = event => {
      navigate("/login");
    }

      return (
        <>
          <form className="signup">
          <h1>Become a Cinner!</h1>
              <div className = "signup-form">
                  <input className = "signup-form-email" name="email" placeholder="email" />
                  <input className = "signup-form-username" name="username" placeholder="username" />
                  <input className = "signup-form-password" name="password" placeholder="password" />
                  <input className = "signup-form-verify-password" name="verify-password" placeholder="verify password" />
                  <button className = "signup-form-button" onClick = {event => handleSubmit(event)}>Signup</button>
                  <a className = "signup-form-login" href="/login">Already have an account? Log in!</a>
              </div>
  
          </form>
        </>
      )
    }