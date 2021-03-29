/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Components here ▼
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Route>
    <div className="App">
     <Navbar />

      <Switch>
      
      <Route path="/ContactPage" component={ContactPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/aboutme" component={AboutMePage} />
      <Route path="/" component={MainPage} />
      </Switch>
    </div>

    <Footer />
    </Route>
    
  );
}

export default App;
