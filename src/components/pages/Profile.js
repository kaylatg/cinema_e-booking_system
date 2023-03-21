import React, {useState} from 'react'
import '../../App.css'
import './Profile.css'
import './Signup.css'
import { useNavigate } from "react-router-dom";
import {updateUser} from '../../services/FromApi.js';
import { getUser } from '../../services/FromApi.js';

export const Profile = ({stateChanger}) => {

  const navigate = useNavigate();
  const emailRef = React.createRef();
  const userRef = React.createRef();
  const passRef = React.createRef();
  const verPassRef = React.createRef();
  const phoneRef = React.createRef();
  const fnameRef = React.createRef();
  const lnameRef = React.createRef();
  const streetRef = React.createRef();
  const cityRef = React.createRef();
  const stateRef = React.createRef();
  const zipRef = React.createRef();
  const countryRef = React.createRef();
  const promoRef = React.createRef();
  const [profileform, setProfileForm] = useState(
    (<div className="profile">
     <h1>Edit profile</h1>
         <div className = "profile-container">
           <img src = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"></img>
             <label className = "signup-form-email" ref = {emailRef} name="email" placeholder="email" />
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
             <button className = "update-profile-button" onClick = {event => handleSubmit(event)}>Update Profile</button>
         </div>
         <div className = "signup-form-promotions">
               <input className= "signup-form-checkbox" ref = {promoRef} type = "checkbox" id = "promotions" name = "promotions"></input>
               <label className = "signup-form-checkbox-label"for = "promotions">Receive emails from Cine City to get exclusive movie promotions and discounts.</label>
             </div>
 
     </div>)
  );



    const handleSubmit = event => {
      event.preventDefault();
      if (passRef.current.value.length < 1 || userRef.current.value.length < 1 || phoneRef.current.value.length < 1 || 
        fnameRef.current.value.length < 1 || lnameRef.current.value.length < 1 || streetRef.current.value.length < 1 ||
        cityRef.current.value.length < 1 || stateRef.current.value.length < 1 || zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
          document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
      } else if (passRef.current.value !== verPassRef.current.value) {
          document.getElementById("errorMessage").innerHTML = "Password and Verify Password must be identical";
      } else {
        updateUser(localStorage.getItem("email"), passRef.current.value, userRef.current.value, phoneRef.current.value, 
          fnameRef.current.value, lnameRef.current.value, promoRef.current.checked, streetRef.current.value,
          cityRef.current.value, stateRef.current.value, zipRef.current.value, countryRef.current.value).then(response =>{
            document.getElementById("errorMessage").innerHTML = "Profile updated successfully";
        })
      }
    }

    getUser(localStorage.getItem("email")).then(response => {
      /*
        The following variables can be used to get each field from the user's current data
        response.email (user's cannot change their email)
        response.password
        response.phone
        response.username
        response.firstName
        response.lastName
        response.recievePromotions
        response.payments (array of payment methods), you will need to loop through to get each one
          lets say we want their first payment method:
          response.payments[0].address.street
          response.payments[0].address.state
          response.payments[0].address.zipcode
          response.payments[0].address.country
          response.payments[0].cardNumber
          response.payments[0].name
          response.payments[0].expiration
          response.payments[0].cvv
        response.address.street
        response.address.state
        response.address.zipcode
        response.address.country
      */
     // Then you should fill in the fields with the user's current data
     // Also add a checkbox to allow the user to update whether or not they want to recieve promotions

     setProfileForm(<div className="profile">
     <h1>Edit profile</h1>
         <div className = "profile-container">
           <img src = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"></img>
             <label className = "signup-form-email" ref = {emailRef} name="email">{response.email}</label>
             <input className = "signup-form-username" ref = {userRef} name="username" placeholder = "username" defaultValue={response.username}/>
             <input className = "signup-form-password" ref = {passRef} name="password" placeholder = "password"  defaultValue={response.password} />
             <input className = "signup-form-verify-password" ref = {verPassRef} name="verify-password" placeholder = "verify password" defaultValue={response.password} />
             <input className = "signup-form-phone" ref = {phoneRef} name="phone" placeholder = "phone number" defaultValue={response.phone}/>
             <input className = "signup-form-first-name" ref = {fnameRef} name="first-name" placeholder = "first name" defaultValue={response.firstName}/>
             <input className = "signup-form-last-name" ref = {lnameRef} name="last-name" placeholder = "last name"  defaultValue={response.lastName}/>
             <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder = "street address" defaultValue={response.address.street}/>
             <input className = "signup-form-last-name" ref = {cityRef} name="city" placeholder = "city" defaultValue={response.address.city}/>
             <input className = "signup-form-last-name" ref = {stateRef} name="state" placeholder = "state"  defaultValue={response.address.state}/>
             <input className = "signup-form-last-name" ref = {zipRef} name="zip" placeholder = "zip" defaultValue={response.address.zipcode}/>
             <input className = "signup-form-last-name" ref = {countryRef} name="country" placeholder = "country" defaultValue={response.address.country}/>
             <button className = "update-profile-button" onClick = {event => handleSubmit(event)}>Update Profile</button>
         </div>
         <div className = "signup-form-promotions">
               <input className= "signup-form-checkbox" ref = {promoRef} type = "checkbox" id = "promotions" name = "promotions"></input>
               <label className = "signup-form-checkbox-label"for = "promotions">Receive emails from Cine City to get exclusive movie promotions and discounts.</label>
               <p id = "errorMessage"></p>
             </div>
             
 
     </div>);
    })


      return (
        <>
          {profileform}
        </>
      )
    }