import React from 'react'
import '../../App.css'
import './ForgotPassword.css'
import {getUser} from '../../services/FromApi.js';
import {updatePasswordById} from '../../services/FromApi.js';

export const ForgotPassword = ({stateChanger}) => {

    const passRef = React.createRef();
    const verPassRef = React.createRef();


    const handleSubmit = event => {
        event.preventDefault();
        if (passRef.current.value !== verPassRef.current.value) {
            document.getElementById("errorMessage").innerHTML = "Password and Verify Password must be identical";
        } else {
            updatePasswordById(getUser(),passRef);
        }
      }


      return (
        <>
          <div className="forgotPass">
          <h1>Forgot Password</h1>
              <div className = "forgotpass-container">
                    <input className = "signup-form-password" ref = {passRef} name="password" placeholder="new password" />
                    <input className = "signup-form-verify-password" ref = {verPassRef} name="verify-password" placeholder="verify password" />
                    <button className = "signup-form-button" onClick = {event => handleSubmit(event)}>Submit</button>
              </div>
  
          </div>
        </>
      )
    }