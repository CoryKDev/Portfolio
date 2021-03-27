import React from 'react'
import Particles from 'react-particles-js';
//import component here
import Header from '../components/Header';

const MainPage = () => {
    return (
        <div className="main">
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
      <Header />
      </div>
    )
}

export default MainPage
