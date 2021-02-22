import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Resume from '../components/Resume';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';










function HomePage(props) {
    return (
        <div className='HomePage'>        
            <Hero title={props.title} />



        <Content>
        <Col xs={6} md={4} ><Image src={require('../assets/images/Me.png' ) } style={{width: 350, float:'left' }} id='me' alt='Jeanette Hernandez'  /></Col> 
        

        <div className='homePageTxt'>
        <Col> <h3 >Hello!</h3>   
            <p >My name is Jeanette and I am full stack web developer based out of Southern California. I have a background in social media marketing and content photography. I am also highly experienced in costume jewelry design and a self-taught leather-smith with strong management skills with a Bachelor's of Arts focused in Anthropology from the University of North Texas. </p>
        <p>
        I’ve had a strong interest in coding and web development for years. I’ve created quite a few Shopify stores not only for myself but also for friends and family; I realized through the creation of these sites that I really enjoyed reading code and editing it.   
        </p>
        <p>I want to create a seamless user experience with the creation of my sites and applications. If you have a project in mind and would either want me to collaborate or have a project you want me to work on, drop my a line.   </p>
        
        </Col>
        </div>
    
    
        <Row className="d-flex justify-content-center py-5">
            <Resume />
            
        </Row>
        

        </Content>

        

        </div>



        
        
        
        
    );
}



export default HomePage;