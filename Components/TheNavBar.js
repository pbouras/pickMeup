import React, { useState } from 'react'
import '../Css/TheNavBar.css';
import { Navbar, NavDropdown, Container, Row,Col,Nav,Button} from 'react-bootstrap';
import ModalTransfer from './ModalTransfer';
const logo = require('../taxi_service_03.jpg'); // with require


const TheNavBar = () => {

    return (
    <section>
    <Container>
    <div>  
        <Navbar collapseOnSelect expand="lg" sticky="top"  >
        
            <Navbar.Brand href="#home">Pick Me Up</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">About us</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {/*<Button variant="success" onClick={handleModalOpen}>Book a Transfer</Button>*/}
                    <ModalTransfer />
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    </div>  
    
    <ul className="list">
        <li>
            <div className='textoverlay'>
                <h2> The best way <br/> to arrive in <strong>Athens</strong></h2>
            </div>
            <img src={logo} className="bg-img"/>
        </li>
    </ul>
    </Container>
    </section>
    )
}

export default TheNavBar;