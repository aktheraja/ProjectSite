import React from 'react';
import {CardDeck,Card,Container} from  "react-bootstrap";
import Cloud from '../Images/cloud.jpg';
import Cloud2 from '../Images/devops.jpg';
import Cloud3 from '../Images/opeartions.jpg';
import './Services.css'
const services =()=>{
    return (
        <Container className="Services" id="service">
            <h1>SERVICES</h1>
        <CardDeck >
            <Card>
                <Card.Img variant="top" src={Cloud} />
                <Card.Body>
                    <Card.Title>CLOUD DEVELOPMENT</Card.Title>
                    <Card.Text>
                        <ul >
                            <li>Development using REACT JS, REDUX, AWS Serverless Framework </li>
                        </ul>
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 8 mins ago</small>
                </Card.Footer>
            </Card>
            <Card >
                <Card.Img variant="top" src={Cloud2} />
                <Card.Body>
                    <Card.Title>DEVOPS</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Infrastructure as Code(IAC)</li>
                            <li>Automation- Jenkins, CI/CD, Spinner, Circle CI</li>
                            <li>Configuration Management with Terraform, Ansible, Cloud Formation, Chef</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 6 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Cloud3} />
                <Card.Body>
                    <Card.Title>OPERATIONS</Card.Title>
                    <Card.Text>
                        <ul>
                            <li >Solution Architect</li>
                                <li>Cloud Security</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        </Container>
    )
};
export default services;