import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import './Showtimes.css'
import { getMovie } from '../../services/FromApiMovies'


export const MovieInfo = () => {

  const [movie, setMovie] = React.useState([]);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    getMovie(localStorage.getItem('movieid')).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    navigate('/showtimes')
  }

  return (
    <>
      <div className="showtimes">
        <div className="showtimes-container">
          <iframe
            className="showtimes-trailer"
            width="560"
            height="315"
            src={movie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <hr />
          <p>rating: {movie.rating}</p>
          <p>cast: {movie.actors}</p>
          <p>director: {movie.director}</p>
          <p>category: {movie.category}</p>
          <div className='showtime-container'>
            <button className='showtime-item' onClick={event => handleClick(event)}>Book This Movie</button>
          </div>
        </div>
      </div>
    </>
  );
      }

