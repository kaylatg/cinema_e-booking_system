import React from 'react'
import '../../App.css'
import './Cards.css'
import { useNavigate } from "react-router-dom";
import {addCardById} from '../../services/FromApi.js'

export const Cards = ({stateChanger}) => {

    const nameRef = React.createRef();
    const numRef = React.createRef();
    const expRef = React.createRef();
    const cvvRef = React.createRef();
    const streetRef = React.createRef(); // the rest of these fields should be pulled from getUser as well (delete all of these and user from form below once switched to api pull via getUser)
    const cityRef = React.createRef();
    const stateRef = React.createRef();
    const zipRef = React.createRef();
    const countryRef = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();
        if (nameRef.current.value.length < 1 || numRef.current.value.length < 1 || expRef.current.value.length < 1 || 
            cvvRef.current.value.length < 1 || streetRef.current.value.length < 1 || cityRef.current.value.length < 1 || stateRef.current.value.length < 1 ||
             zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
              document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
          } else {
            addCardById(localStorage.getItem("email"), nameRef.current.value, numRef.current.value, expRef.current.value, 
              cvvRef.current.value, streetRef.current.value, cityRef.current.value,zipRef.current.value,
              countryRef.current.value).then(response =>{
              if (response.success === true) {
                //nothing
              } else {
                document.getElementById("errorMessage").innerHTML = "Invalid card information"
              }
            })
        }
    }

      return (
        <>
          <div className="cards">
          <h1>Add a card</h1>
              <div className = "cards-container">
              <input className = "checkout-form-number" ref = {numRef} name="number" placeholder="card number" />
                    <input className = "checkout-form-date" ref = {expRef} name="expiration" placeholder="expiration date (e.g. 05/28)" />
                    <input className = "checkout-form-cvv" ref = {cvvRef} name="cvv" placeholder="cvv (e.g. 123)" />
                    <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder="street address"/>
                    <input className = "signup-form-last-name" ref = {cityRef} name="city" placeholder="city"/>
                    <input className = "signup-form-last-name" ref = {stateRef} name="state" placeholder="state"/>
                    <input className = "signup-form-last-name" ref = {zipRef} name="zip" placeholder="zip"/>
                    <input className = "signup-form-last-name" ref = {countryRef} name="country" placeholder="country"/>
                    <button className = "add-card-button" onClick = {event => handleSubmit(event)}>Add</button>
              </div>
              <p id = "errorMesssage"></p>
  
          </div>
        </>
      )
    }