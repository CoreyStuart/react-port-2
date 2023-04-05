import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import corey from './Corey.jpg'

function AboutMe() {
    return (
        <Container id="AboutMe">
            <h1>About Me</h1>
            <Row className="mt-5">
                <Col xs="12" md="5"><img className="my-4" src={corey} alt="Corey Stuart" />;</Col>
                <Col xs="12" md="7"><p className="mt-4">My name Is Corey Stuart and I am an inspiring junior developer. I have a communication degree from ASU and will soon claim my certification from UofA's coding boot camp for full stack development. I have learned numerous languages listed below, while feeling most comfortable with vanilla Javascript and React.</p></Col>
            </Row>
        </Container>
    );
}

export default AboutMe;