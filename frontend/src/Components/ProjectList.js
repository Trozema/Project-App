import React from "react";
import Card from 'react-bootstrap/Card';
import '../App.css';


const ProjectsList = props => (

    <div class="ProjectCard">


<Card id="Cards" >
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">ID: {props.ID}</Card.Subtitle>
  <Card.Text>
  
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Title</Card.Subtitle>
  <Card.Text>
  {props.title}
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Project Info</Card.Subtitle>
  <Card.Text>
  {props.description}
  </Card.Text>
  <Card.Link href={props.url}>Project Link</Card.Link>
  
</Card.Body>
</Card>
</div>

);

export default ProjectsList;