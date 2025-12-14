import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedInIcon from '../assets/img/nav-icon1.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); 
  }

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={handleToggle}> 
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/keanu-milho-teixeira-1259962b9" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" /></a>
                <a href="https://github.com/Codekmt" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://www.instagram.com/keanumtei" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              </div>
              <a href="#contact">
                <button className="vvd" onClick={() => onUpdateActiveLink('contact')}><span>Let’s Connect</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;
