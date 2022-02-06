import React, { useState } from "react";
import Container  from "react-bootstrap/Container";
// import './App.scss';
import  Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from 'react-select';


function Find(props) {
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
            const searchParams = { 
                sFirstname: e.target.sFirstname.value,
                sLastname: e.target.sLastname.value,
                sEmail: e.target.sEmail.value,
                sLocation: e.target.sLocation.value,
                sSkills: skills.map(item => item.value)
            }
            props.querySearch(searchParams)
    };
    return (
    <>
    <Container className="mx-auto formContainer">
        <br />
        <Form className="form2" onSubmit={(e) => submitHandler(e)} id="findForm">
        <Form.Group>
        <Form.Label>Search:</Form.Label>
        <Form.Control
            type="text"
            defaultValue=
            {props.currentProfileForm?.sFirstname}
            name="sFirstname"
            disabled={disabled}
            placeholder="first name, last name, email, location...">
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

export default Find