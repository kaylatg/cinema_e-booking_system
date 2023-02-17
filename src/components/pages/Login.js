import React from 'react'
import '../../App.css'
import './Login.css'


function Login() {
    return (
      <>
        <form className="login">
	        <h1>Login</h1>
	        <div className = "login-form">
		        <label className = "login-form-email">Email:</label>
		        <input className = "login-form-email" name="email" placeholder="" />
                <label className = "login-form-password">Password</label>
		        <input className = "login-form-password" name="password" placeholder="" />
                <button className = "login-form-button">Login</button>
	        </div>
	        
        </form>
      </>
    )
  }
  
  export default Login