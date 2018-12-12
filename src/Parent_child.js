import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class Parent_child extends Component {
	constructor(props){
		super(props);
		this.state = {counter:1}                 
	}


	Clickme = () => {
		console.log('counter value');
		const TempCounter = this.state.counter;
		this.setState({counter:TempCounter +1});
		console.log('increment');
	}

  	render() {
    	return (
     	 <div className="Parent_child">
     	 	<h1> This increment is going on through child {this.state.counter}</h1>
     	 	<hr/>
      	    <Child change={this.Clickme} counter={this.state.counter} />
      	</div>
   	 );
  }
}

export default Parent_child;