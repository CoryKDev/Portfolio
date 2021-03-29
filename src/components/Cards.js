import React from 'react';
import '../css/Cards.css';
import Card from 'react-bootstrap/Card'
import Bear from '../images/minimalist-bear-cabin.png'
import Moon from '../images/minimalist-green-moon.png'
import Canoe from '../images/minimalist-canoe-gree.png'


const Cards = () => {
    return (
        <div className="card-wrapper">
        <Card className="cards" style={{ width: '18rem' }}>
  <Card.Img className="card-img" variant="top" src={Bear} />
  <Card.Body className="text-area">
    <Card.Title>Career Goals</Card.Title>
    <Card.Text>
      Initially I was a barber, finding a way to put my creative outlook into my career. Then the lockdown happened, salons shut down so I tried web development and the rest is history.
      I'm looking to acquire my first position in the industry as a jr. front-end-developer.
      As I gorw in skill I plan to see how far I can take this new artform I stumbled upon
    </Card.Text>
    
  </Card.Body>
</Card>

<Card className="cards" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Moon} />
<Card.Body className="text-area">
  <Card.Title>About Me</Card.Title>
  <Card.Text>
    What's up? My name is Cory, I am a new web developer who has been sucked in to front-end 
    from the first day of class. I've been an artist my whole life and front-end development is the perfect
    mix of art and technology for me. Outside of art and tech I love being outdoors, socializing and gaming.
  </Card.Text>
  
</Card.Body>
</Card>

<Card className="cards" style={{ width: '18rem' }}>
<Card.Img variant="top" src={Canoe} />
<Card.Body className="text-area">
  <Card.Title>Personal Goals</Card.Title>
  <Card.Text>
    One of my major persona goals is, I want to become fluent in at a minimum, three languages.
    I started with Japanese and have been practicing everyday along with coding and front-end development.
   
  </Card.Text>
  
</Card.Body>
</Card>
        
        </div>
    )
}

export default Cards
