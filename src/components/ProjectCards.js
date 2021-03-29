import React from 'react'
import Card from "react-bootstrap/Card"
import Projectone from "../images/web-dev-machine.png"
import Projecttwo from "../images/minimalist-dev-laptop.png"

const ProjectCards = () => {
    return (
        <div className="card-wrapper">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Projectone} />
        <Card.Body>
          <Card.Title>Project One</Card.Title>
          <Card.Text>
            A app using google maps and bing news to find news based on clicked location
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://news-flow.herokuapp.com/" target="_blank">View</Card.Link>
          <Card.Link href="https://github.com/CoryKDev/news-flow" target="_blank">Github</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Projecttwo} />
      <Card.Body>
        <Card.Title>Project Two</Card.Title>
        <Card.Text>
          A application using google and mongodb to search books 
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://googlebook11.herokuapp.com/" target="_blank">View</Card.Link>
        <Card.Link href="https://github.com/CoryKDev/21-google-book-search" target="_blank">Github</Card.Link>
      </Card.Body>
    </Card>
      
   </div>
    )
}

export default ProjectCards
