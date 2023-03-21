import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'

export const Navbar3 = ({stateChanger}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        stateChanger(0);
        localStorage.setItem("isLoggedIn", 0);
        localStorage.setItem('token', "");
        window.location.reload();
        //navigate("/");
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