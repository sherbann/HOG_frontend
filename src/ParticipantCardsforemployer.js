import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './EmployerDashboard.css'



function ParticipantCardforemployer(props){
    const [show,setShow]=useState(false);
    const[like,setLike] = useState(false);
{/* console.log(Profilecard) */}

    return (
        <>
            <Card id="main" className="profile-card"  style={{ width: '18rem'}}>
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 cardImg hover-shadow"  src={props.picture} alt="" />
                {/* <h5 
                onClick={()=>setLike((prevLike) => !prevLike)}>  {like ? "Saved" : "Save?"}</h5> */}

                    <div className="firstname-lastname">
                        <Card.Text>{props.firstName} {props.lastName}
                        </Card.Text>
                    </div>
                    <br />
                    <Card.Text>{props.email}</Card.Text>
                    <Card.Text>{props.bio}</Card.Text>
                    <Card.Text>{props.location}</Card.Text>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Employed: {props.isEmployed}</Card.Text>
                    <Card.Text>Skills: 
                        <br /> {props.skills}</Card.Text>

                    <Card.Link className="social-icons" href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    <Card.Link className="social-icons" target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                    <Card.Link  className="social-icons"target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
                    <Card.Link  className="social-icons"target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
                    <br />
                    
                    <br />
                </Card.Body>
            </Card>
        </>
    )
}

export default ParticipantCardforemployer;