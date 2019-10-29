import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Edit from './components/Edit/Edit';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  submit = (user) => {
    this.setState({
      user: user
    })  
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            <Login submit={this.submit} />
          }
        >
        </Route>
        <Route
          path="/home"
          render={() =>
            <Home user={this.state.user} >
            </Home>
          }
        >
        </Route>
      </Router>);
  }
}


export default App;
