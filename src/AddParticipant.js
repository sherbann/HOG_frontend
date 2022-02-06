import React, { useState } from "react";
import add from "./add.css";
import { FormLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Select from 'react-select'; 
import Upload from "./Upload";

// function Add(props) {
//   const [disabled, cDisabled] = useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     cDisabled(true);
//     let result;
//     if (props.currentEvent) {
//       result = props.client.updateEvent(
//         props.currentEvent._id,
//         e.target.eventName.value,
//         e.target.location.value,
//         e.target.info.value,
//         e.target.eventDate.value
//       );
//     } else {
//       result = props.client.addEvent(e.target.eventName.value, e.target.location.value, e.target.info.value, e.target.eventDate.value);
//     }
//     result
//       .then(() => {
//         cDisabled(false);
//         document.getElementById("addForm").reset();
//         props.refreshList();
//       })
//       .catch(() => {
//         alert("an error occured, please try again");
//         cDisabled(false);
//       });
//   };

function AddParticipant(props) {
  const [disabled, cDisabled] = useState(false);
  const[picture,cPicture]=useState('' || props.picture)
  const[skills,cSkills]=useState([])
  const skillOptions = [

      { value: ' Javascript ', label: 'JavaScript' },
      { value: ' HTML ', label: 'Html' },
      { value: ' CSS ', label: 'CSS' },
      { value: ' React ', label: 'React'}

    ]

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfile) {
      result = props.client.updateProfile(
        props.currentProfile._id,
        // e.target.title.value,
        e.target.username.value,
        e.target.userType.value,
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.bio.value,
        e.target.email.value,
        e.target.location.value,
        e.target.portfolio.value,
        e.target.github.value,

        e.target.linkedin.value,
        e.target.isEmployed.checked,
        skills.map( (item) => { return(item.value)}),

        // e.target.image.value,
        // e.target.cv.value,


        // e.target.employedInTech.value,
        // e.target.employedOther.value,
        // e.target.freelance.value,
        // e.target.notEmployed.value,
        // e.target.like.value,
        // e.target.linkedin.value,
        // e.target.github.value,
        // e.target.portfolio.value,


      
      );
    } else {
      result = props.client.addProfile( 
        // e.target.title.value,
        e.target.username.value,
        e.target.userType.value,
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.bio.value,
        e.target.email.value,
        e.target.location.value,
        e.target.portfolio.value,
        e.target.github.value,

        e.target.linkedin.value,
        e.target.isEmployed.checked,
        skills.map( (item) => { return(item.value)}),





    //     e.target.image.value,
    //     e.target.cv.value,

    //     e.target.employedInTech.value,
    //     e.target.employedOther.value,
    //     e.target.freelance.value,
    //     e.target.notEmployed.value,
    //     e.target.like.value,
    //     e.target.linkedin.value,
    //     e.target.github.value,
    //     e.target.portfolio.value,

        );
    }
    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };

 

  return (
    <>

    {props.currentProfile ? "" : ""}
    <br />
    
    <form onSubmit={(e) => submitHandler(e)} id="addForm">
      <br />
        <div className="add-group">
          <label htmlFor="username">Username:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.username}
          name="username"
          id="username"
          disabled={disabled}
        />
        </div>

         <br />
        <div className="add-group">
          <label htmlFor="userType">User Type:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.userType}
          name="userType"
          id="userType"
          disabled={disabled}
        />
        </div>

      <br />
        <div className="add-group">
          <label htmlFor="firstName">First Name:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.firstName}
          name="firstName"
          id="firstName"
          disabled={disabled}
        />
        </div>

        <br />

        <div className="add-group">
          <label htmlFor="lastName">Last Name:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.lastName}
          name="lastName"
          id="lastName"
          disabled={disabled}
        />
        </div>

        <br />

        <div className="add-group">
          <label htmlFor="bio">Bio:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.bio}
          name="bio" id="bio"
          disabled={disabled}
        />
        </div>

        <br />

        <div className="add-group">
          <label htmlFor="email">Email:</label>
        
        <input
          type="text"
          defaultValue={props.currentProfile?.email}
          name="email" id="email"
          disabled={disabled}
        />
        </div>

        {/* <br />

<div className="add-group">
  <label htmlFor="image">Photo:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.image}
  name="image" id="image"
  disabled={disabled}
/>
</div> */}
        
{/* <br />

<div className="add-group">
  <label htmlFor="cv">CV:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.cv}
  name="cv" id="cv"
  disabled={disabled}
/>
</div> */}

<br />

<div className="add-group">
  <label htmlFor="location">Location:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.location}
  name="location" id="location"
  disabled={disabled}
/>
</div>

<br />


<div className="add-group">
  <label htmlFor="portfolio">Portfolio:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.portfolio}
  name="portfolio" id="portfolio"
  disabled={disabled}
/>
</div>

<br />

<div className="add-group">
  <label htmlFor="github">github:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.github}
  name="github" id="github"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">

  <label htmlFor="linkedin">Linkedin:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.linkedin}
  name="linkedin" id="linkedin"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">
  <label htmlFor="isEmployed">Employed:</label>

<input
  type="switch"
  defaultValue={props.currentProfile?.isEmployed}
  name="isEmployed" id="isEmployed"
  disabled={disabled}
/>
</div>
<br />
<div className="add-group">
  <label htmlFor="skills">Skills:</label>

  <Select
          className="findSelect" 
          onChange={(e)=>{cSkills(e)}}
          closeMenuOnSelect={false}
          defaultValue={props.skills}
          isMulti
          options={skillOptions}
          name="skills">
          </Select>
</div>


{/* <div className="add-group">

  <label htmlFor="like">Like:</label>

<input
  type="switch"
  defaultValue={props.currentProfile?.like}
  name="like" id="like"
  disabled={disabled}
/>
</div>

<br /> */}

{/* <div className="add-group">
  <label htmlFor="employedInTech">Employed in what tech role:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.employedInTech}
  name="employedInTech" id="employedInTech"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">
  <label htmlFor="employedOther">Employed in another role:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.employedOther}
  name="employedOther" id="employedOther"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">
  <label htmlFor="freelance">Freelance:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.freelance}
  name="freelance" id="freelance"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">
  <label htmlFor="notEmployed">Not employed:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.notEmployed}
  name="notEmployed" id="notEmployed"
  disabled={disabled}
/>
</div>

<br />
<div className="add-group">
  <label htmlFor="inEducation">In education or training:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.inEducation}
  name="inEducation" id="inEducation"
  disabled={disabled}
/>
</div> */}
        
        <button className="update" type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>

      </form>    

    </>
  );
}


export default AddParticipant;

