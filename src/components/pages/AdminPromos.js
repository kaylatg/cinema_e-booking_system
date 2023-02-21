import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminPromos.css'


export const AdminPromos = () => {
    return (
      <>
        <div className = "adminpromos">
            <h1>Adjust Promotions</h1>
            <div className = "current-promos">
                <h2>Current Promotions</h2>
                <ul>
                    <li>$5 Tuesdays</li>
                    <li>Buy 2 tickets, get one free</li>
                </ul>
            </div>
            <hr></hr>
            <div className = "add-promos">
                <h2>Add Promotions</h2>
                <input type="text"></input>
                <button>add</button>
            </div>
        </div>
      </>
    )
  }
  
