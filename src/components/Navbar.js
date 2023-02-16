import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className = "navbar">
        <div className = "navbar-container">
            <a className = "navbar-logo" href="/"><img src="./images/cine_city_logo.png" alt="Photo of cine city logo"/></a>
            <ul className = "navbar-list">
                <li className = "navbar-list-item">
                    <a href="/">Home</a>
                </li>
                <li className = "navbar-list-item">
                    <a href="/about">About</a>
                </li>
                <li className = "navbar-list-item">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar