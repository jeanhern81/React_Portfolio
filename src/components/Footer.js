import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { CgCopyright } from 'react-icons/cg';

function Footer() {
    return (
        <footer className='mt-5' id='d-flex justify-content-center'>
            <Container fluid={true}>
                <Row className='border-top  p-3'>

                    <Col className='justify-content-center' md={3}>

                    <CgCopyright /><h10> 2020 </h10> 

                    <a target='_blank' without rel="noopener noreferrer" href="https://github.com/jeanhern81"><AiFillGithub /></a> 

                    <a target='_blank' without rel="noopener noreferrer" href='https://www.linkedin.com/in/jeanette-hernandez-714a1942/'><AiFillLinkedin /></a> 
                    </Col>
                        

                </Row>        

                

            </Container>


            
        </footer>
    )
}

export default Footer;