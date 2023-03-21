import React from 'react';
import '../../App.css'
import './Login.css'
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from '../../services/FromApi';

function ConfirmEmail() {

    const codeRef = React.createRef();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (codeRef.current.value === localStorage.getItem("code")) {
            getUser(localStorage.getItem("email")).then(response => {
                updateUser("ACTIVE", response.email, response.password,
                response.username, response.phone, response.firstName,
                response.lastName, response.recievePromotions,
                response.address.street, response.address.city, response.address.state,
                response.address.zipcode, response.address.country).then(response => {
                    localStorage.removeItem("code");
                    localStorage.removeItem("email");
                });
            });
            navigate("/login", {replace: true});
        } else {
            document.getElementById("errorMessage").innerHTML = "Incorrect code";
        }
    }

    return (
        <>
          <form className="login">
          <h1>Input Confirmation Code</h1>
              <div className = "login-form">
                  <input className = "login-form-email" ref = {codeRef} name="email" placeholder="email" />
              <button className = "login-form-button" onClick = {event => handleSubmit(event)}>Confirm</button>
              <p id = "errorMessage"></p>
            </div>
  
          </form>
        </>
      )
}

export default ConfirmEmail;