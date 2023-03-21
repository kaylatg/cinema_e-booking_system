import React from 'react'
import '../../App.css'
import './Checkout.css'
import './Tickets.css'
import { useNavigate } from "react-router-dom";
import {addCardById} from '../../services.FromApi.js'


export const Checkout = () => {
    const navigate = useNavigate();
    const userRef = React.createRef(); // should be removed when we change to pulling username from db (must make it so users have to be signed up/logged in to purchase tickets)
    const emailRef = React.createRef();
    const nameRef = React.createRef();
    const numRef = React.createRef();
    const expRef = React.createRef();
    const cvvRef = React.createRef();
    const streetRef = React.createRef(); // the rest of these fields should be pulled from getUser as well (delete all of these and user from form below once switched to api pull via getUser)
    const cityRef = React.createRef();
    const stateRef = React.createRef();
    const zipRef = React.createRef();
    const countryRef = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();
        if (emailRef.current.value.length < 1 || nameRef.current.value.length < 1 || numRef.current.value.length < 1 || expRef.current.value.length < 1 || 
            cvvRef.current.value.length < 1 || streetRef.current.value.length < 1 || cityRef.current.value.length < 1 || stateRef.current.value.length < 1 ||
             zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
              document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
          } else {
            addCardById(userRef.current.value, emailRef.current.value, nameRef.current.value, numRef.current.value, expRef.current.value, 
              cvvRef.current.value, streetRef.current.value, cityRef.current.value,zipRef.current.value,
              countryRef.current.value).then(response =>{
              if (response.success === true) {
                navigate("/confirmation", {replace: true});
              } else {
                document.getElementById("errorMessage").innerHTML = "Invalid card information"
              }
            })
        }
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
                <a href = "/my-tickets">delete</a>
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
                <a href = "/my-tickets">delete</a>
                 </div>
                    <h1>YOUR TOTAL: $20.00</h1>
                </div>
                <div className = "checkout-form">
                    <input className = "checkout-form-username" ref = {userRef} name="usename" placeholder="username" />
                    <input className = "checkout-form-email" ref = {emailRef} name="email" placeholder="email" />
                    <input className = "checkout-form-name" ref = {nameRef} name="name" placeholder="cardholder name" />
                    <input className = "checkout-form-number" ref = {numRef} name="number" placeholder="card number" />
                    <input className = "checkout-form-date" ref = {expRef} name="expiration" placeholder="expiration date (e.g. 05/28)" />
                    <input className = "checkout-form-cvv" ref = {cvvRef} name="cvv" placeholder="cvv (e.g. 123)" />
                    <input className = "signup-form-last-name" ref = {streetRef} name="street-address" placeholder="street address"/>
                    <input className = "signup-form-last-name" ref = {cityRef} name="city" placeholder="city"/>
                    <input className = "signup-form-last-name" ref = {stateRef} name="state" placeholder="state"/>
                    <input className = "signup-form-last-name" ref = {zipRef} name="zip" placeholder="zip"/>
                    <input className = "signup-form-last-name" ref = {countryRef} name="country" placeholder="country"/>
                    <button className = "checkout-form-button" onClick = {event => handleSubmit(event)}>Checkout</button>
                    <a href = "/">cancel order</a>
                    <p id = "errorMesssage"></p>
              </div>
            </div>
        </div>
        </>
    )
}