import React from 'react';
import {Navbar,Nav} from "react-bootstrap";

const nav =()=>{
    return(
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Invitation</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <Nav.Link href="#1">SERVICES</Nav.Link>
                        <Nav.Link href="#2">ABOUT</Nav.Link>
                        <Nav.Link href="#3">PROJECTS</Nav.Link>
                        <Nav.Link href="#pricing">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default nav;