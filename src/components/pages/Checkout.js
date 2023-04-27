import React from 'react'
import '../../App.css'
import './Checkout.css'
import './Tickets.css'
import { useNavigate } from "react-router-dom";
import {addCardById, getUser, getPromotion} from '../../services/FromApi.js'
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

    const [paymentCards, setPaymentCards] = React.useState([]);
    const [show, setShow] = React.useState({});
    const [card, setCard] = React.useState({});
    const [selectedAges, setSelectedAges] = React.useState(Array(JSON.parse(localStorage.getItem("seats")).length).fill("Adult"));
    const [total, setTotal] = React.useState(JSON.parse(localStorage.getItem("seats")).length * 10.00);
    const [promo, setPromo] = React.useState();

    React.useEffect(() => {
        getUser(localStorage.getItem("email")).then(response => {
            setPaymentCards(response.payments);
        });

        getUpcomingShowsForMovie(localStorage.getItem('movieid'), '2023-04-01 00:00:00').then((data) => {
            setShow(data[0]);
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        if (!card.name) {
            if (emailRef.current.value.length < 1 || nameRef.current.value.length < 1 || numRef.current.value.length < 1 || expRef.current.value.length < 1 || 
                cvvRef.current.value.length < 1 || streetRef.current.value.length < 1 || cityRef.current.value.length < 1 || stateRef.current.value.length < 1 ||
                 zipRef.current.value.length < 1 || countryRef.current.value.length < 1) { 
                  document.getElementById("errorMessage").innerHTML = "Please fill out all fields or select a payment card before submitting form";
            } else {
                addCardById(localStorage.getItem("id"), numRef.current.value, nameRef.current.value, expRef.current.value, cvvRef.current.value,
                streetRef.current.value, cityRef.current.value, stateRef.current.value, zipRef.current.value, countryRef.current.value).then(response =>{
                  getUser(localStorage.getItem("email")).then(response => {
                    setPaymentCards(response.payments);
                    setCard(response.payments[0]);
                    placeOrder();
                  });
                })
            }
        } else {
            placeOrder()
        }
    }

    const handleApplyPromo = event => {
        event.preventDefault();
        getPromotion(promoRef.current.value).then(response => {
            if (response) {
                document.getElementById("errorMessage").innerHTML = "Promotion applied!";
                setTotal(total * ((100 - response.discount) / 100));
                setPromo(response);
            } else {
                document.getElementById("errorMessage").innerHTML = "Promotion not found";
            }
        });
    }

    function handleSelectAge(index, event) {
        const selectedAge = event.target.value;
        setSelectedAges(prevAges => {
          const newAges = [...prevAges];
          newAges[index] = selectedAge;
          return newAges;
        });
      }

    function placeOrder() {
        const seats = JSON.parse(localStorage.getItem("seats"));
        const newtickets = seats.map((seat, index) => ({
            type: selectedAges[index],
            price: "10.00",
            show_id: show.id,
            seat: {
              id: seat.id
            }
        }));
        console.log(newtickets)
        
        if (promo) {
            createOrder(localStorage.getItem("id"), show.id, card.id, newtickets, promo.id).then(response => {
                navigate("/confirmation");
            });
        } else {
            createOrder(localStorage.getItem("id"), show.id, card.id, newtickets).then(response => {
                navigate("/confirmation");
            });
        }
    }

    const handleSelectCard = (index) => {
        setCard(paymentCards[index]);
    }

    function renderCheckout(seats) {
        return (
            <>
            {show.movie && seats.map((seat, index) => (
                <div className="ticket" key={seat.id}>
                    <img
                    className="ticket-movie"
                    src={show.movie.poster}
                    alt={`Photo of the movie poster for ${show.movie.title}`}
                    />
                    <h2 className="ticket-title">{show.movie.title}</h2>

                    <h4 className="ticket-date">{show.showStart}</h4>
                    <h4 className="ticket-time">7:30 PM</h4>
                    <select className = "ticket-age" onChange={(event) => handleSelectAge(index, event)}>
                        <option>Adult</option>
                        <option>Child</option>
                    </select>
                    <h4 className="ticket-seat">{`Row ${seat.row} seat ${seat.seatNumber}`}</h4>
                    <h4 className="ticket-price">$10.00</h4>
                </div>
            ))}
        </>
        )
    }

    return (
        <>
        <div className = "checkout">
            <div className = "checkout-container">
                <div className="cart">
                    <div className="tickets">
                        <h1>YOUR CART</h1>
                        {renderCheckout(JSON.parse(localStorage.getItem("seats")))}
                    </div>
                    <h1>YOUR TOTAL: ${total}</h1>
                </div>
                <div>
                    {paymentCards.map((card, index) => (
                        <div key={index} className = "payment-card-wrapper">
                            <p>Card Number: {card.cardNumber}</p>
                            <p>Card Name: {card.name}</p>
                            <button onClick={() => handleSelectCard(index)}>Select Card</button>
                        </div>
                    ))}
                </div>
                
            </div>
            <hr></hr>
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
                    <p id = "promocode">Promo Code:</p>
                    <input ref = {promoRef} name="promo" placeholder="promo code" />
                    <button className = "checkout-form-button" onClick = {event => handleApplyPromo(event)}>Apply Promo Code</button>
                    <hr></hr>
                    <button className = "checkout-form-button" onClick = {event => handleSubmit(event)}>Checkout</button>
                    <p id = "errorMessage"></p>
              </div>
        </div>
        </>
    )
}