import React from 'react';
import {Jumbotron,Container} from  "react-bootstrap";
import  './Jumbotron.css';
const jumbotron =(props)=>{
    return(
<div id="Content">
        <div className="container-full-bg">
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