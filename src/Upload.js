
import 'bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';
import { Table, Button, Form, Row, Col } from "react-bootstrap";


export default function Upload(props) {
  
  const [selectedFile,changeSelectedFile] = useState();

  const upload = (e) => {
    console.log("Upload")
    e.preventDefault()
  }

  const changeHandler = (event) => {
    changeSelectedFile(event.target.files[0]);
  }

  const submitFile = () => {
    props.client.postImage('',selectedFile)
    .then((res) => {
    console.log(res)
    props.changePicture(res.data.link);
    })
  } 
  

  return (
    <>
    <Row>
      <Form.Group onSubmit={upload}>
      <Col md="auto">
      <Form.Control type="file" name="myFile" onChange={changeHandler} ></Form.Control>
      </Col>
      <Col md="auto">
      <Button size="sm" onClick={submitFile} >Upload</Button>
      </Col>
      </Form.Group>
    </Row>
    </>
  )


}