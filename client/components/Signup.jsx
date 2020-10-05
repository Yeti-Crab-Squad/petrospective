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

    this.validate = this.validate.bind(this);
  }

  validate(){

    const bio = document.getElementById("bio").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profilePicture = 'this is a src for am img';

    const body = {
      username,
      password,
      profilePicture,
      age,
      bio,
      name
    }

    fetch('/api/pet/signup', {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        loggedIn: true
      })
    })
    .catch(err => console.log(`Error: ${err} `))

  }

  render() {
    if (this.state.loggedIn) {
      // return <Redirect to="/feed" />;
    }

    return (
      <div className = 'form-container'>
        <h1>Welcome !</h1>
        <div>
          <div className="input-group">
            <label htmlFor="username">Name:</label>
            <input 
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Age:</label>
            <input 
              type="string"
              name="age"
              placeholder="Age"
              id="age"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              name="username"
              placeholder="Username"
              id="signupUsername"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Password:</label>
            <input 
              type="text"
              name="password"
              placeholder="Password"
              id="signupPassword"
              ></input>
          </div>
          <div className="input-group">
            <label htmlFor="username">Bio:</label>
            <textarea
              type="text"
              name="bio"
              placeholder="Bio"
              id="bio"
              rows="4"
              cols="50"
              ></textarea>
          </div>
          <input type="submit" value="Sign Up" className='login-btn' onClick={this.validate} />

        </div>
      </div>
    );
  }
}

export default Signup;
