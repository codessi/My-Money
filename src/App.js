// import './App.css'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
    <div>hello world from APP</div>
    
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

      </Switch>
    </Router>
  </div>
  );
}

export default App
