import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar2 = ({stateChanger}) => {
    const handleLogout = () => {
        stateChanger(false);
        localStorage.setItem("isLoggedIn", false);
    }

  return (
    <nav className = "navbar">
        <div className = "navbar-container">
            <ul className = "navbar-list">
                <li className = "navbar-list-item">
                    <Link to ="/">Home</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/about">About</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/my-tickets">My Tickets</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/my-profile">My Profile</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}