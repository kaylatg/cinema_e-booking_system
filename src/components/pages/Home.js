import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Home.css'
import { getMoviesUpcoming, getMoviesPlaying } from '../../services/FromApiMovies'


function Home() {

    const [moviesUpcoming, setMoviesUpcoming] = React.useState([]);
const [moviesPlaying, setMoviesPlaying] = React.useState([]);
const [searchType, setSearchType] = React.useState('title');
const [searchQuery, setSearchQuery] = React.useState('');

React.useEffect(() => {
  getMoviesUpcoming().then((data) => {
    setMoviesUpcoming(data);
    console.log(data);
  });
  getMoviesPlaying().then((data) => {
    setMoviesPlaying(data);
    console.log(data);
  });
}, []);

const filterMovies = (movie) => {
  if (searchQuery === '') {
    return true;
  }
  if (searchType === 'title') {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  } else if (searchType === 'genre') {
    return movie.category.toLowerCase().includes(searchQuery.toLowerCase());
  }
};

const handleSearchTypeChange = (event) => {
  setSearchType(event.target.value);
};

const handleSearchQueryChange = (event) => {
  setSearchQuery(event.target.value);
};

return (
  <>
    <home className="home">
      <div className="logoHome">
        <img src="./images/CINE CITY.png" alt="HTML5 Icon" />
      </div>
      <div className="searchContainer">
        <select className="searchType" value={searchType} onChange={handleSearchTypeChange}>
          <option>
            <input
              type="radio"
              name="search-type"
              value="title"
              checked={searchType === 'title'}
              onChange={handleSearchTypeChange}
            />
            Title
          </option>
          <option>
            <input
              type="radio"
              name="search-type"
              value="genre"
              checked={searchType === 'genre'}
              onChange={handleSearchTypeChange}
            />
            Genre
          </option>
        </select>
        <div>
          <input className="searchBar"
            name="search"
            placeholder="Search.."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <button className="searchButton" type="submit"><i class="fa fa-search"></i>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 50 50" width="20px" height="30px">
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
          </svg>
        </button>
      </div>
      <h1>COMING SOON</h1>
      <hr />
      <div className="comingSoon-container">
        {/* Map over moviesUpcoming array and generate UI components for each movie */}
        {moviesUpcoming.filter(filterMovies).map((movie) => (
          <Link
            className="comingSoon-movie"
            to="/movieinfo"
            key={movie.id}
            onClick={(event) => localStorage.setItem('movieid', movie.id)}
          >
            <img
              src={movie.poster}
              alt={`Photo of the movie poster for ${movie.title}`}
            />
            <div className="movie-title">{movie.title} ({movie.rating})</div>
          </Link>
        ))}
      </div>
      <h1>CURRENTLY SHOWING</h1>
      <hr />
      <div className="currentlyShowing-container">
        {/* Map over moviesPlaying array and generate UI components for each movie */}
        {moviesPlaying.filter(filterMovies).map((movie) => (
          <Link
            className="currentlyShowing-movie"
            to="/movieinfo"
            key={movie.id}
            onClick={(event) => localStorage.setItem('movieid', movie.id)}
          >
            <img
              src={movie.poster}
              alt={`Photo of the movie poster for ${movie.title}`}
            />
            <h1 className="movie-title">{movie.title} ({movie.rating})</h1>
          </Link>
        ))}
      </div>
    </home>
  </>
);
  }
  
  export default Home