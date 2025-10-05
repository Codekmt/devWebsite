import moulinDescapatPlaceholder from "../assets/img/moulinDescapatPlaceholder.jpeg";
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
            description: "Design and development",
            imgUrl: moulinDescapatPlaceholder,
        },

        {
            title: "ForgeFlow",
            description: "Brainstorming, design, development",
            imgUrl: forgeFlow,
        }, 

        {
            title: "Space Invaders",
            description: "Design, Development",
            imgUrl: spaceInvaders,
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item> 
                                <Nav.Link eventKey="first">Moulin d'Escapat</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">ForgeFlow</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Space Invaders</Nav.Link>
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
                                <p>This was a class project for ArcelorMittal, they wanted to see what development options were in the "Teams" application. So we developed an algorithm that could select questions within a constructed forum and place it within FAQs</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>This was a personal project where I recreated the classic Space Invaders game using modern web technologies. I played around with JavaScript to create random spawning and played around with velocity to make the game more dynamic.</p>
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