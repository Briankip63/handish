import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./contact-form.style.css";

const Contact = () => {
    return (
        <div id="contacts">
                <h1 className="pt-3 text-center font-details pb-3">CONTACT US</h1>
                <div className="contact">
                <Jumbotron className="contact-jumbotron">
                    <Row className="justify-content-center row">
        
                        <Col className="d-flex justify-content-center flew-wrap">
                            {/* buttons */}
                            <div className="m-2">
                                <a href="mailto:" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="">
                                    <i className="fas fa-envelope-square"></i> Email Us
                                </Button>
                                </a>
                            </div>
                            
                            <div className="m-2">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-info" title="Tweets are welcomed!">
                                     <i className="fab fa-twitter"></i> Twitter
                                    </Button>
                                    </a>
                            </div>
                            
                            <div className="m-2">
                                    <a href="https://www.facebook.com/brian.kipkemboi.9404/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Say hello on FB">
                                        <i className="fab fa-facebook-square"></i> FaceBook
                                    </Button>
                                    </a>
                            </div>
                            </Col>
                        
                    </Row>
                </Jumbotron>
                </div>
            
        </div>
    );
}

export default Contact;