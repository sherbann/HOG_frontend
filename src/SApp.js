import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import TestDashboard from './TestDashboard';
import { ApiClient } from "./apiClient";
import Login from "./Login";
import EmployerDashboard from "./EmployerDashboard";
import ParticipantDashboard from "./ParticipantDashboard";
import SearchParticipants from "./SearchParticipants";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function SApp() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"));
  const [userType,changeUserType] = useState(window.localStorage.getItem("userType"));
  const [searchTerm, setSearchTerm] = useState("");
  // added 1 Feb
  //const [username,changeUsername] = useState(window.localStorage.getItem("username"));

  const client = new ApiClient(
    token, userType,
    () => logout()
  );

  const login = (newToken, newUserType, newUsername) => {
    window.localStorage.setItem("token",newToken);
    window.localStorage.setItem("userType",newUserType);
    //add 1 Feb
    window.localStorage.setItem("username",newUsername);
    changeToken(newToken);
    changeUserType(newUserType);
    //added 1 Feb
   // changeUsername(newUsername);
  }
  
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userType");
    //added 1 Feb
    window.localStorage.removeItem("username");
    changeToken(undefined);
    changeUserType("");
  }

  return (
    <>
    

      {token ? (
        userType=="admin"
        ? <TestDashboard client={client} 
        logout={logout} 
        userType={userType} />
        : userType=="employer"
        ? <EmployerDashboard client={client}  logout={logout} userType={userType}/>
        : userType=="participant"
        ? <ParticipantDashboard client={client}   logout={logout}  userType={userType} />
        : <></>
      ) : (
        <Login loggedIn={(token,userType,username)  => login(token,userType,username)} client={client} logout={logout}/>
      )
      }
      
    </>
  );
}

export default SApp;
