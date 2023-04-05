import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


import RandomPassword from './assets/RandomPassword.png'
import TestYourKnowledge from './assets/TestYourKnowledge.png'
import DayPlanner from './assets/DayPlanner.png'
import READMEGenerator from './assets/README-Generator.png'
import Database from './assets/Database.png'
import FeedbackApp from './assets/feedback-app.png'

function Portfolio() {
    return (
        <Container id="Portfolio">
            <h1>Portfolio</h1>
            <Row className="mt-5">
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={RandomPassword} alt="coming soon" />
                    <h3 className="mt-3">Project 1</h3>
                    <p>Link: <a href="https://coreystuart.github.io/Radomized-Personal-Password/">Random Password Generator</a></p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/Radomized-Personal-Password">https://github.com/CoreyStuart/Radomized-Personal-Password</a></p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={TestYourKnowledge} alt="coming soon" />
                    <h3 className="mt-3">Project 2</h3>
                    <p>link: <a href="https://coreystuart.github.io/Test-Your-Knowledge/">Coding Quiz</a></p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/Test-Your-Knowledge">https://github.com/CoreyStuart/Test-Your-Knowledge</a></p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={DayPlanner} alt="coming soon" />
                    <h3 className="mt-3">Project 3</h3>
                    <p>link: <a href="file:///Users/coreystuart/Desktop/Homework-2/Plan-Your-Day/Develop/index.html">Day Planner</a></p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/Plan-Your-Day">https://github.com/CoreyStuart/Plan-Your-Day</a></p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={READMEGenerator} alt="coming soon" />
                    <h3 className="mt-3">Project 4</h3>
                    <p>Backend work meaning no link, GIF is in the README</p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/Node-README-Creation">https://github.com/CoreyStuart/Node-README-Creation</a></p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image id="img5" className="" fluid src={Database} alt="coming soon" />
                    <h3 className="mt-3">Project 5</h3>
                    <p>link: Backend, GIF in README</p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/Company-Database">https://github.com/CoreyStuart/Company-Database</a></p>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Image className="" fluid src={FeedbackApp} alt="coming soon" />
                    <h3 className="mt-3">Project 6</h3>
                    <p>link: </p>
                    <p>Github Repo: <a href="https://github.com/CoreyStuart/FeedbackApp">https://github.com/CoreyStuart/FeedbackApp</a></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;