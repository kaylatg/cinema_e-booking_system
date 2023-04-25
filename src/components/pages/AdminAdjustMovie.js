import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './AdminAdjustMovie.css'
import { getMovie, scheduleShow, getUpcomingShowsForMovie } from '../../services/FromApiMovies'


export const AdminAdjustMovie = () => {

    const [movie, setMovie] = React.useState({"title": "test"})
    const [showtimes, setShowtimes] = React.useState([]);
    const timeRef = React.createRef()

    React.useEffect(() => {
        getMovie(localStorage.getItem('movieid')).then((data) => {
            setMovie(data)
        });
        getUpcomingShowsForMovie(localStorage.getItem('movieid'), '2023-04-01 00:00:00').then((data) => {
          setShowtimes(data);
          console.log(data);
        });
    }, [])

    // Group showtimes by date
    const showtimesByDate = showtimes.reduce((acc, showtime) => {
      const showDate = new Date(showtime.showStart).toLocaleDateString();
      if (!acc[showDate]) {
        acc[showDate] = [];
      }
      acc[showDate].push(showtime);
      return acc;
    }, {});

    const handleSubmit = (event) => {
        event.preventDefault()
        scheduleShow(movie.id, localStorage.getItem('showroomId'), timeRef.current.value + ':00', timeRef.current.value + ':60').then((data) => {
            if (Number.isInteger(data.id)) {
              document.getElementById("errorMessage").innerHTML = "Showtime added Successfully"
            } else {
              document.getElementById("errorMessage").innerHTML = data
            }
        })
    }


    return (
      <>
        <div className = "adminadjustmovie">
            <div id="goback"><a href = "/adminmovies">&#8678; back</a></div>
            <h2>Managing...</h2>
            <h1 className = "movie-title">{movie.title}</h1>
            <img src={movie.poster} alt={`Photo of the movie poster for ${movie.title}`} />
            <div className = "showtime-form">
            <h1 id="current">CURRENT SHOWTIMES</h1>
          <div className="showtime-container">
            {Object.entries(showtimesByDate).map(([date, showtimes]) => (
              <div className="showtime" key={date}>
                <h2>{date}</h2>
                <hr />
                {showtimes.map((showtime) => (
                  <p
                    className="showtime-item"
                    key={showtime.id}
                  >
                    {new Date(showtime.showStart).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC",
                      timeZoneOffset: -240, // adjust for 4-hour offset
                    })}
                  </p>
                ))}
              </div>
            ))}
          </div>
              <div className="add">
                <input id="showtimeinput" type="datetime-local" name="movie-datetime" defaultValue="2023-04-06T19:30" min="2023-01-01T00:00" max="2023-12-31T00:00" ref = {timeRef}></input>
                <button onClick={event => handleSubmit(event)}>add showtime</button>
              </div>
              <p id="errorMessage"></p>
            </div>
        </div>
      </>
    )
  }
  
