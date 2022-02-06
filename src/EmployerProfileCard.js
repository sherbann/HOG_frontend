import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'



function EmployerProfilecard(props){
    const [show,setShow]=useState(false);
    const[like,setLike] = useState(false);
{/* console.log(Profilecard) */}

    return (
        <>
            <Card id="main" className="employer-dashboard-profile-card"  style={{ width: '18rem'}}>
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

                    <Card.Link className="social-icons" href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    <Card.Link className="social-icons" target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                    <Card.Link  className="social-icons"target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
                    <Card.Link  className="social-icons"target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
                    <br />
                    <br />
                    <div className="update-remove-buttons">
                    <Button className="update-button" variant="success" size="sm" onClick={() => props.updateProfile(props.id)}> update</Button>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfile(props.id)}> remove</Button>
                    </div>
                    
                    <br />
                </Card.Body>
            </Card>
        </>
    )
}

export default EmployerProfilecard;