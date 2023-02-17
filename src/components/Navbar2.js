import React from 'react'
import './Navbar.css'


function Navbar2() {
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
                    <a href="/my-tickets">My Tickets</a>
                </li>
                <li className = "navbar-list-item">
                    <a href="/my-profile">My Profile</a>
                </li>
                <li className = "navbar-list-item">
                    <a href="/logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar2