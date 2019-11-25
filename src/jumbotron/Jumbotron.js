import React from 'react';
import {Jumbotron,Container} from  "react-bootstrap";
import  './Jumbotron.css';
const jumbotron =(props)=>{
    return(
<div className="Content">
        <div className="container-full-bg" id="home">
        <Jumbotron>
            <Container>
                <h1>LEADERS IN CLOUD DEVELOPMENT AND INFRASTRUCTURE</h1>
            </Container>
        </Jumbotron>
        </div>

</div>
    );
};
export default jumbotron;