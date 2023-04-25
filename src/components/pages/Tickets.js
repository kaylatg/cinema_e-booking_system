import React from 'react'
import '../../App.css'
import './Tickets.css'
import { getUserOrders } from '../../services/FromApiBookings'

export const Tickets = () => {

    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        getUserOrders(localStorage.getItem('id')).then((data) => {
            setOrders(data);
            console.log(data);
        });
    }, []);

    return (
        <>
        <div className="tickets">
            <h1>MY TICKETS</h1>
            <div className="tickets-container">
                {orders.map((order, index) => (
                    <div className="ticket" key={index}>
                        <img className="ticket-movie" src={order.show.movie.poster} alt={`Photo of the movie poster for ${order.show.movie.title}`} />
                        <h2 className="ticket-title">{order.show.movie.title}</h2>
                        <h4 className="ticket-date">{order.show.showStart}</h4>
                        <h4 className="ticket-time">{order.tickets[index].type}</h4>
                        <h4 className="ticket-age">{order.tickets[index].seat}</h4>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}