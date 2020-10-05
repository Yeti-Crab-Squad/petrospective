import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles.css';
import Login from "./components/Login.jsx";
// import Home from "./components/Home.jsx";
import Feed from "./components/Feed.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import Bucketlist from './components/Bucketlist.jsx'

<<<<<<< HEAD
=======

<<<<<<< HEAD
class App extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    )
  }
=======
>>>>>>> main
const App = () => {
  return (
  <div>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/feed" component={Feed} /> 
        <Route exact path="/" component={Login} />
        </Switch>
      </Router>
  </div>
  );
<<<<<<< HEAD
=======
>>>>>>> a372d4370fd321069eee56f0da7a2aceb0405995
>>>>>>> main
}

export default App;

