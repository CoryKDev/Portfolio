import React from 'react'
import Card from 'react-bootstrap/Card'
import '../css/Contact.css';
import { FaGithub } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa'

const ContactForm = () => {
    return (
        <div className="form-wrapper">
        <Card className="contact-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text>
            Cory Keelan
            Corykeelan7@gmail.com
          </Card.Text>
        </Card.Body>
        <Card.Body >
          <Card.Link href="https://github.com/CoryKDev" target="_blank"><FaGithub className="card-links" /></Card.Link>
          <Card.Link href="https://www.linkedin.com/in/cory-keelan-16baa0206/" target="_blank"><FaLinkedin className="card-links" /></Card.Link>

        </Card.Body>
      </Card>
</div>
    )
}

export default ContactForm
