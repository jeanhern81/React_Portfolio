import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { CgCopyright } from 'react-icons/cg';

import '../index.css';

function Footer() {
    return (
        <footer className='mt-5' id='d-flex justify-content-center'>
            <Container fluid={true}>
                <Row className='border-top  p-3'>

                    <Col className='justify-content-center' md={3}>

                    <CgCopyright className='copyright'/><h10 > 2020 </h10> &nbsp;

                    <a target='_blank' without rel="noopener noreferrer" href="https://github.com/jeanhern81" className="github" ><AiFillGithub /></a> &nbsp;

                    <a target='_blank' without rel="noopener noreferrer" href='https://www.linkedin.com/in/jeanette-hernandez-714a1942/' className='linkin '><AiFillLinkedin /></a> 
                    </Col>
                        

                </Row>        

                

            </Container>


            
        </footer>
    )
}

export default Footer;