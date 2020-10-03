import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles.css';

class App extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
}

export default App;