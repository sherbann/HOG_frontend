import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import { init } from "ityped";
import '../navbar/navbar.css'



function Topbar(props) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["The Developer Academy"],
    });
  }, []);


  return (

        <div className="login-navbar">
        <Navbar>

          <h1>Welcome to <span ref={textRef}></span></h1>

        </Navbar>
        </div>

  );
}

export default Topbar;
