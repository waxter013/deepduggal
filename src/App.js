import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.min.css';
import './App.css';
import HomePage from './pages/';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomePage/>
      </div>
    );
  }
}

export default App;
