import React from 'react';

import { RiSendPlaneFill } from 'react-icons/ri';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';


import * as emailjs from "emailjs-com";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    

    handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            name: this.state.name + " (" + this.state.email + ")",
            email: this.state.email,
            message: this.state.message
            };

        console.log(event.target);

        this.setState({
            disabled: false,
            emailSent: true
        });
        
            emailjs
                .send('service_tr4rxbj', 'template_8euxnen', templateParams, 'user_Vi88FTO4YYnOZOmcdGAdy')
                .then(
                function(response) {
                    console.log("EMAIL SUCCESSFULLY SENT", response.status, response.text);
                },
                function(error) {
                    console.log("EMAIL DID NOT SEND!", error);
                }
                );
    
            this.setState({
                name: "",
                email: "",
                message: ""
                });
            }



    render() {
        return(
            <div className='contactPage'>
                <Hero title={this.props.title} text={this.props.text}/>


    

    
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="dark" type="submit" disabled={this.state.disabled}>
                            Send <RiSendPlaneFill />
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>


                <div>
            
                </div>


            </div>
            

        
        );
    
}

}

export default ContactPage;