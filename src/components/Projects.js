import moulinDescapatPlaceholder from "../assets/img/moulindescapatBeta.png";
import spaceInvaders from "../assets/img/spaceInvaders.png";
import forgeFlow from "../assets/img/forgeFlow.jpg";
import { Container, TabContainer } from "react-bootstrap";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Projects = () => {
    const projects = [
    {
        title: "Moulin d'Escapat",
        description: "Design and Development",
        imgUrl: moulinDescapatPlaceholder,
        githubUrl: "https://github.com/Codekmt/MoulinDescapat",
    },
    {
        title: "ForgeFlow",
        description: "Brainstorming, Design and Development",
        imgUrl: forgeFlow,
        githubUrl: "https://github.com/Codekmt/Team-Skaz",
    }, 
    {
        title: "Space Invaders",
        description: "Design and Development",
        imgUrl: spaceInvaders,
        githubUrl: "https://main--spaceinvadz.netlify.app",
    }
];
    {
    }
    return (
        <section className="project" id="projects">
            <Container> 
                <Row> 
                    <Col>
                        <h2>Projects</h2>
                        <p>A selection of projects that highlight my skills in web development, design, and problem-solving.<br></br> Currently finishing the Moulin d'Escapat page.</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Now</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Next</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Later</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Coming soon</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Coming soon</p>
                            </Tab.Pane>
                        </Tab.Content>

                        </TabContainer>
                    </Col>
                </Row>

            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Image" />
            </section>
    )
}