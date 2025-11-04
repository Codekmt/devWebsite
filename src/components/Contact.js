import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // Track successful submission

  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <Container>
        <h2 className="text-center mb-5">Let's Connect</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <img
              src={contactImg}
              alt="Contact Illustration"
              style={{ maxWidth: "80%", borderRadius: "1rem" }}
            />
          </Col>

          <Col md={6}>
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              onSubmit={() => setSubmitted(true)} 
              className="p-4 shadow-lg rounded bg-white"
            >

              <input type="hidden" name="form-name" value="contact" />

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Phone Number" name="phone" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                  name="message"
                  required
                />
              </Form.Group>

              <div data-netlify-recaptcha="true" className="mb-3" />

              <div className="d-grid mb-3">
                <Button variant="dark" type="submit">
                  Send
                </Button>
              </div>

              {submitted && (
                <p className="text-success">
                  Thank you! I’ll get back to you soon.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
