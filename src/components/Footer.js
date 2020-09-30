import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Jeanette
                    </Col>
                    <AiFillGithub /> <AiFillLinkedin />
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                    2020 Copyright
                    </Col>
                </Row>
            </Container>


            
        </footer>
    )
}

export default Footer;