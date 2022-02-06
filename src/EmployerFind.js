import React, { useState } from "react";
import Container  from "react-bootstrap/Container";
import  Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from 'react-select';


function EmployerFind(props) {
    const [disabled, cDisabled] = useState(false);
    const[skills,cSkills]=useState([])
    const skillOptions = [
        { value: 'JavaScript', label: 'Javascript' },
        { value: 'HTML', label: 'Html' },
        { value: 'CSS', label: 'CSS' },
        { value: 'React', label: 'React'}
    ]
    const submitHandler = (e) => {
        e.preventDefault();
            const searchEmployerParams = { 
                sFirstname: e.target.sFirstname.value,
                sLastname: e.target.sLastname.value,
                sEmail: e.target.sEmail.value,
                sSkills: skills.map(item => item.value),
                sLocation: e.target.sLocation.value,
            }
            props.querySearch2(searchEmployerParams)
    };
    return (
    <>
    <Container className="mx-auto formContainer">
        <h5 className="findHeader">Searching for...</h5>
        <br />
        <Form className="form2" onSubmit={(e) => submitHandler(e)} id="findForm">
        <Form.Group>
        <Form.Label>First name:</Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sFirstname}
            name="sFirstname"
            disabled={disabled}
            placeholder="Participant's first name">
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Last name:</Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sLastname}
            name="sLastname"
            disabled={disabled}
            placeholder="Participant's last name">
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sEmail}
            name="sEmail"
            disabled={disabled}
            placeholder="Participant Email">
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Location:</Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sLocation}
            name="sLocation"
            disabled={disabled}
            placeholder="Participant location">
        </Form.Control>
        </Form.Group>
        <Form.Group className="findSelectForm" >
        <Form.Label>Skills</Form.Label>
        <Select
            className="findSelect"
            onChange={(e)=>{cSkills(e)}}
            closeMenuOnSelect={false}
            defaultValue={props.skills}
            isMulti
            options={skillOptions}
            name="skills">
        </Select>
        </Form.Group>
        <br/>
        <Button  size="sm" type="submit" disabled={disabled}>
            {" "}
            Search{" "}
        </Button>
    </Form>
    </Container>
    </>
);
}

export default EmployerFind;