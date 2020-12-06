import React, { Component } from "react";
import "./App.css";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import ProjectAdd from "./components/projectsAdd.js";
import Logout from "./components/logout.js";
import clientDashboard from './clientDashboard';
import companyDashboard from './companyDashboard/companyDashboard';
import Home from "./components/Home";
import ProtectedRoute from './ProtectedRoute';
// import Header from "./components/header.js";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }

  // localStorage.getItem("token")

  isLoggedin = (bool) => {
    console.log("isLoggedin value is " + bool);
    this.setState({ loggedIn: bool });
  };

  logout = () => {
    this.setState({ loggedIn: false });
    console.log("Logout getting called!");
  };

  render() {
    let { loggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          
          <nav>
                <Link to="/">Home</Link>
              {loggedIn ? (              
                  <Link to="/logout">Logout</Link>
              ) : (
                 <Link to="/login">Login</Link>
              )}
                <Link to="/project">Project</Link>
              
            
          </nav>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/project" component={ProjectAdd} />
            <Route
              path="/login"
              exact
              render={() => <Login isLoggedin={this.isLoggedin} />}
            />
            <Route
              path="/logout"
              render={(props) => <Logout {...props} logout={this.logout} />}
            />
            <ProtectedRoute exact path='/clientDashboard' component={clientDashboard} />
            <ProtectedRoute exact path='/companyDashboard' component={companyDashboard} />
            <Route
              path="/"
              exact
              render={() => <Login isLoggedin={this.isLoggedin} />}
            />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function NoMatch(){
  return(
      <div>
          NoMatch
      </div>
  )
}

export default App;
