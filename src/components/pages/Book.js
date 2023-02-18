import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Book.css'
//import { useNavigate } from "react-router-dom";


export const Book = ({stateChanger}) => {
    /*
    const navigate = useNavigate();
  
      const handleSubmit = event => {
        event.preventDefault();
        stateChanger(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/login");
      }
      */
  
        return (
          <>
            <div className = "book">
                <div className="book-trailer">
\                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
          </>
        )
      }

