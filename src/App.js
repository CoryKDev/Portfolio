import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Components here ▼
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
