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
      <div className="search-container">
        <div className="search-bar-container">
          <label className="navbar-search-icon">&#x1F50E;</label>
          <input
            className="navbar-search-box"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className="search-type-container">
          <label>
            <input
              type="radio"
              name="search-type"
              value="title"
              checked={searchType === 'title'}
              onChange={handleSearchTypeChange}
            />
            Title
          </label>
          <label>
            <input
              type="radio"
              name="search-type"
              value="genre"
              checked={searchType === 'genre'}
              onChange={handleSearchTypeChange}
            />
            Genre
          </label>
        </div>
      </div>
      <h1>COMING SOON</h1>
      <hr />
      <div className="comingSoon-container">
        {/* Map over moviesUpcoming array and generate UI components for each movie */}
        {moviesUpcoming.filter(filterMovies).map((movie) => (
          <Link
            className="comingSoon-movie"
            to="/showtimes"
            key={movie.id}
            onClick={(event) => localStorage.setItem('movieid', movie.id)}
          >
            <img
              src={movie.poster}
              alt={`Photo of the movie poster for ${movie.title}`}
            />
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
            to="/showtimes"
            key={movie.id}
            onClick={(event) => localStorage.setItem('movieid', movie.id)}
          >
            <img
              src={movie.poster}
              alt={`Photo of the movie poster for ${movie.title}`}
            />
          </Link>
        ))}
      </div>
    </home>
  </>
);
  }
  
  export default Home