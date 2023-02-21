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
            <div className = "checkout-container">
                <div className = "cart">
                <div className = "tickets">
                <h1>YOUR CART</h1> 
                <div className = "ticket">
                    <img className = "ticket-movie" src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/>
                    <h2 className = "ticket-title">Avatar: The Way of the Water</h2>
                    
                    <h4 className = "ticket-date">2/17/2023</h4>
                    <h4 className = "ticket-time">7:30 PM</h4>
                    <select className = "ticket-age">
                        <option>Adult</option>
                        <option>Child</option>
                    </select>
                    <h4 className = "ticket-seat">Row C seat 3</h4>
                    <h4 className = "ticket-price">$10.00</h4>                
                </div>
                <button>delete ticket</button>
                <div className = "ticket">
                    <img className = "ticket-movie" src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/>
                    <h2 className = "ticket-title">Avatar: The Way of the Water</h2>
                    <h4 className = "ticket-date">2/17/2023</h4>
                    <h4 className = "ticket-time">7:30 PM</h4>
                    <select className = "ticket-age">
                        <option>Adult</option>
                        <option>Child</option>
                    </select>
                    <h4 className = "ticket-seat">Row C seat 4</h4>
                    <h4 className = "ticket-price">$10.00</h4>                    
                </div>
                <button>delete ticket</button>
                 </div>
                    <h1>YOUR TOTAL: $20.00</h1>
                </div>
                <div className = "checkout-form">
                    <input className = "checkout-form-email" name="email" placeholder="email" />
                     <input className = "checkout-form-name" name="name" placeholder="cardholder name" />
                    <input className = "checkout-form-number" name="number" placeholder="card number" />
                    <input className = "checkout-form-date" name="expiration" placeholder="expiration date (e.g. 05/28)" />
                    <input className = "checkout-form-cvv" name="cvv" placeholder="cvv (e.g. 123)" />
                    <button className = "checkout-form-button" onClick = {event => handleSubmit(event)}>Checkout</button>
                    <a href = "/">cancel order</a>
              </div>
            </div>
        </div>
        </>
    )
}