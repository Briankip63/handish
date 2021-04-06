import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import MyCarousel from './components/Carousel/MyCarousel';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Services from './pages/Services/services.component';


import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import { Footer } from './components/footer';

import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from './pages/groups/groups.components';
import Contact from './pages/contact-form/contact-form.component';








function App() {
  return (
    <Router>
      <div className="App" >
    
            <Navbar />
              <MyCarousel /> 
              <TitleMessage />
           
              <div>
              <Parallax blur={{ min: -1000, max: 1000 }}>
                <Fade duration={500}>
                <About />
              </Fade>
              </Parallax>
              </div> 
              <Services />
              <Groups />
              <Contact />
              <Footer />

           
      
        
    </div>
    </Router>
  
  );
}

export default App;
