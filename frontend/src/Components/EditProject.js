import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

class EditProject extends React.Component {
    constructor(props) {
    super(props);
    this.EditProjectItem = this.EditProjectItem.bind(this)
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
    error: null,
    isLoaded: false,
    
    id: "",
    title: "",
    description: "",
    url: "",
     
  };
  }
  
  //This handles the change in the input bar and stores it as state//
  
  handleChange(event){
    this.setState({ [event.target.name]:event.target.value })
  }

  //This allows the user to edit the title and description of the project where the ID state data matches the object ID//
  
  EditProjectItem(event) {
    event.preventDefault();
    const IDdata =  this.state.id
    const data = JSON.stringify({ title:this.state.title, description:this.state.description })
    
    console.log(data)
    
    fetch(`/api/${IDdata}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: data,
            
        }).then(res => res.json())
       
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.log('Error:', error));
        window.location.reload()
       alert("Project Details have been changed")
        
  }
  

  
  
  
  
  
   
  
    render() {
    
    return (
        <div>

    
        <h2>Edit project</h2>
        <Form id="AddForm" onSubmit={this.EditProjectItem}>
            <Form.Group>
            <Form.Label>Enter your id:</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" id="id" name="id" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter your new Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" id="title" name="title" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter your new Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" id="description" name="description" onChange={this.handleChange}/>
            </Form.Group>
            
            
            
    
            <Button variant="primary" type="submit" >
                Update
            </Button>
        </Form>
        </div>
    );}}


export default EditProject