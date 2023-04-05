import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Showtimes.css'
import { getMovie, getUpcomingShowsForMovie } from '../../services/FromApiMovies'


export const Showtimes = () => {

  const [movie, setMovie] = React.useState([]);
  const [showtimes, setShowtimes] = React.useState([]);
  
  React.useEffect(() => {
    getMovie(localStorage.getItem('movieid')).then((data) => {
      setMovie(data);
      console.log(data);
    });
    getUpcomingShowsForMovie(localStorage.getItem('movieid'), '2023-04-01 00:00:00').then((data) => {
      setShowtimes(data);
      console.log(data);
    });
  }, []);
  
  // Group showtimes by date
  const showtimesByDate = showtimes.reduce((acc, showtime) => {
    const showDate = new Date(showtime.showStart).toLocaleDateString();
    if (!acc[showDate]) {
      acc[showDate] = [];
    }
    acc[showDate].push(showtime);
    return acc;
  }, {});
  
  /* 
    We need to display all movie information on this page as well as the showtimes.
    The following variables hold the information we need to display:
      movie.title (movie title)
      movie.trailer (embed link to movie trailer)
      movie.description (movie description)
      movie.rating (movie rating)
      movie.poster (link to movie poster)
      movie.actors (list of actors in a movie, all in one string)
      movie.director (director of the movie)
      movie.category  (category of the movie)

    Here is what the deliverable requirement states:
      Select a movie and test if movie browse information is displayed 15 points
      Beside the browse results, a more detailed page is displayed containing all movie info:
      Title, category, cast, director, producer, synopsis, reviews, trailer picture and video,
      MPAA-US film rating code, and show dates and times.
  */
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
          <h1>SHOWTIMES</h1>
          <div className="showtime-container">
            {Object.entries(showtimesByDate).map(([date, showtimes]) => (
              <div className="showtime" key={date}>
                <h2>{date}</h2>
                <hr />
                {showtimes.map((showtime) => (
                  <Link
                    className="showtime-item"
                    to="/seats"
                    key={showtime.id}
                  >
                    {new Date(showtime.showStart).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC",
                      timeZoneOffset: -240, // adjust for 4-hour offset
                    })}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
      }

