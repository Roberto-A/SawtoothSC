import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Company</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Enter information about an item below.
          </p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
