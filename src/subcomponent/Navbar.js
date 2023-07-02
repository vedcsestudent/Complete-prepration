import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {Link} from "react-router-dom";
function Navigation() {
  return (
    <>
      <Navbar  className="M_navbar" data-bs-theme="dark">
     
        <Container>
        
          <div className="me-auto navcontainer">
          
         <Nav className="nav_contents"> <Link to="/" class="white_link"> Home</Link></Nav> 
           <Nav className="nav_contents"><Link  class="white_link " to ="/about">About us</Link></Nav>
           <Nav className="nav_contents"><Link class="white_link" to ="/service">Service</Link></Nav>
          </div>
        </Container>
       
      </Navbar>
      <br />
   
     
    </>
  );
}

export default Navigation;