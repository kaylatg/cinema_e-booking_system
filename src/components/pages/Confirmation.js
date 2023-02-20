import React from 'react'
import '../../App.css'
import './Confirmation.css'
import { useNavigate } from "react-router-dom";

export const Confirmation = () => {
  const navigate = useNavigate();

    const handleSubmit = event => {
      navigate("/my-tickets");
    }

      return (
        <>
          <form className="confirmation">
          <h1>YOUR ORDER IS CONFIRMED!</h1>
              <div className = "confirmation-container">
                    <h3>We've emailed you your tickets, but you can also access them here.</h3>
                    <button className = "confirmation-button" onClick = {event => handleSubmit(event)}>My Tickets</button>
                    <h3>Enjoy the movie!</h3>
              </div>
  
          </form>
        </>
      )
    }