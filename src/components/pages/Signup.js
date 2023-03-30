import React from 'react'
import '../../App.css'
import './Signup.css'
import { useNavigate } from "react-router-dom";
import {register, sendConfirmationEmail} from '../../services/FromApi.js';

export const Signup = ({stateChanger}) => {
  const navigate = useNavigate();
  const emailRef = React.createRef();
  const userRef = React.createRef();
  const passRef = React.createRef();
  const verPassRef = React.createRef();
  const phoneRef = React.createRef();
  const fnameRef = React.createRef();
  const lnameRef = React.createRef();
  const promoRef = React.createRef();
  const streetRef = React.createRef();
  const cityRef = React.createRef();
  const stateRef = React.createRef();
  const zipRef = React.createRef();
  const countryRef = React.createRef();

    const handleSubmit = event => {
      event.preventDefault();
      if (emailRef.current.value.length < 1 || passRef.current.value.length < 1 || userRef.current.value.length < 1 || phoneRef.current.value.length < 1 || 
        fnameRef.current.value.length < 1 || lnameRef.current.value.length < 1 || promoRef.current.value.length < 1 || streetRef.current.value.length < 1 ||
        cityRef.current.value.length < 1 || stateRef.current.value.length < 1 || zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
          document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
      } else if (passRef.current.value !== verPassRef.current.value) {
          document.getElementById("errorMessage").innerHTML = "Password and Verify Password must be identical";
      } else {
        localStorage.setItem("email", emailRef.current.value);
        register(emailRef.current.value, passRef.current.value, userRef.current.value, phoneRef.current.value, 
          fnameRef.current.value, lnameRef.current.value, promoRef.current.checked, streetRef.current.value,
          cityRef.current.value, stateRef.current.value, zipRef.current.value, countryRef.current.value).then(response =>{
          if (Number.isInteger(response.id)) {
            sendConfirmationEmail(emailRef.current.value).then(response => {
              localStorage.setItem("code", response);
            })
            navigate("/confirmemail", {replace: true});
          } else {
            document.getElementById("errorMessage").innerHTML = response
          }
        })
      }
    }

      return (
        <>
          <form className="signup">
          <h1>Become a Cinner!</h1>
              <div className = "signup-form">
                  <input className = "signup-form-email" ref = {emailRef} name="email" placeholder="email" />
                  <input className = "signup-form-username" ref = {userRef} name="username" placeholder="username" />
                  <input className = "signup-form-password" ref = {passRef} name="password" placeholder="password" />
                  <input className = "signup-form-verify-password" ref = {verPassRef} name="verify-password" placeholder="verify password" />
                  <input className = "signup-form-phone" ref = {phoneRef} name="phone" placeholder="phone number"/>
                  <input className = "signup-form-first-name" ref = {fnameRef} name="first-name" placeholder="first name"/>
                  <input className = "signup-form-last-name" ref = {lnameRef} name="last-name" placeholder="last name"/>
                  <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder="street address"/>
                  <input className = "signup-form-last-name" ref = {cityRef} name="city" placeholder="city"/>
                  <input className = "signup-form-last-name" ref = {stateRef} name="state" placeholder="state"/>
                  <input className = "signup-form-last-name" ref = {zipRef} name="zip" placeholder="zip"/>
                  <input className = "signup-form-last-name" ref = {countryRef} name="country" placeholder="country"/>
                  <div className = "signup-form-promotions">
                    <input className= "signup-form-checkbox" ref = {promoRef} type = "checkbox" id = "promotions" name = "promotions"></input>
                    <label className = "signup-form-checkbox-label"for = "promotions">I'd like to receive emails from Cine City to get exclusive movie promotions and discounts.</label>
                  </div>
                  <button className = "signup-form-button" onClick = {event => handleSubmit(event)}>Sign up</button>
                  <a className = "signup-form-login" href="/login">Already have an account? Log in!</a>
                  <p id = "errorMessage"></p>
              </div>
          </form>
        </>
      )
    }