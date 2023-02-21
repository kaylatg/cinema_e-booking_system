import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminAdjustMovie.css'


export const AdminAdjustMovie = () => {
    return (
      <>
        <div className = "adminadjustmovie">
            <h1>Manage Movie</h1>
            <h2 className = "movie-title">Avatar: The Way of Water</h2>
            <a href = "/adminmovies">go back</a>
            <div className = "showtime-form">
            <hr></hr>
                <h1>Showtimes </h1>
                
                <div className = "adminshowtimes">
                    <div className = "adminshowtime">
                        <h2>02/23</h2>
                        <p>1:00 PM</p>
                        <p>6:00 PM</p>
                        <p>9:00 PM</p>
                      </div>
                      <div className = "adminshowtime">
                        <h2>02/24</h2>
                        <p>1:00 PM</p>
                        <p>7:00 PM</p>
                        <p>10:00 PM</p>
                      </div>
                      <div className = "adminshowtime">
                        <h2>02/25</h2>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                        <p>9:00 PM</p>
                      </div>
                      <div className = "adminshowtime">
                        <h2>02/26</h2>
                        <p>1:00 PM</p>
                        <p>8:00 PM</p>
                        <p>11:00 PM</p>
                      </div>
                      </div>
                <input type="datetime-local" name="movie-datetime" value="2023-02-23T19:30" min="2023-01-01T00:00" max="2023-12-31T00:00"></input>
                <button>add</button>
            </div>
            <div className = "section-form">
            <hr></hr>
                <h1>Section</h1>
                <select className = "change-section">
                        <option>Coming Soon</option>
                        <option>Now Showing</option>
                    </select>
                    <button>save</button>
            </div>
            <div className = "delete-movie">
            <hr></hr>
                    <button>delete movie</button>
            </div>
        </div>
      </>
    )
  }
  
