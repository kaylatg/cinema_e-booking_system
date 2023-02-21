import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminHome.css'


export const AdminHome = () => {
    return (
      <>
        <div className = "adminhome">
            <h1>Admin Home</h1>
            <div className = "admin-buttons">
                <button classname = "admin-button"><a href = "/AdminMovies">Manage Movies</a></button>
                <button classname = "admin-button"><a href = "/AdminPromos">Manage Promotions</a></button>
            </div>
        </div>
      </>
    )
  }
  
