import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <a className = "navbar-logo" href="/home"><img src="./images/cine_city_logo.png" alt="Photo of cine city logo"/></a>
                <ul className = "navbar-list">
                    <li className = "navbar-list-item">
                        <a href="/home">Home</a>
                    </li>
                    <li className = "navbar-list-item">
                        <a href="/about">About</a>
                    </li>
                    <li className = "navbar-list-item">
                        <a href="/contact">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar