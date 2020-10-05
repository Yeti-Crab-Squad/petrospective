import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles.css";

const Profile = (props) => {
  return (
    <div>
      <div className = 'profile-container'>
        <h3>Your Profile</h3>
        <div className = "profile">
          <p>Line 1</p>
          <p>Line 2</p>
          <p>Line 3</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;