import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

class DeleteProject extends React.Component {
    constructor(props) {
    super(props);
    this.DeleteProjectItem = this.DeleteProjectItem.bind(this)
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
  
 //This Deletes the The object where the state data matches the project ID//

  DeleteProjectItem(event) {
    event.preventDefault();
    const IDdata =  this.state.id
    
    console.log(IDdata)
    
    fetch(`/api/${IDdata}`, {
            method: "DELETE",
            
            
        }).then(res => res.json())
       
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.log('Error:', error));
       window.location.reload()
       alert("Project Deleted")
        
  }

  
    render() {
    
    return (
        <div>
    <h2>Delete a project</h2>
    <Form id="AddForm" onSubmit={this.DeleteProjectItem}>
        <Form.Group>
        <Form.Label>Enter your project id:</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" id="id" name="id" onChange={this.handleChange} />
        </Form.Group>
      
        <Button variant="primary" type="submit" >
            Delete
        </Button>
    </Form>
    </div>
    );}}


export default DeleteProject