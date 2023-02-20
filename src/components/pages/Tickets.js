import React from 'react'
import '../../App.css'
import './Tickets.css'

export const Tickets = () => {
  
    return (
        <>
        <div className = "tickets">
        <h1>MY TICKETS</h1> 
            <div className = "tickets-container">
                <div className = "ticket">
                    <img className = "ticket-movie" src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/>
                    <h2 className = "ticket-title">Avatar: The Way of the Water</h2>
                    <h4 className = "ticket-date">2/17/2023</h4>
                    <h4 className = "ticket-time">7:30 PM</h4>
                    <h4 className = "ticket-age">Adult</h4>
                    <h4 className = "ticket-seat">Row C seat 3</h4>
                </div>
                <div className = "ticket">
                    <img className = "ticket-movie" src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/>
                    <h2 className = "ticket-title">Avatar: The Way of the Water</h2>
                    <h4 className = "ticket-date">2/17/2023</h4>
                    <h4 className = "ticket-time">7:30 PM</h4>
                    <h4 className = "ticket-age">Child</h4>
                    <h4 className = "ticket-seat">Row C seat 4</h4>
                </div>
            </div>
        </div>
        </>
    )
}