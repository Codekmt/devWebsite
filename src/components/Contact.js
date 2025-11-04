import { Container, Row, Col, Button, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // success/error message
  const [isSending, setIsSending] = useState(false); // disable button while sending

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm('service_2uegegq', 'template_vsgzr9z', form.current, 'HDievMl-ne2D3qvdF')
      .then(
        () => {
          setStatus("Thank you! I’ll get back to you soon.");
          form.current.reset(); // clear form
          setIsSending(false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus("Oops! Something went wrong. Please try again.");
          setIsSending(false);
        }
      );
  };

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
            <Form ref={form} onSubmit={sendEmail}>
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

              <div className="d-grid mb-3">
                <Button type="submit" variant="dark" disabled={isSending}>
                  {isSending ? "Sending..." : "Send"}
                </Button>
              </div>

              {status && (
                <p className={status.includes("Thank you") ? "text-success" : "text-danger"}>
                  {status}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
