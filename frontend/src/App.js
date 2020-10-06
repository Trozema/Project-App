import React, { Component } from 'react';
import TopNav from './Components/TopNav';
import HomePage from './Components/HomePage'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from 'react-router-dom';
import AddProject from './Components/AddProject';
import DeleteProject from './Components/DeleteProject';
import EditProject from './Components/EditProject';
import Main from './Components/Main'


//For this project moved all my class based components to the components folder. I found this to be the best way in order to use browser routing//
 
const MainPage = () => <div><TopNav></TopNav><HomePage></HomePage><Main></Main></div>
const AddPage = () =>  <div><TopNav></TopNav><AddProject></AddProject></div>
const DeletePage = () => <div><TopNav></TopNav><DeleteProject></DeleteProject></div>
const EditPage = () => <div><TopNav></TopNav><EditProject></EditProject></div>



  class App extends React.Component {
    render(){
      return(
        <div>
        <BrowserRouter>
        <Route exact={true} path="/Add" component={AddPage} />
        <Route exact={true} path="/Delete" component={DeletePage} />
        <Route exact={true} path="/Edit" component={EditPage} />
        <Route exact={true} path="/" component={MainPage} />
        
        </BrowserRouter>
        </div>
  
      )
    }
  }
 
 

export default App;
