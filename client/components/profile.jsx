import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      failedLogin: false,
      //object -- all the info
    };
  }    

  render() {
    if (this.state.loggedIn) {
      // return <Redirect to="/feed" />;
    }

    return (
      <div className = 'form-container'>
        <h1>Welcome !</h1>
      </div>
    );
  }
}
