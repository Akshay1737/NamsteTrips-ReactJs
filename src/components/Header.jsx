import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import img from '../assets/2.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container fluid>
      <Row className="head align-items-center">
        {/* Left section */}
        <Col xs={6} className="head-left d-flex align-items-center">
          <div>
            <img src={img} alt="Logo"/>
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>NamasteTrips</h2>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Travel Agency</p>
          </div>
        </Col>

        {/* Right section */}
        <Col xs={6} className="head-m d-flex align-items-center justify-content-end">
          {/* Toggle button visible on mobile */}
          <button className="nav-toggle d-md-none" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Navigation menu */}
          <Nav className={`head-center ${menuOpen ? "active" : ""}`}>
            <Nav.Link className="NavLink" as={Link} to="/" onClick={() => setMenuOpen(false)}>Home</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/destination" onClick={() => setMenuOpen(false)}>Destination</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/about" onClick={() => setMenuOpen(false)}>About</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/service" onClick={() => setMenuOpen(false)}>Service</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Nav.Link>
            <Nav.Link className="booknow" as={Link} to="/" onClick={() => setMenuOpen(false)}>Book Now</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
