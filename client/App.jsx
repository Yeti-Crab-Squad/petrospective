import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import './styles.css';
import Login from "./components/Login.jsx";
// import Home from "./components/Home.jsx";
import Feed from "./components/Feed.jsx";
import Signup from "./components/Signup.jsx";
import Bucketlist from "./components/Bucketlist.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/feed' component={Feed} />
          <Route exact path='/bucket-list' component={Bucketlist} />
          <Route exact path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
