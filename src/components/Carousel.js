import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card'

import jGarciaIns from '../assets/images/projects/jGarciaIns.JPG'
import burger from '../assets/images/projects/burger.jpg';
import scheduler from '../assets/images/projects/scheduler.jpg';
import weatherDash from '../assets/images/projects/weatherDash.jpg';
import codeQuiz from '../assets/images/projects/codeQuiz.jpg';
import alexandria from '../assets/images/projects/alexandria.jpg';



class Carousel extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            items:[

                {
                    id: 0,
                    title: 'Julio Garcia Insurance Agency',
                    subTitle: 'Over 20 years of experience',
                    text: 'Technologies Used: HTML, CSS, Bootstrap, JavaScript,',
                    imgSrc: jGarciaIns,
                    link: 'https://jgarciains.com/',
                    link2: 'https://github.com/jeanhern81/JulioGarciaInsurance.git',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Eat-Da-Burger',
                    subTitle: 'Enjoy a delicious burger',
                    text: 'Technologies Used: HTML, CSS, Bootstrap, JavaScript, jQuery, Node Js, Express JS, MySql, Heroku',
                    imgSrc: burger,
                    link: 'https://dry-depths-29556.herokuapp.com/',
                    link2: 'https://github.com/jeanhern81/Eat-Da-Burger',
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Work Day Scheduler',
                    subTitle: 'Hourly task schedule',
                    imgSrc: scheduler,
                    link: 'https://jeanhern81.github.io/work_day_scheduler/',
                    link2: 'https://github.com/jeanhern81/work_day_scheduler',
                    selected: false
                },
                {
                    id: 3, 
                    title: 'Weather Dashboard',
                    subTitle: 'Up to date weather report',
                    imgSrc: weatherDash,
                    link: 'https://jeanhern81.github.io/API-Weather-Project/',
                    link2: 'https://github.com/jeanhern81/API-Weather-Project',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Code Quiz',
                    subTitle: 'Test your coding skills',
                    imgSrc: codeQuiz,
                    link: 'https://jeanhern81.github.io/code-quiz/',
                    link2: 'https://github.com/jeanhern81/code-quiz',
                    selected: false
                },
                
                {
                    id: 5,
                    title: 'Alexandria',
                    subTitle: 'Property Management App',
                    imgSrc: alexandria,
                    link: 'https://mysterious-river-09583.herokuapp.com/',
                    link2: 'https://github.com/jeanhern81/Alexandria',
                    selected: false
                },
            ]
        }
    }

    
    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState ({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}

                </Row>

            </Container>

            
        )

    }

}


export default Carousel;