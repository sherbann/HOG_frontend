import React from "react";
import '../Footer/Footer.css';
import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



    function Footer() {
      return (
        <div className="footer">
          <p>Get in touch:</p>
          <FontAwesomeIcon icon = {faEnvelope} className="envelope-icon"></FontAwesomeIcon>
          <a href="mailto:info@thedeveloperacademy.com" className="mail-to" target="_blank"> info@thedeveloperacademy.com</a>
          <br />
        </div>

      );
    }
        
  


export default Footer;