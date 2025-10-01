import {useState, useEffect} from 'react';
import { Row, Container, Col} from "react-bootstrap";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UX/UI Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const period = 2000;
    

    return (
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagLine">Welcome to my portfolio</span>
                    <h1>('Hi I'm Keanu')<span className="wrap">Junior WebDeveloper</span></h1>
                    <p>Lorem Ipsum is simply dummy textof the orinting etc industry</p>
                    <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col> 
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt='header image'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}