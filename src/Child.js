import React, { Component } from 'react';
import './App.css';

const Child = ({change, counter}) => {
    return (
      <div className="Child">
      	<h2>This is an increment in child component by {counter}</h2>
      	<button onClick={change}>Click me</button>
      </div>
    );
  }

export default Child;