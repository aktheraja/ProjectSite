import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import About from '../Images/about.jpg';
import './about.css';
import 'media-queries';
const about = ()=>{
    return(
        <div className="container">
            <Row>
                <Col className="xs">
                    <h1>ABOUT</h1>
                    <div className="text-body">
                        <span>Canadian owned IT Company. provides a range of Information Technology
                            services designed for business productivity. From expert installation, outsourcing
                            and implementation to Hosted Solutions.</span>
                        <span>Founded in June 2019 and headquartered in Budapest Hungary, in order to help companies
                            with their IT solutions. Our initial focus was providing complete information technology
                            solutions for companies. In response to customer needs - and in order to fully cover the
                            range of IT services - our offer quickly expanded with Hosting solutions</span>
                    </div>

                </Col>
                <Col>
                    <span className="large-image"> <img src={About} alt = "about page"/></span>
                </Col>
            </Row>
            <Row className="small_devices">
                <Col className="xs">

                    <div className="text-body">
                        <p><span>   <h1>ABOUT</h1></span>Canadian owned IT Company. provides a range of Information Technology
                            services designed for business productivity. From expert installation, outsourcing
                            and implementation to Hosted Solutions.</p>
                        <p>Founded in June 2019 and headquartered in Budapest Hungary, in order to help companies
                            with their IT solutions. Our initial focus was providing complete information technology
                            solutions for companies. In response to customer needs - and in order to fully cover the
                            range of IT services - our offer quickly expanded with Hosting solutions</p>
                    </div>
                    <img src={About} alt = "about page"/>
                </Col>
            </Row>
        </div>
    );
};
export default about;