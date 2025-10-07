import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const API_URL = "https://personalportfolio-kgm7.onrender.com/api/contact";
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
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        setFormDetails({ firstName:"", lastName:"", email:"", phone:"", message:"" });
      } else {
        setStatus({ success: false, message: data.message });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "Network error. Could not send message." });
    }

    setButtonText("Send");
  };

  return (
    <section id="contact" style={{ padding: "80px 0", backgroundColor: "" }}>
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
            <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="First Name" 
                      value={formDetails.firstName} 
                      onChange={e => onFormUpdate("firstName", e.target.value)} 
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="Last Name" 
                      value={formDetails.lastName} 
                      onChange={e => onFormUpdate("lastName", e.target.value)} 
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
                      value={formDetails.email} 
                      onChange={e => onFormUpdate("email", e.target.value)} 
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={formDetails.phone} 
                      onChange={e => onFormUpdate("phone", e.target.value)} 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Message" 
                  value={formDetails.message} 
                  onChange={e => onFormUpdate("message", e.target.value)} 
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button variant="dark" type="submit">{buttonText}</Button>
              </div>

              {status.message && (
                <p className={status.success ? "text-success" : "text-danger"}>{status.message}</p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
