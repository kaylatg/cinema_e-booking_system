import React from 'react'
import '../../App.css'
import './ForgotPassword.css'
import './Signup.css'
import {getUser, sendPasswordEmail} from '../../services/FromApi.js';

export const ForgotPasswordInitial = ({stateChanger}) => {

    const emailRef = React.createRef();


    const handleSubmit = event => {
        event.preventDefault();
        getUser(emailRef.current.value).then(response => {
            if (response.message !== "User not found") {
                localStorage.setItem("email", emailRef.current.value);
                sendPasswordEmail(emailRef.current.value).then(response => {
                    document.getElementById("errorMessage").innerHTML = "Check your email for a link to reset your password";
                })
            } else {
                document.getElementById("errorMessage").innerHTML = response.message;
            }
        })
      }


      return (
        <>
          <div className="forgotPass">
          <h1>Forgot Password</h1>
              <div className = "forgotpass-container">
                    <input className = "signup-form-email" ref = {emailRef} name="email" placeholder="email" />
                    <button className = "signup-form-button" onClick = {event => handleSubmit(event)}>Submit</button>
                    <p id = "errorMessage"></p>
              </div>
  
          </div>
        </>
      )
    }