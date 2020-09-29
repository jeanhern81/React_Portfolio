import React from 'react';
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Jeanette Hernandez',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' }
      ],

      home: {
        title: 'About Me',
        
      },

      portfolio: {
        title: 'Portfolio',
        subTitle: 'Projects',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },

      
      contact: {
        title: 'Contact',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Jeanette Hernandez</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className="ml-auto">
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}  />} />
          <Route path='/portfolio' render={() => <PortfolioPage title={this.state.portfolio.title}  subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text}/>} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        
        </Container>
      </Router>
    
  )
  }
  
}

export default App;