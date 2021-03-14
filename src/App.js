import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import MyCarousel from './components/Carousel/MyCarousel';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';




function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <MyCarousel /> 
      <TitleMessage />
      <About />
    </div>
  );
}

export default App;
