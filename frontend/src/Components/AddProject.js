import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

//This is my AddProject component that allows a user to add an additional project using the API//

class AddProject extends React.Component {
    constructor(props) {
    super(props);
    this.AddProjectItem = this.AddProjectItem.bind(this)
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
  
//This passes the state data to the API using the POST method. This is done in a Json format.//

   AddProjectItem(event) {
    event.preventDefault();
    const data = JSON.stringify({ id: parseInt(this.state.id) , title:this.state.title, description:this.state.description, url: this.state.url })
    
    console.log(data)
    
    fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data,
            
        }).then(res => res.json())
       
        .then(response => console.log('Success:', JSON.stringify(response)))
        window.location.reload()
        alert("New Project hase been added")
        
        
  }
  
   
  
    render() {
    
    return (
        <div>
    
        
        <h2>Add another project</h2>
        <Form id="AddForm" onSubmit={this.AddProjectItem}>
            <Form.Group>
            <Form.Label>Enter your id:</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" id="id" name="id" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter your Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" id="title" name="title" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter your Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" id="description" name="description" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter your URL</Form.Label>
            <Form.Control type="text" placeholder="Enter URL" id="url" name="url" onChange={this.handleChange}/>
            </Form.Group>
            
            
    
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        </div>
    );}}


export default AddProject