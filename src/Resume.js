import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import node from './assets/node.png'
import react from './assets/react.png'
import mysql from './assets/mysql.png'

function Resume() {
    return (
        <Container id="Resume">
            <h1>Resume</h1>
            <p>Download Resume: </p>

            <Container className="mt-5">
                <h3 className="text-center">Skills</h3>


                <Row className="mt-5">
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={node} alt="node js" />
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={react} alt="react js" />
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={mysql} alt="mysql" />
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={html} alt="html" />
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={css} alt="css" />
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Image fluid src={javascript} alt="javascript" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;