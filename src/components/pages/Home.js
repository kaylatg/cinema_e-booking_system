import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Home.css'


function Home() {
    return (
      <>
        <home className = "home">
          <div className = "logoHome">
          <img src="./images/CINE CITY.png" alt="HTML5 Icon"/>

          </div>
            <h1>COMING SOON</h1>
            <hr></hr>
            <div className = "comingSoon-container">
                <Link className = "comingSoon-movie" to ="/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/></Link>
                <Link className = "comingSoon-movie" to ="/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for M3GAN"/></Link>
                <Link className = "comingSoon-movie" to = "/showtimes"><img src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg" alt="Photo of the movie poster for Black Panther: Wakanda Forever"/></Link>
                <Link className = "comingSoon-movie" to = "/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BZDUwNDY1M2QtYmI2Zi00NmFmLTkzNzMtOTg4ODgxYmY5N2I2XkEyXkFqcGdeQXVyOTQzOTE5NTY@._V1_.jpg" alt="Photo of the movie poster for Winnie the Pooh: Blood and Honey"/></Link>
                <Link className = "comingSoon-movie" to = "/showtimes"><img src="https://sportshub.cbsistatic.com/i/2022/10/24/3fe2ecc3-2100-4f7e-951a-aabe1782372d/ant-man-and-the-wasp-quantumania-poster.jpg?auto=webp&width=1688&height=2500&crop=0.675:1,smart" alt="Photo of the movie poster for Antman and the Wasp: Quantumania"/></Link>
                <Link className = "comingSoon-movie" to = "/showtimes"><img src="https://i.ebayimg.com/images/g/bo4AAOSwpOhjN1ev/s-l1600.jpg" alt="Photo of the movie poster for The Woman King"/></Link>
            </div>
            <h1>CURRENTLY SHOWING</h1>
            <hr></hr>
            <div className = "currentlyShowing-container">
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/></Link>
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for M3GAN"/></Link>
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg" alt="Photo of the movie poster for Black Panther: Wakanda Forever"/></Link>
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://m.media-amazon.com/images/M/MV5BZDUwNDY1M2QtYmI2Zi00NmFmLTkzNzMtOTg4ODgxYmY5N2I2XkEyXkFqcGdeQXVyOTQzOTE5NTY@._V1_.jpg" alt="Photo of the movie poster for Winnie the Pooh: Blood and Honey"/></Link>
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://sportshub.cbsistatic.com/i/2022/10/24/3fe2ecc3-2100-4f7e-951a-aabe1782372d/ant-man-and-the-wasp-quantumania-poster.jpg?auto=webp&width=1688&height=2500&crop=0.675:1,smart" alt="Photo of the movie poster for Antman and the Wasp: Quantumania"/></Link>
                <Link className = "currentlyShowing-movie" to = "/showtimes"><img src="https://i.ebayimg.com/images/g/bo4AAOSwpOhjN1ev/s-l1600.jpg" alt="Photo of the movie poster for The Woman King"/></Link>
            </div>
        </home>
      </>
    )
  }
  
  export default Home