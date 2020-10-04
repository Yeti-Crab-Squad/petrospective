import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles.css';
import Login from "./components/Login.jsx";
// import Home from "./components/Home.jsx";
// import Feed from "./containers/Feed.jsx";
import Signup from "./components/Signup.jsx";
import Bucketlist from './components/Bucketlist.jsx'


class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Signup />
=======
        <Login />
        {/* <Bucketlist /> */}
>>>>>>> f342d4b4013cdc82e99eb2980f031c12ba43e0f2
      </div>
    )
  }
}

export default App;

//<Router>
//<Switch>
//  <Route exact path="/login" component={Login} />
//  <Route exact path="/signup" component={Signup} />
//  {/* <Route exact path="/feed" component={Feed} /> */}
//  <Route exact path="/" component={Login} />
//  <div>404, dawg</div>
//</Switch>
//</Router>
