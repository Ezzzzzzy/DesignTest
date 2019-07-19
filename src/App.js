import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import withOrsus from './assets/orsus_with_orsus-1.jpg';
import { Navbar, Nav, Container, Row, Col, Form, Button, } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar variant="dark" bg="transparent" expand="lg" fill="true">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <Container>
            <Row>
              <Col >
                <div className="Democratizing-the-bu"><b>Democratizing</b> the business of talent discovery
                and reinventing the entertainment industry
                <div>
                    <p className="Subscribe-for-Update">Subscribe for Updates!</p>
                    <Form>
                      <Form.Row>
                        <Col>
                          <Form.Control placeholder="Your Email" className="email-design " />
                        </Col>
                        <Col ><Button className="button-align"> Submit </Button></Col>
                      </Form.Row>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col lg="0">
                <p className="With-Orsus">With Orsus</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="Withorsus">
          <Container>
            <Row className="justify-content-md-center overlay">
              <Col>
                <div className="Rectangle-2">
                  <p className="Creators-Influence">Creators & Influencers</p>

                </div>
              </Col>
            </Row>
            <Row className="underlay">
              <Col>
                {/* <Container >
                  <Row> */}
                {/* <Col className="Rectangle"> */}

                <div className="withOrsusContainer">
                  <div className="Rectangle">
                    <ul className="withOrsusList">
                      <li>
                        Get discovered
                      </li>
                      <li>Curate the talent of tomorrow</li>
                      <li>
                        Collaborate with and sponsor other influencers and creators
                      </li>
                      <li>
                        Collaborate with and sponsor other influencers and creators
                      </li>
                    </ul>
                  </div>
                  <div className="imageOrssus">
                    <img className="withOrsusImage" src={withOrsus} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        

      </div >
    </div >
  );
}

export default App;
