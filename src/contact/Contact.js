import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Contacts.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import add_form from '../actions/forms';
import MyVerticallyCenteredModal from '../modal/modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
class Contact extends Component{
state = {
    name:"",
    email:"",
    message:" ",
    modalState:false
}
    static propTypes = {
    add_form:PropTypes.func.isRequired,
    forms:PropTypes.array.isRequired
}

onChange = (e)=>{this.setState({[e.target.name]:e.target.value})};
onSubmit =(e)=>{
        e.preventDefault();
    const {name,email,message}=this.state;
    const form = {name,email,message};
this.props.add_form(form);
this.setState({modalState:true})
}

closeModal =()=>{
    this.setState({modalState:false})
}
    render() {
   const modal = this.state.modalState? (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Thnak you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thank you for your Inquiry.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        ):null;
      const {name,email,message}=this.state;
        return(
<div className="container-fluid2" id="contact">
    <div className="container">
        <div className="container-fluid my-5">{modal}</div>
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
                </div>{    function App() {
                const [modalShow, setModalShow] = React.useState(false);
                return( <ButtonToolbar>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Launch vertically centered modal
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </ButtonToolbar>)}}
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

const mapStateToProps=state=>{return({
    forms:state.form.forms
})}
export default connect(mapStateToProps,{add_form})(Contact);