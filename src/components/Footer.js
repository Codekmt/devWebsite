import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/githubIcon.png";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a href="https://www.linkedin.com/in/keanu-milho-teixeira-1259962b9" target="_blank"><img src={linkedInIcon} alt="linkedinIcon" /></a>
              <a href="https://www.facebook.com/keanu.m.teixeira" target="_blank"><img src={githubIcon} alt="githubIcon" /></a>
              <a href="https://www.instagram.com/keanumtei"><img src={instagramIcon} alt="instagramIcon" /></a>
            </div>
            <p>Copyright 2025 Keanu Milho Teixeira</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}