import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedInIcon from '../assets/img/nav-icon1.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  useEffect(() => {
    const onScrolledCheck = () => {
      setScrolled(window.scrollY > 50);
    };

    const onScrollChange = () => {
      const scrollPos = window.scrollY + 200;

      const sections = [
        { id: 'contact', key: 'contact' },
        { id: 'projects', key: 'projects' },
        { id: 'skills', key: 'skills' },
        { id: 'home', key: 'home' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveLink(section.key);
          handleLinkClick(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScrolledCheck);
    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("scroll", onScrolledCheck);
      window.removeEventListener("scroll", onScrollChange);
    };
  }, []);

  

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => { 
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              handleLinkClick('home');
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/keanu-milho-teixeira-1259962b9" target="_blank" rel="noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Codekmt" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/keanumtei" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>

            <a href="#contact">
              <button
                className="vvd"
                onClick={() => setExpanded(false)}
              >
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
