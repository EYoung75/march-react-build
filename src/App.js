import React, { Component } from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        
        <Route path="/" exact component={Home}/>
      </div>
    );
  }
}

export default App;
