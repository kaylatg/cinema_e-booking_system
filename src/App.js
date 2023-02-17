import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from './components/pages/Login'

let routes;

function App() {
    routes = (
      <Router>
          <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      </Router>
    );
  return routes;
}

export default App;
