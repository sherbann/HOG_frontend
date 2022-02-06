import React from 'react';
import {  Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div>
    <li>
      <Link to="/searchparticipants">Participants</Link>
    </li>
    <li>
      <Link to="/">Employers</Link>
    </li>
    <li>
      <Link to="/">Show All </Link>
    </li>
  </div>
  );
}
export default NavBar;