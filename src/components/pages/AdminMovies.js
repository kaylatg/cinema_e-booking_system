import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminMovies.css'
import { getMoviesUpcoming, getMoviesPlaying } from '../../services/FromApiMovies'


export const AdminMovies = () => {

    const [moviesUpcoming, setMoviesUpcoming] = React.useState([])
    const [moviesPlaying, setMoviesPlaying] = React.useState([])

    React.useEffect(() => {
        getMoviesUpcoming().then((data) => {
            setMoviesUpcoming(data)
            console.log(data)
        })
        getMoviesPlaying().then((data) => {
            setMoviesPlaying(data)
            console.log(data)
        })

    }, [])

    return (
      <>
        <div className="adminmovies">
            <h2>Click a movie to make changes</h2>
            <h1>COMING SOON</h1>
            <hr></hr>
            <div className="comingSoon-container">
                {/* Map over moviesUpcoming array and generate UI components for each movie */}
                {moviesUpcoming.map(movie => (
                    <Link className="comingSoon-movie" to="/adminadjustmovie" onClick={event => localStorage.setItem('movieid', movie.id)} key={movie.id}>
                        <img src={movie.poster} alt={`Photo of the movie poster for ${movie.title}`} />
                    </Link>
                ))}
            </div>
            <h1>CURRENTLY SHOWING</h1>
            <hr></hr>
            <div className="currentlyShowing-container">
                {/* Map over moviesPlaying array and generate UI components for each movie */}
                {moviesPlaying.map(movie => (
                    <Link className="currentlyShowing-movie" to="/adminadjustmovie" onClick={event => localStorage.setItem('movieid', movie.id)} key={movie.id}>
                        <img src={movie.poster} alt={`Photo of the movie poster for ${movie.title}`} />
                    </Link>
                ))}
            </div>
            <Link id="createmovie" to="/adminaddmovie">Create a new Movie</Link>
        </div>
    </>
    )
  }
  
