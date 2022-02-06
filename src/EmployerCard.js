import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'



function EmployerCard(props){
    const [show,setShow]=useState(false);
    const[like,setLike] = useState(false);
{/* console.log(Profilecard) */}

    return (
        <>
            <Card className="profile-card"  style={{ width: '14rem'}} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 cardImg"  src={props.picture} alt="" />
                {/* <h5 
                onClick={()=>setLike((prevLike) => !prevLike)}>  {like ? "Saved" : "Save?"}</h5> */}

                    <div className="usertype-admindashboard">
                        <Card.Text>{props.userType}</Card.Text> </div>
                        <br />
                    <Card.Text>{props.firstName} {props.lastName}</Card.Text>
                    <Card.Text>{props.bio}</Card.Text>
                    <Card.Text>{props.email}</Card.Text>
                    <Card.Text>{props.location}</Card.Text>
                    


                    <div className="admin-dashboard-social-icons"><Card.Link href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
                    </div>
                    <Button variant="success" size="sm" onClick={() => props.updateProfile(props.id)}> update</Button>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfile(props.id)}> remove</Button>
                    {/* <br/>
                    { show?
                    <>                    <a class="see-less-btn" size="sm" onClick={() => setShow(!show)}>See less</a>
                    <br />
                    <br/>
                    </> 
                    :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>
                    }
                    <br /> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default EmployerCard;