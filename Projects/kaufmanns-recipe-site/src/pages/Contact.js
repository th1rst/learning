import React from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="data-privacy-container">
        <h1>Kontakt</h1>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Vorname" />
            </Col>
            <Col>
              <Form.Control placeholder="Nachname" />
            </Col>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ihre Email-Adresse" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Betreff</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Rezepte (Anregungen, Kritik)</option>
                <option>Technisches (Fragen, Bugreport)</option>
                <option>Sonstiges</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ihre Nachricht</Form.Label>
              <Form.Control as="textarea" rows="6" cols="500" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Senden
          </Button>
        </Form>
      </div>

      <Footer />
    </div>
  );
}
