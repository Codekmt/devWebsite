import {useState, useEffect, useCallback} from 'react';
import { Row, Container, Col} from "react-bootstrap";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Junior Web Developer", "Web Designer", "UX/UI Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

  setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setDelta(500);
    }
}, [text, isDeleting, loopNum]);

    useEffect(() => {
        const ticker = setInterval(() => tick(), delta);
        return () => clearInterval(ticker);
        }, [tick, delta]);

    

    return (
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagLine">Welcome to my portfolio</span>
                    <h1>Hi I'm Keanu <br /><span className="wrap">{text}</span></h1>
                    <p>Hello! After completing a full stack development course, I’m diving into my first project and loving the experience. I’m now eager to find my first job or internship to further sharpen my skills and contribute to meaningful projects.</p>
                    <a href="#contact">
                        <button>
                        Let's connect <ArrowRightCircle size={25} />
                        </button>
                    </a>
                    </Col> 
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt='header image'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}