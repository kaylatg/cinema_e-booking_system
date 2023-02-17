import React from 'react'
import '../../App.css'
import './Signup.css'
import { useNavigate } from "react-router-dom";

export const Signup = ({stateChanger}) => {
    const navigate = useNavigate();
  
      const handleSubmit = event => {
          event.preventDefault();
          navigate("/login");
      }
  
      return (
        <>
          <form className="signup">
          <h1>Become a Cinner!</h1>
              <div className = "signup-form">
                  <label className = "signup-form-email">Email:</label>
                  <input className = "signup-form-email" name="email" placeholder="" />
                  <label className = "signup-form-username">Username:</label>
                  <input className = "signup-form-username" name="username" placeholder="" />
                  <label className = "signup-form-password">Password:</label>
                  <input className = "signup-form-password" name="password" placeholder="" />
                  <label className = "signup-form-verify-password">Verify Password:</label>
                  <input className = "signup-form-verify-password" name="password" placeholder="" />
                  <button className = "signup-form-button" onClick = {event => handleSubmit(event)}>Signup</button>
                  <a className = "signup-form-login" href="/login">Already have an account? Log in!</a>
  
              </div>
  
          </form>
        </>
      )
    }