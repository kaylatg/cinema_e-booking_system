import React from 'react'
import '../../App.css'
import './Checkout.css'
import './Tickets.css'
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
      navigate("/confirmation");
    }
    return (
        <>
        <div className = "checkout">
        <h1>YOUR CART</h1> 
            <div className = "checkout-container">
                <div className = "cart">
                    <h3>Show each ticket here</h3>
                    <h3>include movie title, age, row/seat, time, date, and price for each ticket</h3>
                    <h1>Total: $....</h1>
                </div>
                <div className = "checkout-form">
                    <input className = "checkout-form-email" name="email" placeholder="email" />
                     <input className = "checkout-form-name" name="name" placeholder="cardholder name" />
                    <input className = "checkout-form-number" name="number" placeholder="card number" />
                    <input className = "checkout-form-date" name="expiration" placeholder="expiration date (e.g. 05/28)" />
                    <input className = "checkout-form-cvv" name="cvv" placeholder="cvv (e.g. 123)" />
                    <button className = "checkout-form-button" onClick = {event => handleSubmit(event)}>Checkout</button>
              </div>
            </div>
        </div>
        </>
    )
}