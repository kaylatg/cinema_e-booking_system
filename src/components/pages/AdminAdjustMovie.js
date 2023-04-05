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
              console.log("success") // Show time was successfully added
            } else {
              console.log(data) // Show time was not added, error message is in 'data', may wanna display it somewhere in UI
            }
        })
    }


    return (
      <>
        <div className = "adminadjustmovie">
            <h1>Manage Movie</h1>
            <h2 className = "movie-title">{movie.title}</h2>
            <a href = "/adminmovies">go back</a>
            <div className = "showtime-form">
            <h1>CURRENT SHOWTIMES</h1>
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
            <hr></hr>
            <h3>Add Showtime</h3>
                <input type="datetime-local" name="movie-datetime" defaultValue="2023-04-06T19:30" min="2023-01-01T00:00" max="2023-12-31T00:00" ref = {timeRef}></input>
                <button onClick={event => handleSubmit(event)}>add</button>
            </div>
            <hr></hr>
        </div>
      </>
    )
  }
  
