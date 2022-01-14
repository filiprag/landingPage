import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";

function Navbaren() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="navbar-myname">
          <Navbar.Brand className="nav-link-brand" href="/home">
            Filip Ragnestål
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="projects">Prokekt</Nav.Link>
            <Nav.Link href="about">Om mig</Nav.Link>
            <Nav.Link href="contact">Kontakta mig</Nav.Link>
          </Nav>
          <div className="navbar-search">
            <Form inline className="float-right">
              <FormControl
                type="text"
                placeholder="Sök på sidan" /* Denna sökfunktion är ej i funktion, endast där för utsende */
                className=""
              />
            </Form>
          </div>
          <Button variant="outline-success" className="btn-navbar-search">
            Sök
          </Button>
        </Navbar.Collapse>
      </Navbar>

      {/*  
       Gammal Navbar, används ej!
       
       <div className="Navbar">
          <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/arenor">Arenor</Link></li>
       <li><Link to="/weather">Väder</Link></li>
       <li><Link to="/covid">COVID19-Globalt</Link></li>
       <li><Link to="/covidCountry">COVID19-per-land</Link></li>
       <li><Link to="/Users">Konton-Hotell</Link></li>
       <li><Link to="/fortniteStore">Fortnite-Shop</Link></li>
       <li><Link to="/loginHotell">Logga in-Hotell</Link></li>
       <li><Link to="/fortniteStoreList">Fortnite-Shop-Lista</Link></li>
       </ul>  */}
    </div>
  );
}

export default Navbaren;
