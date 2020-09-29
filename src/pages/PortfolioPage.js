import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function PortfolioPage(props) {
    return (   

    <p>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />

        </p>

        
    )
}
export default PortfolioPage;