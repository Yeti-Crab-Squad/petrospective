import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      failedLogin: false,
    };

    // this.validate = this.validate.bind(this);
  }

  render() {
    // if (this.state.loggedIn) {
    //   return <Redirect to="/feed" />;
    // }

    return (
      <div className = 'form-container'>
        <h1>Welcome !</h1>
        <div>
          <div className="input-group">
            <label htmlFor="username">Name:</label>
            <input 
              type="text"
              name="username"
              placeholder="Name"
              id="username"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Age:</label>
            <input 
              type="text"
              name="password"
              placeholder="Age"
              id="signupPassword"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Password:</label>
            <input 
              type="text"
              name="password"
              placeholder="Password"
              id="password"
              ></input>
          </div>
          <button value="Sign Up" className='login-btn'>
            Sign Up
          </button>

        </div>
      </div>
    );
  }
}

export default Signup;
