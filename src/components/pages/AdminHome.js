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
                <button classname = "admin-button">Manage Movies</button>
                <button classname = "admin-button">Manage promotions</button>
            </div>
        </div>
      </>
    )
  }
  
