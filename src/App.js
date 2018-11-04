import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppHeader from './components/Header/AppHeader';
import KnowledgeMap from './components/KnowledgeMap/KnowledgeMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>

        <KnowledgeMap/>


      </div>
    );
  }
}

export default App;
