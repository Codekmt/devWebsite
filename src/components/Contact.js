import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({});

    try {
      const formData = new FormData();
      for (const field in formDetails) {
        formData.append(field, formDetails[field]);
      }
      formData.append("form-name", "contact");

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "Network error. Could not send message." });
    }

    setButtonText("Send");
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
            <Form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
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
                      value={formDetails.firstName}
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
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
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
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
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                  name="message"
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                />
              </Form.Group>

              <div data-netlify-recaptcha="true" className="mb-3" />

              <div className="d-grid mb-3">
                <Button variant="dark" type="submit">
                  {buttonText}
                </Button>
              </div>

              {status.message && (
                <p className={status.success ? "text-success" : "text-danger"}>
                  {status.message}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
