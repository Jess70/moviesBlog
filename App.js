import React, { Component } from 'react';
import './App.css';
//import Counter from './Counter/Counter'
import Auth from './Auth/Auth'
import LogIn from './Auth/LogIn'
import {Route}from 'react-router-dom'

class App extends Component{ 
  render(){
    return(
      <div>
        <Route path="/LogIn"  component={LogIn} />
        <Route path="/" exact component={Auth} />
      </div>
      
    );
  }
}

export default App;
