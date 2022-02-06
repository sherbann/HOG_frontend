import React, { useState } from "react";
import SApp from "./SApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar";
import SearchParticipants from "./SearchParticipants";
import Topbar from "./navbar/Topbar";



function App(props) {

  return (
    <>
        <div className="app">
      <div className="landing-page-sections">
        
        <SApp />
        <Footer />
      </div>
    </div>

    </>
  );
}

export default App;
