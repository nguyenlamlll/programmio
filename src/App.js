import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AppHeader from './components/Header/AppHeader';
import Main from './components/Main';
import Profile from './components/Profile/Profile';
import { BASE_NAME } from './Config';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={BASE_NAME}>
        <div className="App" >
          <AppHeader/>

          <Route exact path="/" component={Main} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
