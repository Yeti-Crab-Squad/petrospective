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
          <button value="Login" className='login-btn'>
            Log In
          </button>

        </div>
      </div>
    );
  }
}

export default Login;
