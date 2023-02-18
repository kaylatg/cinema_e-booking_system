import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <nav className = "navbar">
        <div className = "navbar-container">
            <h1>Cine City</h1>
            <ul className = "navbar-list">
                <li className = "navbar-list-item">
                    <Link to ="/">Home</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/about">About</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/login">Login</Link>
                </li>
                <li className = "navbar-list-item">
                    <label className = "navbar-search-icon">&#x1F50E;</label>
                    <input className = "navbar-search-box" name="search" placeholder="" />
                </li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar


