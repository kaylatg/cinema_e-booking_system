import React from 'react'
import '../../App.css'
import './AdminHome.css'
import { setupTheatre, setupShowrooms } from '../../services/FromApiMovies'


export const AdminHome = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        setupTheatre().then(response => {
          localStorage.setItem("theatreId", response.id)
          setupShowrooms(response.id).then(response => {
            console.log(response)
            localStorage.setItem("showroomId", response.showRooms[0].id)
            alert("Theatre configuration successful")
          })
        });
    }

    return (
      <>
        <div className = "adminhome">
            <h1>Admin Home</h1>
            <div className = "admin-buttons">
                <button classname = "admin-button"><a href = "/AdminMovies">Manage Movies</a></button>
                <button classname = "admin-button"><a href = "/AdminPromos">Manage Promotions</a></button>
                <button classname = "admin-button" onClick={event => handleSubmit(event)}>Setup Theatre Configuration</button>
            </div>
        </div>
      </>
    )
  }
  
