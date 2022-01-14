import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardDeck,
  Dropdown,
  DropdownButton,
  Button,
  Col,
  Row,
  Spinner,
} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
      console.log("körs");
    };
    loadData();
  }, []);
  if (loading) {
    return (
      <div>
        Laddar....
        <div className="Projects-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  } else if (!loading) {
    return (
      <div>
        <div className="rubrik_home_div">
          <h1 className="rubrik_home">Mina projekt</h1>
        </div>
        <h1>Ta en titt</h1>
        <Row>
          <Col>
            <Card className="Card-project-top">
              <Card.Img
                variant="top"
                src="react-brands.svg"
                alt="Picture Of Me"
                className="Project-Card-img"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="Card-project-top">
              <Card.Img
                variant="top"
                src="ItsME.jpg"
                alt="Picture Of Me"
                className="Project-Card-img"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ScrollAnimation animateIn="fadeIn">
          <Row>
            <Col>
              <Card className="Card-project">
                <Card.Img
                  variant="top"
                  src="ItsME.jpg"
                  alt="Picture Of Me"
                  className="Project-Card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Card-project">
                <Card.Img
                  variant="top"
                  src="ItsME.jpg"
                  alt="Picture Of Me"
                  className="Project-Card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          Some Text
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration="5">
          <Row>
            <Col>
              <Card className="Card-project">
                <Card.Img
                  variant="top"
                  src="ItsME.jpg"
                  alt="Picture Of Me"
                  className="Project-Card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Card-project">
                <Card.Img
                  variant="top"
                  src="ItsME.jpg"
                  alt="Picture Of Me"
                  className="Project-Card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          Some Text
        </ScrollAnimation>
      </div>
    );
  }
}

export default Projects;
