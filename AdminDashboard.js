import React, { useState, useEffect } from "react";
import Add from "./Add";
import dashboard from "./dashboard.css";

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

function AdminDashboard(props) {
 // const [events, cEvents] = useState([]);
 const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
 



  // const refreshList = () => {
  //   props.client.getEvents().then((response) => cEvents(response.data));
  // };

  const refreshList = () => {
    props.client.getProfiles().then((response) => cProfiles(response.data));
  };

  
  // const removeEvent = (id) => {
  //   props.client.removeEvent(id).then(() => refreshList());
  // };

  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };

  // const updateEvent = (event) => {
  //   cCurrent(event);
  // };

  const updateProfile = (profile) => {
    cCurrent(profile);
  };

  useEffect(() => {
    refreshList();
  }, []);

  // const buildrows = () => {
  //   return events.map((current) => {
  //     return (
  //       <tr key={current._id}>
  //         <td>{current.name}</td>
  //         <td>{current.location}</td> 
  //         <td>{current.info}</td>
  //         <td>{current.eventDate}</td>
  //         <td>
  //           <button className="remove" onClick={() => removeEvent(current._id)}> remove</button>
  //           <button className="update" onClick={() => updateEvent(current)}> update</button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  const buildrows = () => {
    return profiles.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.username}</td> 
          <td>{current.firstName}</td> 
          <td>{current.lastName}</td>
          <td>{current.bio}</td>
          <td>{current.email}</td>
          <td>{current.image}</td>
          <td>
            <button className="remove" onClick={() => removeProfile(current._id)}>Remove</button>
            <button className="update" onClick={() => updateProfile(current)}>Update</button>
            <button className="view" 
            // button takes you to full profile
            onClick={() => updateProfile(current)}
            >View full profile</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
    <div className="first-div">
    <div className="dashboard-container">
      <h2 className ="dash-header">Current Profiles
      </h2>
      <br />
      <div className="table-container">
      <table>
        <thead className="table-head">
          <tr>
          <th>Username</th>
           <th>First Name</th>
            <th>Last Name</th>
            <th>Bio</th>
            <th>Email</th>
            <th>Photo</th>

        
          </tr>
        </thead>
        <tbody className="table-body">{buildrows()}</tbody>
      </table>
      </div>
      <br />
      <br />
      <h2 className ="dash-header">Add New Profile
      </h2>
      <br />
      <div className="dash-add">
    
        
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfile={current}
      />
      </div>
      </div>
      </div>
    </>
  );
}

export default AdminDashboard;
