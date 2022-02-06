import React, { useState } from "react";
import add from "./add.css";

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

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfile) {
      result = props.client.updateProfile(
        props.currentProfile._id,
        e.target.username.value,
        e.target.userType.value,
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.bio.value,
        e.target.email.value,
        e.target.image.value,
        e.target.cv.value,
        e.target.isEmployed.value,


      );
    } else {
      result = props.client.addProfile( 
        e.target.username.value,
        e.target.userType.value,
        e.target.firstName.value, 
        e.target.lastName.value, 
        e.target.bio.value,
        e.target.email.value,
        e.target.image.value,
        e.target.isEmployed.value,


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

        <br />

<div className="add-group">
  <label htmlFor="image">Photo:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.image}
  name="image" id="image"
  disabled={disabled}
/>
</div>
        
<br />

<div className="add-group">
  <label htmlFor="cv">CV:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.cv}
  name="cv" id="cv"
  disabled={disabled}
/>
</div>

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
  <label htmlFor="isEmployed">Employed:</label>

<input
  type="text"
  defaultValue={props.currentProfile?.isEmployed}
  name="isEmployed" id="isEmployed"
  disabled={disabled}
/>
</div>

<br />
        
        <button className="update" type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;

