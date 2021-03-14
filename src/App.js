import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import MyCarousel from './components/Carousel/MyCarousel';
import TitleMessage from './components/title-message/title-message.component';




function App() {
  return (
    <>
      <Navbar />
      <MyCarousel /> 
     <TitleMessage />
    </>
  );
}

export default App;
