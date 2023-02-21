import React from 'react'
import '../../App.css'
import './Profile.css'

export const Profile = ({stateChanger}) => {

      return (
        <>
          <div className="profile">
          <h1>Edit profile</h1>
              <div className = "profile-container">
                <img src = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"></img>
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="femail">Email:</label>
                <input type="email" id="femail" name="femail"></input>
                <label for="fpassword">Password:</label>
                <input type="password" id="fpassword" name="fpassword"></input>
                <label for="fpicture">Picture link:</label>
                <input type="link" id="fpicture" name="fpassword"></input>
                <button>submit changes</button>
              </div>
  
          </div>
        </>
      )
    }