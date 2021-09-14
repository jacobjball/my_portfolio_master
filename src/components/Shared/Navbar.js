import React, { Component } from 'react';
import { Navbar, Nav, Container,NavLink, NavDropdown} from 'react-bootstrap';
import Logo_5 from '../../images/Logo_5.png'
import resume from '../../assets/resume.pdf'
import '../../index.css'

class CustomNavbar extends Component {
    render() {
      return (
        <>
        <Container>
        <Navbar collapseOnSelect expand='lg' fixed="top" class='nav'> 
        
            <Navbar.Brand href='/' class='' >
              <img 
              src={Logo_5}
              width='10%'
              height='10%'

              />
            </Navbar.Brand>
          
             <Nav class='navlinks'>
              <Nav.Link class='about' href="about">
                  About
              </Nav.Link>
              <Navbar.Brand href="experience">
                Experience
              </Navbar.Brand>
              <Navbar.Brand href="work">
                Portfolio
              </Navbar.Brand>
              <Navbar.Brand href="contact">
                Contact
              </Navbar.Brand>
              <Navbar.Brand>
              <a href= {resume} class="btn btn-outline" target='_blank'>Resume</a>
              </Navbar.Brand>
              </Nav>
          
        </Navbar>
        </Container>
        </>
      )
    }
  
}

export default CustomNavbar;