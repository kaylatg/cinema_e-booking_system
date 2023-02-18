import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Showtimes.css'

export const Showtimes = () => {
  
        return (
          <>
            <div className = "showtimes">
                <div className="showtimes-container">
\                   <iframe className = "showtimes-trailer" width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1>SHOWTIMES</h1>
                    <div className = "showtime-container">
                      <div className = "showtime">
                        <h2>02/23</h2>
                        <hr></hr>
                        <Link className = "showtime-item" to = "/seats">1:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">6:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">7:30 PM</Link>
                      </div>
                      <div className = "showtime">
                        <h2>02/24</h2>
                        <hr></hr>
                        <Link className = "showtime-item" to = "/seats">1:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">6:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">7:30 PM</Link>
                        <Link className = "showtime-item" to = "/seats">9:00 PM</Link>
                      </div>
                      <div className = "showtime">
                        <h2>02/25</h2>
                        <hr></hr>
                        <Link className = "showtime-item" to = "/seats">1:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">6:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">7:30 PM</Link>
                      </div>
                      <div className = "showtime">
                        <h2>02/26</h2>
                        <hr></hr>
                        <Link className = "showtime-item" to = "/seats">1:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">6:00 PM</Link>
                        <Link className = "showtime-item" to = "/seats">7:30 PM</Link>
                      </div>
                    </div>
                </div>
            </div>
          </>
        )
      }

