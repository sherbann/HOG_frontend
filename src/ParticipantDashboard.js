import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
 import Add from "./Add";
// import Find from "./Find";
import Button from 'react-bootstrap/Button';
import ParticipantProfilecard from "./ParticipantProfilecard";
import Profilecard from "./Profilecard";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

// import NavbarCode from "./NavbarCode";
import AddParticipant from "./AddParticipant";
import './ParticipantDashboard.css';
import EmployerProfileCard from './EmployerProfileCard'
import EmployerCardforparticipant from "./EmployerCardforparticipant";


//mport Table from 'react-bootstrap/Table';
function ParticipantDashboard(props) {
  const [profiles, cProfiles] = useState([]);

  
  const employerProfiles = profiles.filter((profile) => profile.userType == 'employer');
  const participantProfiles = profiles.filter((profile) => profile.userType == 'participant');
 // const employedProfiles = profiles.filter((profile) => profile.isEmployed == true);


  const loggedInUsername = window.localStorage.username;
  const loggedInProfile = profiles.filter((profile) => profile.username == loggedInUsername);
  //console.log(loggedInUsername);
 // console.log(loggedInProfile);
 // need some way of avoiding duplicate usernames


  const [current, cCurrent] = useState(undefined);
  const [show,setShow]=useState(false);
  const [show2,setShow2]=useState(false);
  const [ashow2,asetShow2]=useState(false);

  const refreshList = () => {
    props.client.getProfiles().then((response) => cProfiles(response.data));
  };
  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };
  const updateProfile= (id) => {
 //   let e=profiles.filter((profile)=>{return profile._id == id});
    let e=loggedInProfile.filter((profile)=>{return profile._id == id});
    console.log(loggedInProfile.id);
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
  


  //This should only display the 'employer' profiles
    function buildEmployercards() {
   return employerProfiles.map((current) => {
      return (
        <>
          <EmployerCardforparticipant id={current._id} 
          firstName={current.firstName} 
          userType={current.userType} 
          lastName={current.lastName} 
          email={current.email} 
          bio={current.bio}
           linkedin={current.linkedin}
            github={current.github} 
            admincomments={current.admincomments} 
            portfolio={current.portfolio} 
            isEmployed={current.isEmployed?"true":"false"} 
            skills={current.skills} 
            picture={current.picture} 
            course={current.course} 
            date={current.date} 
            removeProfile={removeProfile} 
            updateProfile={updateProfile} 
            location = {current.location}>

            </EmployerCardforparticipant>
        </>
      );
    });
  };
    // This should only display the 'participant' profiles
    // function buildParticipantcards() {
    //     return participantProfiles.map((current) => {
    //        return (
    //          <>
    //            <Profilecard id={current._id} 
    //            firstName={current.firstName} userType={current.userType} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} removeProfile={removeProfile} updateProfile={updateProfile} location = {current.location}></Profilecard>
    //          </>
    //        );
    //      });
    //    };
           // This should  display all profiles
    // function buildProfilecards() {
    //     return profiles.map((current) => {
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
    //    };

                  // This should  display all profiles
    // function buildEmployedcards() {
    //     return employedProfiles.map((current) => {
    //        return (
    //          <>
    //            <Profilecard id={current._id} 
    //            firstName={current.firstName} userType={current.userType} lastName={current.lastName} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} removeProfile={removeProfile} updateProfile={updateProfile} location = {current.location}></Profilecard>
    //          </>
    //        );
    //      });
     
    //    };
       //
       //
                         // This should  display just the logged in profile
    function buildLoggedInProfile() {
      return loggedInProfile.map((current) => {
         return (
           <>
             <ParticipantProfilecard id={current._id} 

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
              picture={current.image} 
              removeProfile={removeProfile} 
              updateProfile={updateProfile} 
              location = {current.location}>
                  
              </ParticipantProfilecard>

          
           </>
         );
       });
   //
   //
   //
   
     };
     

    return (
        <>

        {/* <NavbarCode logout={props.logout} updateProfile={updateProfile} show={show} 
        // setShow={setShow}  
        loggedInProfile={loggedInProfile}/> */}

      <div className="main"><main>
        <div className="contentContainer">
          <Row className="headerRow">
            <h3 className="header-title">Welcome to Participant Dashboard</h3>
            <h4>Logged in as {loggedInUsername} {props.firstName}</h4>
          </Row>
          <div style={{ float: "right", marginRight: "60px"}}>
      <Button className="logout-button" onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>

        <div className="participant-profile-card">

          {buildLoggedInProfile()}
        </div>


     <Row className="bodyRow mx-auto text-center mt-2">
      <Col xs={6}>
      <>
      <div className="edit-profile-form">
        <AddParticipant
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfile={current}

        // logout={props.logout}
      />
      </div>
      {/* <a className="see-less-btn" onClick={() => setShow(!show)}>See less</a> */}
      </>
      {/* : <a className="buttonShowAdd2" onClick={() => setShow(!show)}>Add profile</a> } */}
      {/* onClick={()=> { func1(); func2();}} */}
      </Col>
      <Col xs={6}>
        {/* { show2? 
          <>
        <Find
            client={props.client}
            querySearch = {querySearch}
            currentProfile={current}
          />
          <a className="see-less-btn" onClick={() => setShow2(!show2)}>See less</a>
          </>
        :<a className="buttonShowAdd2" onClick={() => setShow2(!show2)}>Find Participant</a> } */}
          <br />
          <div className="row row-cols-1 row-cols-md-3 g-4">

              <p>Showing 'employer' cards</p>

            {buildEmployercards()}
          </div>
        </Col>
        </Row>

        {/* </Container> */}
        </div>
      </main>
      </div>

</>
  );
  
  
}
export default ParticipantDashboard;
