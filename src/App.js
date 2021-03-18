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




function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
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
    </div>
  );
}

export default App;
