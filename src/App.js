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

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
