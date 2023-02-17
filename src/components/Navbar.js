import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <nav className = "navbar">
        <div className = "navbar-container">
            <a className = "navbar-logo" href="/"><h1>CINE CITY</h1></a>
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


