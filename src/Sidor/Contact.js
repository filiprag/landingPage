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
  Form,
} from "react-bootstrap";

function Contact() {
  return (
    <div>
      <div className="rubrik_home_div">
        <h1 className="rubrik_home">Hör av dig så hörs vi snart!</h1>
      </div>
      <h1>Ingen data sparas</h1>

      <Card className="Card-home">
        <Form className="Contact-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@gmail.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ditt namn</Form.Label>
            <Form.Control type="password" placeholder="Förnman" />
            <div className="Contact-input-lastName">
              <Form.Control type="password" placeholder="Efternamn" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fråga / Ärende</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Din fråga till mig"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Jag godkänner att bli kontaktad"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Kontakta mig
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
