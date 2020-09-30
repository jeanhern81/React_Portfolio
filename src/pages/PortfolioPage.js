import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Skills from '../components/Skills';


function PortfolioPage(props) {
    return (   

    <p>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

            <Skills />


            <Carousel />

        </p>

        
    )
}
export default PortfolioPage;