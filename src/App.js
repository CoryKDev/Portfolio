/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Components here ▼
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className="App">
     <Navbar />

      <Switch>
      <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
