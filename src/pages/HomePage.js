import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function HomePage(props) {
    return (
        <div>
        <Hero title={props.title} />
        <Content>
        <p>I've played around with code since the late 90s and recently decided I wanted to learn more. I've always loved a nicely crafted webpage; so, I enrolled in UCR Extension Coding Boot Camp where I am learning everything from HTML5 to JavaSript and everything in between.</p>
        <p>Coding gives me the ability to create and problem solve at the same time. I view my creativity as problem solving. If I want to learn something and have no idea how to do it, I figure out what skills I need and teach myself those basic skills to get me to where I want to be. It's this strong thirst for knowledge that helped me become an accomplished leathersmith. It is the same determination I bring to this new journey as web developer.</p>
        </Content>
        </div>

    )
}
export default HomePage;