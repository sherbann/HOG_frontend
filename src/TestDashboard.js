import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
 import Add from "./Add";
import Find from "./Find";
import Button from 'react-bootstrap/Button';
import Profilecard from './Profilecard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './AdminDashboard.css';
import EmployerCard from "./EmployerCard";
import AdminCard from "./AdminCard";
import AdminProfilecard from "./AdminProfilecard";


//mport Table from 'react-bootstrap/Table';
function TestDashboard(props) {
  const [profiles, cProfiles] = useState([]);
  //console.log(window.localStorage.userType, window.localStorage.token, window.localStorage.username);
  // filter out by employer, participant and isEmployed
  const employerProfiles = profiles.filter((profile) => profile.userType == 'employer');
  const participantProfiles = profiles.filter((profile) => profile.userType == 'participant');
  const adminProfiles = profiles.filter((profile) => profile.admin == 'admin');

  const employedProfiles = profiles.filter((profile) => profile.isEmployed == true);

  // I want to display current logged in user so they can edit their profile.
  // How? Maybe create const loggedInUsername = window.localStorage.username
  // then see if that's in the profiles:  const loggedInProfile = profiles.filter((profile) => profile.username == 'loggedInUsername');
  const loggedInUsername = window.localStorage.username;
  // const loggedInProfile = profiles.filter((profile) => profile.username == 'window.localStorage.username');
  const loggedInProfile = profiles.filter((profile) => profile.username == loggedInUsername);
  //console.log(loggedInUsername);
 // console.log(loggedInProfile);


  const [current, cCurrent] = useState(undefined);
  const [show,setShow]=useState(false)
  const [show2,setShow2]=useState(false)
  const [ashow2,asetShow2]=useState(false)

  const refreshList = () => {
    props.client.getProfiles().then((response) => cProfiles(response.data));
  };
  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };
  const updateProfile= (id) => {
    let e=profiles.filter((profile)=>{return profile._id == id});
   if(e.length>0){
    cCurrent(e[0])
   }
  };
  const querySearch = (searchParams) => {
    props.client.queryResult(searchParams).then((response) => cProfiles(response.data))
  }

  useEffect(() => {
    refreshList();
  }, []);
  

  
  // This should only display the 'admin' profiles
  function buildAdmincards() {
    return adminProfiles.map((current) => {
       return (
         <>
           <AdminCard id={current._id} 
           firstName={current.firstName} 
           userType={current.userType} 
           lastName={current.lastName} 
           email={current.email} 
           bio={current.bio} 
            removeProfile={removeProfile} 
            updateProfile={updateProfile} ></AdminCard>
            
         </>
       );
     });
 //
 //
 //
   };

  // This should only display the 'employer' profiles
    function buildEmployercards() {
   return employerProfiles.map((current) => {
      return (
        <>
          <EmployerCard id={current._id} 
          firstName={current.firstName} userType={current.userType} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} removeProfile={removeProfile} updateProfile={updateProfile} location = {current.location}></EmployerCard>
        </>
      );
    });
//
//
//
  };
    // This should only display the 'participant' profiles
    function buildParticipantcards() {
        return participantProfiles.map((current) => {
           return (
             <>
               <Profilecard id={current._id} 
               firstName={current.firstName} userType={current.userType} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} removeProfile={removeProfile} updateProfile={updateProfile} location = {current.location}></Profilecard>
             </>
           );
         });
     //
     //
     //
       };
           // This should  display all profiles
    function buildProfilecards() {
        return profiles.map((current) => {
           return (
             <>
               <Profilecard id={current._id} 
               firstName={current.firstName} 
               userType={current.userType} 
               lastName={current.lastName} 
               email={current.email} 
               bio={current.bio} 
               linkedin={current.linkedin} 
               github={current.github} 
               portfolio={current.portfolio} 
               isEmployed={current.isEmployed?"true":"false"} 
               skills={current.skills} 
               picture={current.picture} 
               removeProfile={removeProfile} 
               updateProfile={updateProfile} 
               location = {current.location}
               ></Profilecard>
             </>
           );
         });
     //
     //
     //
       };

                  // This should  display all employed profiles
    // function buildEmployedcards() {
    //     return employedProfiles.map((current) => {
    //        return (
    //          <>
    //            <Profilecard id={current._id} 
    //            firstName={current.firstName} userType={current.userType} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} removeProfile={removeProfile} updateProfile={updateProfile} location = {current.location}></Profilecard>
    //          </>
    //        );
    //      });
     //
     //
     //
     
      //  };
       //
       //
                         // This should  display just the logged in profile
    function buildLoggedInProfile() {
      return loggedInProfile.map((current) => {
         return (
           <>
             <AdminProfilecard id={current._id} 
             firstName={current.firstName} 
             userType={current.userType} 
             lastName={current.lastName} 
             email={current.email} 
             bio={current.bio}             
            removeProfile={removeProfile} 
            updateProfile={updateProfile} 
            ></AdminProfilecard>
           </>
         );
       });
   //
   //
   //
   
     };

    return (

      <main>
        <Container className="contentContainer">
          <Row className="headerRow">
            <h5 className="header-title">Admin Dashboard</h5>
            <h4>Logged in as {loggedInUsername}</h4>
    
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  className="logout-button" onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
          <Col xs={6}>
        { show2? 
          <>
        <Find
            client={props.client}
            querySearch = {querySearch}
            currentProfile={current}
          />
          <a className="see-less-btn" onClick={() => setShow2(!show2)}>See less</a>
          </>
        :<a className="search-button" onClick={() => setShow2(!show2)}>Search profiles</a> }
        </Col>
      </div>
          </Row>

{/* 
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <p>Showing 'employer' cards</p>
            {buildEmployercards()}
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <p>Showing 'participant' cards</p>
          {buildParticipantcards()}
        </div>
        <br /> */}
          <div className="participant-profile-card">
          {buildLoggedInProfile()}
        </div>
        {/* <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <p>Showing all cards</p>
          {buildProfilecards()}
        </div>

        <br /> */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* <p>Showing all cards</p> */}
          {buildEmployercards()}
        </div>

        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* <p>Showing all cards</p> */}
          {buildParticipantcards()}
        </div>

        <br />
        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
          <p>Showing employed profile cards</p>
          {buildEmployedcards()}
        </div> */}
        <br />

     <Row className="bodyRow mx-auto text-center mt-2">
      <Col xs={6}>
      { show?
      <>
       <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfile={current}
        logout={props.logout}
      /> 
      <a className="see-less-btn" onClick={() => setShow(!show)}>See less</a>
      </>
      : <a className="buttonShowAdd2" onClick={() => setShow(!show)}>Add post</a> }
      </Col>

        </Row>
        </Container>
      </main>

  );
  
}
export default TestDashboard;
