import React, { PureComponent } from 'react';
import 'material-components-web/dist/material-components-web.min.css';
import './App.css';
import HomePage from './pages/';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
          <HomePage/>
      </div>
    );
  }
}

export default App;
