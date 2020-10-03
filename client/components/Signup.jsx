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
        <form>
          <label>
            Pet Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            E-mail:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Username:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Password:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit!" />

        </form>
      </div>
    );
  }
}

export default Signup;
