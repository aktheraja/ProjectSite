import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Contacts.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import add_form from '../actions/forms';
class Contact extends Component{
state = {
    name:"",
    email:"",
    message:" "
}
static propTypes = {
    add_form:PropTypes.func.isRequired
}



onChange = (e)=>{this.setState({[e.target.name]:e.target.value})};
onSubmit =(e)=>{
        e.preventDefault();
    const {name,email,message}=this.state;
    const form = {name,email,message};
this.props.add_form(form);
}

    render() {

      const {name,email,message}=this.state;

        return(
<div className="container-fluid2">
    <div className="container">
            <Row>
                <div className="inquiry">
                <Col >
                    <Form onSubmit={this.onSubmit}>
                        <h1>Inquiry</h1><p></p>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="name" placeholder="Enter Name" value={name} onChange={this.onChange}/>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" type="textarea" as="textarea" rows="3" placeholder="Enter Text" value={message} onChange={this.onChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                </div>
                <div>
                <Col>
                    <div className="Address">
                <h1>Head Office</h1>
                    <p>Ottawa, Canada</p>
                        <h3>Get a Quote</h3><p>Tel: 306 516 0000</p>
                    </div>
                </Col>
                </div>
            </Row>
</div>
</div>
        )
    }
}
export default connect(null,{add_form})(Contact);