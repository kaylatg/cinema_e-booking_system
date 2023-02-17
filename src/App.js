import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Navbar2} from './components/Navbar2';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import {Login} from './components/pages/Login'

let routes;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    if (localStorage.getItem("isLoggedIn") === "true") {
      routes = (
        <Router>
        <Navbar2 stateChanger = {setIsLoggedIn} />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
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
              <Route path='/login' element={<Login stateChanger = {setIsLoggedIn} />} />
          </Routes>
          </Router>
      );
    }

  return routes;
}
export default App;
