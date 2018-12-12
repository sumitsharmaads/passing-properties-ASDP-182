import React, { Component } from 'react';
import './App.css';
import Parent_child from './Parent_child';
import New_Element from './New_Element'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent_child />
        <New_Element />
      </div>
    );
  }
}

export default App;
