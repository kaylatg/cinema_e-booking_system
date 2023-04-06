import React from 'react'
import '../../App.css'
import './Login.css'
import { useNavigate } from "react-router-dom";
import {login} from '../../services/FromApi.js'

export const Login = ({stateChanger}) => {
  const navigate = useNavigate();
  const emailRef = React.createRef();
  const passRef = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();
        login(emailRef.current.value, passRef.current.value).then(response => {
          if (response.user.status === "ACTIVE") {
            if (response.success === "true") {
              if (response.user.type === "CUSTOMER") {
                stateChanger(1);
                localStorage.setItem("isLoggedIn", 1);
              } else {
                localStorage.setItem("isLoggedIn", 2);
                stateChanger(2);
              }
              navigate("/", {replace: true}); // true or statechanger num?
              localStorage.setItem('token', response.key);
              localStorage.setItem('email', response.user.email);
            } else {
              document.getElementById("errorMessage").innerHTML = "Invalid email or password";
            }
          } else {
            document.getElementById("errorMessage").innerHTML = "Your account is not active";
          }
        });
    }

    return (
      <>
        <form className="login">
        <h1>Welcome Back Cinner!</h1>
	        <div className = "login-form">
		        <input className = "login-form-email" ref = {emailRef} name="email" placeholder="email" />
		        <input className = "login-form-password" ref = {passRef} name="password" placeholder="password" />
            <button className = "login-form-button" onClick = {event => handleSubmit(event)}>Log in</button>
            <a className = "login-form-signup" href="/signup">Don't have an account? Sign up!</a>
            <a className = "login-form-signup" href="/forgotpassword">Forgot password</a>
            <p id = "errorMessage"></p>
          </div>

        </form>
      </>
    )
  }