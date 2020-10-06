import React from 'react';
import ProjectList from './ProjectList'

class Main extends React.Component {
    constructor(props) {
    super(props);
   
    this.handleChange = this.handleChange.bind(this);
   
    this.state = {
    error: null,
    isLoaded: false,
    projects: [],
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
  
   
  
  
    componentDidMount() {
    fetch("/api")
    .then(res => res.json())
    .then(
    (result) => {
  
      console.log(result)
    this.setState({
    isLoaded: true,
    projects: result
    }); 
  },
    (error) => {
    this.setState({
    isLoaded: true,
    error
    }); 
  }) 
  }
  
    render() {
    const { error, isLoaded, projects } = this.state;
  
    
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
      <div>
        
   
  
    {projects.map(project => (
    <ProjectList
    key = {project.id}
    ID = {project.id}
    title = {project.title}
    description = {project.description}
    url = {project.url}
    />
    ))}
  
   
  
  
    </div>
    );}}}

    export default Main