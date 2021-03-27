import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
//import Components here ▼
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
    <Particles 
    params={{
      particles: {
        number:{
        value: 30,
        density:{
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
      <Header />
    </div>
  );
}

export default App;
