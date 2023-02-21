import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar3 = ({stateChanger}) => {
    const handleLogout = () => {
        stateChanger(false);
        localStorage.setItem("isLoggedIn", false);
    }

  return (
    <nav className = "navbar">
        <div className = "navbar-container">
            <h1>Cine City</h1>
            <ul className = "navbar-list">
                <li className = "navbar-list-item">
                    <Link to ="/adminhome">Home</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/adminpromos">Manage promotions</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/adminmovies">Manage movies</Link>
                </li>
                <li className = "navbar-list-item">
                    <Link to ="/" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}