import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardDeck,
  Dropdown,
  DropdownButton,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  return (
    <div className="Home-main-container">
      <div className="rubrik_home_div">
        <h1 className="rubrik_home">Välkommen</h1>
      </div>
      <h1>Hejsan</h1>
      <ScrollAnimation animateIn="fadeIn" duration="10">
        Some Text
      </ScrollAnimation>

      <Card className="Card-home">
        <Card.Img
          variant="top"
          src="ItsME.jpg"
          alt="Picture Of Me"
          className="Home-Card-img"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
