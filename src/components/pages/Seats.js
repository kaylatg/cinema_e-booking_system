import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../../App.css'
import './Seats.css'
import { getShow } from '../../services/FromApiMovies';


export const Seats = () => {
    const navigate = useNavigate();

    const [show, setShow] = React.useState();
    const [seats, setSeats] = React.useState([]);
    const [selectedSeats, setSelectedSeats] = React.useState([]); // seats selected by user

    React.useEffect(() => {
        getShow(localStorage.getItem("showtimeid")).then((data) => {
            setShow(data);
            setSeats(data.showRoom.seats);
        });
    }, []);

    const handleSubmit = event => {
     
      navigate("/checkout");
    }

    
    function groupByRow(seats) {
        return seats.reduce((result, seat) => {
          const row = seat.row;
          if (!result[row]) {
            result[row] = [];
          }
          result[row].push(seat);
          return result;
        }, {});
      }
      
      function handleSeatClick(event, seat) {
        const selectedSeats = JSON.parse(localStorage.getItem("seats")) || [];
        const seatIndex = selectedSeats.findIndex(s => s.id === seat.id);
      
        if (seatIndex >= 0) {
          selectedSeats.splice(seatIndex, 1);
        } else {
          selectedSeats.push(seat);
        }
      
        localStorage.setItem("seats", JSON.stringify(selectedSeats));
        event.target.setAttribute("fill", seatIndex >= 0 ? "#D9D9D9" : "#3075B5");
        setSelectedSeats(selectedSeats);
      }
      
      function renderRowSeats(rowSeats) {
        const selectedSeats = JSON.parse(localStorage.getItem("seats")) || [];
        //console.log(selectedSeats)
        const isSeatSelected = (seat) => selectedSeats.some(s => s.id === seat.id);
        
        return rowSeats.map((seat) => (
          <svg
            className="seat"
            key={seat.id}
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill={isSeatSelected(seat) ? "#3075B5" : "#D9D9D9"}
            xmlns="http://www.w3.org/2000/svg"
            onClick={(event) => handleSeatClick(event, seat)}
          >
            <rect width="57" height="57" rx="14" fill={isSeatSelected(seat) ? "#3075B5" : "#D9D9D9"} />
          </svg>
        ));
      }
      
      return (
        <>
          <div className="seats">
            <h1>SELECT SEATS</h1>
            <div className="seats-container">
              <div className="seats-legend">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#B53030" />
                </svg>
                <h2>Reserved Seats</h2>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#3075B5" />
                </svg>
                <h2>Selected Seats</h2>
              </div>
              <svg
                width="557"
                height="25"
                viewBox="0 0 557 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="557" height="25" fill="#D9D9D9" />
              </svg>
              <div className="seats-chart">
                {Object.entries(groupByRow(seats)).map(([row, rowSeats]) => (
                  <div className="seats-row" key={row}>
                    <h2>{row}</h2>
                    {renderRowSeats(rowSeats)}
                  </div>
                ))}
              </div>
              <button
                className="seats-button"
                onClick={(event) => handleSubmit(event)}
              >
                Save my seats
              </button>
            </div>
          </div>
        </>
      );
}

