import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Navbar2} from './components/Navbar2';
import {Navbar3} from './components/Navbar3';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './components/pages/Home'
import {About} from './components/pages/About'
import {Login} from './components/pages/Login'
import {Signup} from './components/pages/Signup'
import {Showtimes} from './components/pages/Showtimes'
import {Seats} from './components/pages/Seats'
import {Tickets} from './components/pages/Tickets'
import {Checkout} from './components/pages/Checkout'
import {Confirmation} from './components/pages/Confirmation'
import {Profile} from './components/pages/Profile'
import {AdminHome} from './components/pages/AdminHome'
import {AdminMovies} from './components/pages/AdminMovies'
import {AdminAddMovie} from './components/pages/AdminAddMovie'
import {AdminAdjustMovie} from './components/pages/AdminAdjustMovie'
import {AdminPromos} from './components/pages/AdminPromos'
import {Cards} from './components/pages/Cards'
import {verifySession} from './services/FromApi.js'
import {ForgotPasswordInitial} from './components/pages/ForgotPasswordInitial.js'
import {ForgotPassword} from './components/pages/ForgotPassword.js'
import ConfirmEmail from './components/pages/ConfirmEmail.js'


let routes;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(0); // 0 = not logged in, 1 = logged in as user, 2 = logged in as admin
    verifySession(localStorage.getItem('token')).then(response => {
      if (response === true) {
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
      } else {
        //stateChanger(0); //idk if this is needed but import it if it is
        setIsLoggedIn(0);
        localStorage.setItem("isLoggedIn", 0);
      }
    })
    
    if (localStorage.getItem("isLoggedIn") === "2") {
      routes = (
        <Router>
        <Navbar3 stateChanger = {setIsLoggedIn} />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/adminhome' element={<AdminHome />} />
            <Route path='/adminmovies' element={<AdminMovies />} />
            <Route path='/adminadjustmovie' element={<AdminAdjustMovie />} />
            <Route path='/adminpromos' element={<AdminPromos />} />
            <Route path='/adminaddmovie' element={<AdminAddMovie />} />
            <Route path='/' element={<handleLogout stateChanger = {setIsLoggedIn} />} />
        </Routes>
        </Router>
      );
    } else if (localStorage.getItem("isLoggedIn") === "1") {
      routes = (
        <Router>
        <Navbar2 stateChanger = {setIsLoggedIn} />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/showtimes' element={<Showtimes />} />
            <Route path='/seats' element={<Seats />} />
            <Route path='/my-tickets' element={<Tickets />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/confirmation' element={<Confirmation />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/my-profile' element={<Profile />} />
            <Route path='/' element={<handleLogout stateChanger = {setIsLoggedIn} />} />
        </Routes>
        </Router>
      );
    } else {
      routes = (
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/forgotpassword' element={<ForgotPasswordInitial />} />
            <Route path='/resetpassword' element={<ForgotPassword />} />
            <Route path='/login' element={<Login stateChanger = {setIsLoggedIn} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/confirmemail' element={<ConfirmEmail />} />
            <Route path='/showtimes' element={<Showtimes />} />
            <Route path='/seats' element={<Seats />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/confirmation' element={<Confirmation />} />
          </Routes>
          </Router>
      );
    }

  return routes;
}
export default App;
