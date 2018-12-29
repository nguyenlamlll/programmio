import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AppHeader from './components/Header/AppHeader';
import KnowledgeMap from './components/KnowledgeMap/KnowledgeMap';
import PersonalProgress from './components/PersonalProgress/PersonalProgress';
import FriendBox from './components/Friend/FriendBox';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <AppHeader/>
        <Grid container spacing={16}>
          <Grid item xs={0} sm={2} lg={2}>
          </Grid>
          <Grid item xs={11} sm={7} lg={7}>
            <KnowledgeMap/>
          </Grid>

          <Grid item xs={12} sm={2} lg={2}>
            <PersonalProgress/>

            <FriendBox/>
          </Grid>
        </Grid>


      </div>
    );
  }
}

export default App;
