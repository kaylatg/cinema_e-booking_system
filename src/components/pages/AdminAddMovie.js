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
        if (titleRef.current.value.length < 1 || ratingRef.current.value.length < 1 || posterRef.current.value.length < 1 ||
          trailerRef.current.value.length < 1 || categoryRef.current.value.length < 1 || castRef.current.value < 1 ||
          directorRef.current.value.length || synopsis.current.value.length < 1) {
            document.getElementById("errorMessage").innerHTML = "Please fill out all fields before submitting form";
        } else {
          createMovie(title, trailer, synopsis, rating, poster, cast, director, category, status).then(response => {
            if (Number.isInteger(response.id)) {
              console.log("Movie added"); //Movie creation successful
            } else {
              console.log("Failed to add movie"); //Movie creation failed
              document.getElementById("errorMessage").innerHTML = "Movie added";
            }
          });
        }
    }


    return (
      <>
        <div className = "adminaddmovie">
            <h1>Add Movie</h1>
            <button className="addmoviebutton" type="submit">
                <img src="imgs/addMovie.png" alt="+"/>

            </button>

            <div className = "addmovieform">
                <input className = "addmovieinput" name="movie" ref={titleRef} placeholder="movie title" />
                <input className = "addmovieinput" name="rating" ref={ratingRef} placeholder="MPAA-US film rating code" />
                <input className = "addmovieinput" name="poster" ref={posterRef} placeholder="poster link" />
                <input className = "addmovieinput" name="trailer" ref={trailerRef} placeholder="trailer link" />
                <input className = "addmovieinput" name="category" ref={categoryRef} placeholder="category" />
                <input className = "addmovieinput" name="cast" ref={castRef} placeholder="cast" />
                <input className = "addmovieinput" name="director" ref={directorRef} placeholder="director" />
                <input className = "addmovieinput" name="synopsis" ref={synopsisRef} placeholder="synopsis" />
                <select className = "addmovieselect" ref={statusRef}>
                    <option>UPCOMING</option>
                    <option>NOW_PLAYING</option>
                </select>
                <button className = "submitbutton" onClick={event => handleSubmit(event)}>Add movie</button>
                <p id = "errorMessage"></p>
            </div>
            
        </div>
      </>
    )
  }
  
