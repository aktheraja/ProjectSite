import React from 'react';
import {Jumbotron,Container} from  "react-bootstrap";
import  './Jumbotron.css';
const jumbotron =(props)=>{
    return(
        <div className="container-full-bg">
        <Jumbotron fluid>
            <Container>
                <h1>LEADERS IN CLOUD DEVELOPMENT AND INFRASTRUCTURE</h1>
            </Container>
        </Jumbotron>
        </div>
    );
};
export default jumbotron;