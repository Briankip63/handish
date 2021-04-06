import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';

import Card from "react-bootstrap/Card";
import "./groups.style.css";

const Groups = () => {
    return (
        <div id="members">
            <h1 className="pt-3 text-center font-details pb-3">MEMBERSHIP</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Card>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-start">Eligible Members</Card.Title>
                </div>
                <div>
                <Card.Text className="card-text d-flex justify-content-center flex-column">
                   
                    <ul className="text-left">
                      <li>Individuals</li>
                      <li>Women group</li>
                      <li>Youth group</li>
                      <li>Bodaboda chamas</li>
                      <li>Pastoralist group or chama</li>
                      
                      <li>Informal settlement group</li>
                      <li>Individuals</li>
                      <li>Small business group</li>
                      <li>Church and mosque</li>

                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                  </Card.Text>
                </div>
                <br />
                    <div>
                        <Card.Title className="text-start">How To Join</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-center flex-column">

                    <ul className="text-left">
                      <li>Contact Legal Assurance Kenya</li>
                      <li>Request For membership</li>
                      <li>Make Registration Payment</li>
                      <li>Enjoy full benefits of being a member.</li>
                      </ul>

                    </Card.Text>

                    </div>
                    <br />
                    <div>
                    <Card.Title className="text-start">Membership Benefits</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-center flex-column">
                    <ul className="text-left">
                      <li>One will become a member by having a yearly subscription which is at affordable rate </li>
                      </ul>
                      </Card.Text>

                    </div>
              </Card.Body>
            </Card>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Groups;
