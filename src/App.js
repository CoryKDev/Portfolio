/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Components here ▼
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "2cd7dd"
              }
            }
          }
        }}
      />
      <Navbar />

      <Switch>
      <Route path="/" component={Header} />
      </Switch>
    </div>
  );
}

export default App;
