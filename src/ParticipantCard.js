import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Link } from "react-router-dom";
import { init } from "ityped";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./ParticipantDashboard.css";

function ParticipantCard(props) {
    



return (
    <>

    
<div className="participant-outer-container">
<div className="participant-container">
  <div className="participant-div">
      <form>
          <div className="form-inner">
              <h2 >{props.firstName} {props.lastName}</h2>
              <div className="form-group">

                  <label htmlFor="name">Username: {props.user} {props.firstName} {props.lastName}</label>
              <label htmlFor="chooseAccount">Account type: {props.userType}</label>
                  <label htmlFor="email">Your email: {props.email}</label>
                  <label htmlFor="bio">Bio: {props.bio} </label>
                  <label htmlFor="location">Your location: {props.location}</label>
                  <label htmlFor="website">Website: </label>
              
              </div>
              <div className="participant-social-icons">
              <a href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></a>
              <a href target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a>
              <a href target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></a>
              <a href target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></a>
              </div>
              <div className='edit_profile_btn'>
              <Link className="EditProfile" to="/EditProfile">Edit Profile</Link>
              
              <Button variant="success" size="sm" onClick={() => props.updateUser(props.id)}> update profile</Button>

              </div>
              <div className="participant-logout-btn">
              <Button className="participant-logout-btn" onClick={props.logout}>Logout</Button>
              </div>

              



          </div>



      </form>
  </div>
</div>
</div>
</>
  );
}

export default ParticipantCard;