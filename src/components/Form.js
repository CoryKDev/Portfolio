import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../css/Contact.css';

const ContactForm = () => {
    return (
        <div className="form-wrapper">
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Message Here</Form.Label>
                <Form.Control id="message"  as="textarea" rows={3} />
            </Form.Group>
            <Button className="email-Btn" >Send</Button>{' '}
        </Form>

        
        </div>
    )
}

export default ContactForm
