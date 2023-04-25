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
             <input className = "signup-form-password" ref = {passRef} name="password" placeholder="password" type="password"/>
             <input className = "signup-form-verify-password" ref = {verPassRef} name="verify-password" placeholder="verify password" type="password"/>
             <input className = "signup-form-phone" ref = {phoneRef} name="phone" placeholder="phone number"/>
             <input className = "signup-form-first-name" ref = {fnameRef} name="first-name" placeholder="first name"/>
             <input className = "signup-form-last-name" ref = {lnameRef} name="last-name" placeholder="last name"/>
             <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder="street address"/>
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

    const adminlogin = event => {
      event.preventDefault();
      localStorage.setItem("isLoggedIn", "2");
      stateChanger(2);
      navigate("/", {replace: true});
    }



    const handleSubmit = event => {
      event.preventDefault();
      if (passRef.current.value.length < 1 || userRef.current.value.length < 1 || phoneRef.current.value.length < 1 || 
        fnameRef.current.value.length < 1 || lnameRef.current.value.length < 1 || streetRef.current.value.length < 1 ||
        cityRef.current.value.length < 1 || stateRef.current.value.length < 1 || zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
          document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
      } else if (passRef.current.value !== verPassRef.current.value) {
          document.getElementById("errorMessage").innerHTML = "Password and Verify Password must be identical";
      } else {
        updateUser("ACTIVE", localStorage.getItem("email"), passRef.current.value, userRef.current.value, phoneRef.current.value, 
          fnameRef.current.value, lnameRef.current.value, promoRef.current.checked, streetRef.current.value,
          cityRef.current.value, stateRef.current.value, zipRef.current.value, countryRef.current.value).then(response =>{
            document.getElementById("errorMessage").innerHTML = "Profile updated successfully";
        })
      }
    }

    getUser(localStorage.getItem("email")).then(response => {
      localStorage.setItem("id", response.id);
     setProfileForm(<div className="profile">
     <h1>Edit profile</h1>
         <div className = "profile-container">
           <img src = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"></img>
             <label className = "signup-form-email" ref = {emailRef} name="email">{response.email}</label>
             <input className = "signup-form-username" ref = {userRef} name="username" placeholder = "username" defaultValue={response.username}/>
             <input className = "signup-form-password" ref = {passRef} name="password" placeholder = "password"  defaultValue={response.password} type="password"/>
             <input className = "signup-form-verify-password" ref = {verPassRef} name="verify-password" placeholder = "verify password" defaultValue={response.password} type="password"/>
             <input className = "signup-form-phone" ref = {phoneRef} name="phone" placeholder = "phone number" defaultValue={response.phone}/>
             <input className = "signup-form-first-name" ref = {fnameRef} name="first-name" placeholder = "first name" defaultValue={response.firstName}/>
             <input className = "signup-form-last-name" ref = {lnameRef} name="last-name" placeholder = "last name"  defaultValue={response.lastName}/>
             <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder = "street address" defaultValue={response.address.street}/>
             <input className = "signup-form-last-name" ref = {stateRef} name="state" placeholder = "state"  defaultValue={response.address.state}/>
             <input className = "signup-form-last-name" ref = {zipRef} name="zip" placeholder = "zip" defaultValue={response.address.zipcode}/>
             <input className = "signup-form-last-name" ref = {countryRef} name="country" placeholder = "country" defaultValue={response.address.country}/>
             <button className = "update-profile-button" onClick = {event => handleSubmit(event)}>Update Profile</button>
         </div>
         <div className = "signup-form-promotions">
              <input className= "signup-form-checkbox" ref = {promoRef} type = "checkbox" id = "promotions" name = "promotions" defaultChecked={response.recievePromotions}></input>
              <label className = "signup-form-checkbox-label"for = "promotions">Receive emails from Cine City to get exclusive movie promotions and discounts.</label>
              <hr></hr>
              <p id = "errorMessage"></p>
        </div>
        <hr></hr>
        <a className = "login-form-signup" href="/cards">Add Payment Card</a>
        <hr></hr>
        <button className = "adminview" onClick={event => adminlogin(event)}>Switch to Admin View</button>

             
 
     </div>);
    })

    //<button className = "adminview" onClick={event => adminlogin(event)}>Switch to Admin View</button>


      return (
        <>
          {profileform}
        </>
      )
    }