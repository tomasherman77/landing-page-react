import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//create your first component
const NavbarComponent = () => {
	return (
		<>
		  <Navbar bg="dark" variant="dark" expand="lg">
			<Container>
			  <Navbar.Brand href="#title">Start Bootstrap</Navbar.Brand>
			  <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
			  <Nav className="me-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">About</Nav.Link>
				<Nav.Link href="#pricing">Services</Nav.Link>
				<Nav.Link href="#contact">Contact</Nav.Link>
			  </Nav>
			</Container>
		  </Navbar>
		</>
	  );
}

export default NavbarComponent;
