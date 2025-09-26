import React from 'react'
import { Container , Col ,Row,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import img2 from '../assets/2.png'

const Footer = () => {
  return (
    <>
    <Container className='footer'>
      <Row className="row-1">
        
         <Col xs={6} className="col-1 d-flex align-items-center">
                  <div className='logo12'>
                    <img src={img2} alt="Logo" height="50" />
                    <div>
                      </div>
                  </div>
                 
                  <p>Creating extraordinary travel experiences for over 25 years. Your adventure begins with us.</p>
                 
                       <div className="media flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

                 
        </Col>
        <Col id='col1' className='col-1 '>
        <h3>Quick Links</h3>
        <Nav className='nav-link'>
            <Nav.Link className="NavLink" as={Link} to="/" >Home</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/destination" >Destination</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/about" >About</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/service" >Service</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/contact" >Contact</Nav.Link>
            
          </Nav>
           
           
           
           </Col>
        <Col className='col-1'>
        <h3>Services</h3>
        <Nav className='nav-link'>
            <Nav.Link className="NavLink" as={Link} to="/" >Flight Booking
</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/about" >Hotel Reservations</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/menu" >Car Rentals</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/blog" >Guided Tours</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/shop" >Travel Insurance</Nav.Link>
            
          </Nav>
           
           
           
           </Col>
        <Col className='col-1'>
        <h3>Contact Info</h3>
        <div className='info'>
          <img src="./location.svg" alt="" />
          <p>Shivajinagar , pune, India</p>
        </div>
        <div className='info'>
          <img src="./call.svg" alt="" />
          <p>+1 (555) 123-4567</p>
        </div>
        <div className='info'>
          <img src="./Social1.svg" alt="" />
          <p>info@wanderlux.com</p>
        </div>
        
        </Col>
       
        
      </Row>
      <Row className='row-2'>
        <Col>
        <p>© 2024 WanderLux Travel Agency. All rights reserved.</p>
        
        </Col>
        <Col className='policies'>
        <a>Privacy Policy</a>
         <p>Terms of Service</p>
            <p>Cookie Policy</p>
        </Col>

      </Row>
    </Container>
    
    
    
    
    
    
    </>
  )
}

export default Footer