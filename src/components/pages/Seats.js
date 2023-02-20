import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Seats.css'
import { useNavigate } from "react-router-dom";


export const Seats = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
     
      navigate("/checkout");
    }
    return (
        <>
        <div className = "seats">
        <h1>SELECT SEATS</h1> 
            <div className = "seats-container">
                <div className = "seats-legend">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12.5" r="12.5" fill="#B53030"/></svg>
                    <h2>Reserved Seats</h2>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12.5" r="12.5" fill="#3075B5"/></svg>
                    <h2>Selected Seats</h2>
                </div>
                <svg width="557" height="25" viewBox="0 0 557 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="557" height="25" fill="#D9D9D9"/></svg>
                <div className = "seats-chart">
                    <div className = "seats-row">
                        <h2>A</h2>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                    </div>
                    <div className = "seats-row">
                        <h2>B</h2>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#B53030"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#B53030"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                    </div>
                    <div className = "seats-row">
                        <h2>C</h2>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#3075B5"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#3075B5"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                    </div>
                    <div className = "seats-row">
                        <h2>D</h2>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                    </div>
                    <div className = "seats-row">
                        <h2>E</h2>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#B53030"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                        <svg className = "seat" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="57" height="57" rx="14" fill="#D9D9D9"/></svg>
                    </div>
                </div>
                <button className = "seats-button" onClick = {event => handleSubmit(event)}>Save my seats</button>
            </div>
        </div>
        </>
    )
}

