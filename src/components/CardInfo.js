import React from 'react'
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
     
            <animated.div className='g-card-info' style={style} >
                <p className='g-card-title'>{props.title}</p>
                <p className='g-card-subTitle'>{props.subTitle}</p>
                <p className='g-card-text'>{props.text}</p>
            
                <p><Button className="d-inline-block" variant='light'> <a href={props.link} target='_blank' rel='noopener noreferrer'>Deployed Site</a>
            </Button> </p>
                        
                <p><Button className="d-inline-block" variant='light' ><a href={props.link2} target='_blank' rel='noopener noreferrer'>Visit Repo</a>
            </Button></p>
                
                </animated.div>
    
    
    );          

}

export default CardInfo;