import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminPromos.css'
import { createPromotion } from '../../services/FromApiMovies'


export const AdminPromos = () => {

    let discountRef = React.createRef()
    let codeRef = React.createRef()
    let dateRef = React.createRef()
  
    const handleSubmit = (event) => {
        event.preventDefault()
        createPromotion(discountRef.current.value, '2023-04-03', dateRef.current.value + ":00", codeRef.current.value).then((data) => {
            if (Number.isInteger(data.id)) {
              console.log("success") // Promotion was successfully added
            } else {
              console.log("failure") // Promotion was not added, likely cause it already exists, may wanna display it somewhere in UI
            }
        })
    }

    // Needs fields for discount, code, and date
    return (
      <>
        <div className = "adminpromos">
            <h1>Adjust Promotions</h1>
            <hr></hr>
            <div className = "add-promos">
                <h2>Add Promotions</h2>
                <input name="code" ref={codeRef} placeholder="discount code" />
                <input name="discount" ref={discountRef} placeholder="discount percentage" />
                <input type="datetime-local" name="movie-datetime" defaultValue="2023-04-06T19:30" min="2023-01-01T00:00" max="2023-12-31T00:00" ref = {dateRef}></input>
                <button onClick={event => handleSubmit(event)}>add</button>
            </div>
        </div>
      </>
    )
  }
  
