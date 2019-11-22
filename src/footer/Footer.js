import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const footer =()=>{
    return(

        <div className="nav-bar-footer container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
                <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default footer;