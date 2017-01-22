import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>&lt;BROJECTS&gt;</h2>
          <p>Better Github projects</p>
        </div>
        <p className="App-intro">
          Interactive and flexible project management on top of Github projects.
        </p>
      </div>
    );
  }
}

export default App;
