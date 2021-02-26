import React, { useState } from 'react'
import { Navbar, Nav } from "react-bootstrap";


const NavbarComp = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NAVBAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>   
    )
}

export default NavbarComp