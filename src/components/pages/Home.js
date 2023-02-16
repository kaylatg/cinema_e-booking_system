import React from 'react'
import '../../App.css'
import './Home.css'

function Home() {
    return (
      <>
        <home className = "home">
            <h1>Coming Soon</h1>
            <div className = "comingSoon-container">
            </div>
            <h1>Currently Showing</h1>
            <div className = "currentlyShowing-container">
                <a className = "currentlyShowing-movie" href="https://www.youtube.com/watch?v=d9MyW72ELq0"><img src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for Avatar: The Way of the Water"/></a>
                <a className = "currentlyShowing-movie" href="https://www.youtube.com/watch?v=BRb4U99OU80"><img src="https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg" alt="Photo of the movie poster for M3GAN"/></a>
                <a className = "currentlyShowing-movie" href="https://www.youtube.com/watch?v=_Z3QKkl1WyM"><img src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg" alt="Photo of the movie poster for Black Panther: Wakanda Forever"/></a>
            </div>
        </home>
      </>
    )
  }
  
  export default Home