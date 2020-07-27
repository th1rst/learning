import React, {useState} from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import { Form, Row, Col, Button, Modal} from "react-bootstrap";

//as of now, this is a dummy page as there is no Backend to send emails from
export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="data-privacy-container">
        <h1>Kontakt</h1>
        <div className="form-container">
          <Form>
            <Row>
              <Col>
                <Form.Control className="contact-form" placeholder="Vorname" />
              </Col>
              <Col>
                <Form.Control className="contact-form" placeholder="Nachname" />
              </Col>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="contact-form"
                  type="email"
                  placeholder="Ihre Email-Adresse"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Betreff</Form.Label>
                <Form.Control
                  className="contact-form"
                  as="select"
                  defaultValue="Choose..."
                >
                  <option>Rezepte (Anregungen, Kritik)</option>
                  <option>Technisches (Fragen, Bugreport)</option>
                  <option>Sonstiges</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ihre Nachricht</Form.Label>
              <Form.Control
                className="contact-form"
                as="textarea"
                rows="6"
                cols="500"
              />
            </Form.Group>
            <Button
              className="contact-send-button"
              variant="primary"
              onClick={handleShow}
            >
              Senden
            </Button>
          </Form>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Das hat geklappt!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Vielen Dank für Ihre Nachricht.<br />
              Wir werden uns schnellstmöglich bei Ihnen melden.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Schließen
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Footer />
    </div>
  );
}
