import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props) 
    this.state = {};
    console.log('constructor Call');
  }
  render () {
    console.log('render Call');
    return(
      <h2>[THIS IS RENDER FUNCTION]</h2>
    );
  }
}

export default Lifecycle