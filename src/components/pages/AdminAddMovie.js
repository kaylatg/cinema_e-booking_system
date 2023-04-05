import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminAddMovie.css'
import { createMovie } from '../../services/FromApiMovies'


export const AdminAddMovie = () => {

    const titleRef = React.createRef();
    const ratingRef = React.createRef();
    const posterRef = React.createRef();
    const trailerRef = React.createRef();
    const categoryRef = React.createRef();
    const castRef = React.createRef();
    const directorRef = React.createRef();
    const synopsisRef = React.createRef();
    const statusRef = React.createRef();

    const handleSubmit = event => { //After clicking the add movie button
        event.preventDefault();
        const title = titleRef.current.value;
        const rating = ratingRef.current.value;
        const poster = posterRef.current.value;
        const trailer = trailerRef.current.value;
        const category = categoryRef.current.value;
        const cast = castRef.current.value;
        const director = directorRef.current.value;
        const synopsis = synopsisRef.current.value;
        const status = statusRef.current.value;
        console.log(status);
        createMovie(title, trailer, synopsis, rating, poster, cast, director, category, status).then(response => {
          if (Number.isInteger(response.id)) {
            console.log("Movie added"); //Movie creation successful
          } else {
            console.log("Movie not added"); //Movie creation failed
          }
        });
    }


    return (
      <>
        <div className = "adminaddmovie">
            <h1>Add Movie</h1>
            <button type="submit">
                <img src="imgs/addMovie.png" alt="add movie poster" border="0" />
            </button>

            <div className = "addmovieform">
                <input className = "movie-title" name="movie" ref={titleRef} placeholder="movie title*" />
                <input className = "movie-rating" name="rating" ref={ratingRef} placeholder="MPAA-US film rating code*" />
                <input className = "movie-poster" name="poster" ref={posterRef} placeholder="poster link*" />
                <input className = "movie-trailer" name="trailer" ref={trailerRef} placeholder="trailer link*" />
                <input className = "movie-category" name="category" ref={categoryRef} placeholder="category*" />
                <input className = "movie-cast" name="cast" ref={castRef} placeholder="cast" />
                <input className = "movie-director" name="director" ref={directorRef} placeholder="director" />
                <input className = "movie-synopsis" name="synopsis" ref={synopsisRef} placeholder="synopsis" />
                <select className = "change-section" ref={statusRef}>
                    <option>UPCOMING</option>
                    <option>NOW_PLAYING</option>
                </select>
                <button className = "submitbutton" onClick={event => handleSubmit(event)}>Add movie</button>
            </div>
            
        </div>
      </>
    )
  }
  
