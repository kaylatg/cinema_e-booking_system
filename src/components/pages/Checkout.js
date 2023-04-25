import React from 'react'
import '../../App.css'
import './Checkout.css'
import './Tickets.css'
import { useNavigate } from "react-router-dom";
import {addCardById, getUser} from '../../services/FromApi.js'
import { getUpcomingShowsForMovie } from '../../services/FromApiMovies';
import { createOrder } from '../../services/FromApiBookings';


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
    const promoRef = React.createRef();
    const ticketAgeRef = React.createRef();

    const [tickets, setTickets] = React.useState([]); 
    const [paymentCards, setPaymentCards] = React.useState([]);
    const [show, setShow] = React.useState();
    const seats = JSON.parse(localStorage.getItem("seats"));
    let card;

    React.useEffect(() => {
        getUser(localStorage.getItem("email")).then(response => {
            setPaymentCards(response.payments);
        });

        getUpcomingShowsForMovie(localStorage.getItem('movieid'), '2023-04-01 00:00:00').then((data) => {
            setShow(data);
            console.log(data);
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        if (emailRef.current.value.length < 1 || nameRef.current.value.length < 1 || numRef.current.value.length < 1 || expRef.current.value.length < 1 || 
            cvvRef.current.value.length < 1 || streetRef.current.value.length < 1 || cityRef.current.value.length < 1 || stateRef.current.value.length < 1 ||
             zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
              document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
          } else {
            addCardById(localStorage.getItem("id"), numRef.current.value, nameRef.current.value, expRef.current.value, cvvRef.current.value,
            streetRef.current.value, cityRef.current.value, stateRef.current.value, zipRef.current.value, countryRef.current.value).then(response =>{
              getUser(localStorage.getItem("email")).then(response => {
                setPaymentCards(response.payments);
              });
            })
        }
    }

    const placeOrder = () => {
        createOrder(localStorage.getItem("id"), show.id, paymentCards[0].id, tickets).then(response => {
            navigate("/confirmation");
        });
    }

    const handleSelectCard = (index) => {
        card = paymentCards[index];
    }

    return (
        <>
        <div className = "checkout">
            <div className = "checkout-container">
            <div className="cart">
                <div className="tickets">
                    <h1>YOUR CART</h1>
                    {seats.map((seat) => (
                    <div className="ticket" key={seat.id}>
                        <img
                        className="ticket-movie"
                        src={show.movie.poster}
                        alt={`Photo of the movie poster for ${show.movie.title}`}
                        />
                        <h2 className="ticket-title">{show.movie.title}</h2>

                        <h4 className="ticket-date">{show.showStart}</h4>
                        <h4 className="ticket-time">7:30 PM</h4>
                        <h4 className="ticket-seat">{`Row ${seat.row} seat ${seat.seatNumber}`}</h4>
                        <h4 className="ticket-price">$10.00</h4>
                    </div>
                    ))}
                </div>
                <h1>{`YOUR TOTAL: $${seats.length * 10}.00`}</h1>
            </div>

                <div>
                    {paymentCards.map((card, index) => (
                        <div key={index}>
                        <p>Card Number: {card.cardNumber}</p>
                        <p>Card Name: {card.cardName}</p>
                        <button onClick={() => handleSelectCard(index)}>Select Card</button>
                        </div>
                    ))}
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