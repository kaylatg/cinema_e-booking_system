import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminAddMovie.css'


export const AdminAddMovie = () => {

    const handleSubmit = event => {
        
    }


    return (
      <>
        <div className = "adminaddmovie">
            <h1>Add Movie</h1>
            <button type="submit">
                <img src="imgs/addMovie.png" alt="add movie poster" border="0" />
            </button>

            <div className = "addmovieform">
                <input className = "movie-title" name="movie" placeholder="movie title*" />
                <input className = "movie-rating" name="rating" placeholder="MPAA-US film rating code*" />
                <input className = "movie-trailer" name="trailer" placeholder="trailer link*" />
                <input className = "movie-category" name="category" placeholder="category*" />
                <input className = "movie-cast" name="cast" placeholder="cast" />
                <input className = "movie-director" name="director" placeholder="director" />
                <input className = "movie-producer" name="producer" placeholder="producer" />
                <input className = "movie-synopsis" name="synopsis" placeholder="synopsis" />
                <select className = "change-section">
                    <option>Coming Soon</option>
                    <option>Now Showing</option>
                </select>
                <button className = "submitbutton"><a href = "/adminadjustmovie">Add movie</a></button>
            </div>
            
        </div>
      </>
    )
  }
  
