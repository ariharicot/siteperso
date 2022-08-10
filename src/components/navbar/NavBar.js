import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  // for changing the bg when scrolling down
  const [scrolled, setScrolled] = useState(false);

  // function for what happens when we scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    // since we use addEventListener, we need to remove it once the component gets removed from the dom
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Alvaronne</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
  </Navbar.Toggle>*/}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* activeLink for enlightening the active link on the navbar */}
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <div className="contact-form">
          <button className="contact" onClick={() => console.log("connect")}>
            <span>Envoyer un message</span>
          </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

