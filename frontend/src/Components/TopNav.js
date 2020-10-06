import React from 'react';

//This is the navigation bar which uses react bootstrap//
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap';

function TopNav(){

    return(

    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">My Projects App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
      <NavDropdown title="Make Changes" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/Add">Add Projects</NavDropdown.Item>
        <NavDropdown.Item href="/Edit">Edit Projects</NavDropdown.Item>
        <NavDropdown.Item href="/Delete">Delete Projects</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


    )


}


   


export default TopNav;
