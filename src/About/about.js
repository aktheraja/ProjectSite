import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cloud3 from '../Images/opeartions.jpg';
import './about.css'
const about = ()=>{
    return(
<div className="container">
                <div className="about">
                    <h1>ABOUT</h1>
                    <p>
                        To be more precise, strings with even length
                        <span>(after removing all non-letter characters) must have
                        all even counts of characters. Strings of an odd length must have exactly one character with
                        an odd count. Of course, an "even" string can't have an odd number of exactly one character,
                        otherwise it wouldn't be an even-length string (an odd number+ many even numbers=</span>
                    </p>

                <Row>
                    <Col className="about2" >
                        <Image src={Cloud3} rounded />
                    </Col>
                </Row>
                </div>
</div>
    );
}
export default about;