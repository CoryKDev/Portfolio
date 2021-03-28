/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Form from '../components/Form'

import Particles from 'react-particles-js';

const ContactPage = () => {
    return (
        <div className="contact">
        <Particles
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
        <Form />
        </div>
    )
}

export default ContactPage
