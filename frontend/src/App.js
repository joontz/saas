import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch  } from "react-router-dom";
import Home from "./components/Home"; 
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";

class App extends Component {
  render() {
    return (
    <div>
      <Root>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/dashboard" component={Dashboard}/>
          <Route path = "/signup" component={Signup}/>
        </Switch>
      </Root>
    </div>
    );
  }
}

export default App;