import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript  } from 'react-icons/si';
import { FaNodeJs  } from 'react-icons/fa';
import { SiJquery  } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { CgNpm } from 'react-icons/cg';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';



class Skills extends React.Component {
    render() {
        return  (

                <Container fluid={false}>
                    
            
                    <Row className='justify-content-center py-5' id='icons'>
                        <Col ><h1 className='text-center'>Skills:</h1></Col>                        
                    </Row>
                    <Row  className='justify-content-center'> 
                        <Col md={8}><h1><FaHtml5 /> <FaCss3 /> <SiJavascript /> <FaNodeJs /> <SiJquery /> <GrMysql /> <SiMongodb/> <DiHeroku /> <FaBootstrap /> <FaReact/> <DiMaterializecss /> <FaGitAlt /> <SiAdobephotoshop /> <CgNpm /> </h1></Col>
                    </Row>

                    
                </Container>


                    
        
        );

        
    
    }
}

export default Skills;