// import './App.css'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
 

  return (
    <div className="app">
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to='/login'/>}
              {user && <Home />}
            </Route>

            <Route path="/login">
              {user && <Redirect to='/'/>}
              {!user && <Login />}
            </Route>

            <Route path="/signup">
            {user && <Redirect to='/'/>}
              {!user && <Signup />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
