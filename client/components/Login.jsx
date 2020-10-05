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

    this.validate = this.validate.bind(this);
  }

  validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const body = {
      username,
      password,
    };

    // console.log("This is outside of the POST", body)

    fetch("/api/pet/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loggedIn: true,
        });
      })
      .catch((err) => console.log(`Error: ${err} `));
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/feed' />;
    }

    return (
      <div className='form-container'>
        <h1>Petrospective!</h1>
        <div className='input-container'>
          <div className='input-group'>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              id='username'></input>
          </div>
          <div className='input-group'>
            <label htmlFor='username'>Password: </label>
            <input
              type='text'
              name='password'
              placeholder='Password'
              id='password'></input>
          </div>
          <input
            type='submit'
            value='Login'
            className='login-btn'
            onClick={this.validate}
          />
          <Link to='signup'>Sign up here!</Link>
        </div>
      </div>
    );
  }
}

export default Login;
