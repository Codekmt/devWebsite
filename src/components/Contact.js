import { Container, Row, Col, Button, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
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
              action="/thank-you"  
              className="p-4 shadow-lg rounded bg-white"
            >
              <input type="hidden" name="form-name" value="contact" />

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="firstName" placeholder="First Name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="lastName" placeholder="Last Name" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Email Address" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" name="phone" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="message" rows={5} placeholder="Message" required />
              </Form.Group>


              <div data-netlify-recaptcha="true" className="mb-3" />

              <div className="d-grid mb-3">
                <Button type="submit" variant="dark">Send</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
