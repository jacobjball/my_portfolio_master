import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomNavbar from './components/Shared/Navbar';
import Home from './components/Shared/Home';
import About from './components/Shared/About';
import Experience from './components/Shared/Experience';
import Work from './components/Shared/Work';
import Contact from './components/Shared/Contact'
import './index.css'
import './App.scss'


const App = () => (
  <>
    <Router>
    <CustomNavbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>  
    </Router>
  </>
)



export default App;
