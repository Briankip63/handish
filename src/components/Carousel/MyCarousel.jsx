import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import law2 from "../../assets/img/law2.jpg";
import law3  from "../../assets/img/law3.jpg";
import law4 from "../../assets/img/law4.jpg";
import { CssBaseline } from "@material-ui/core";

import "./Carousel.style.css";
import ScrollDown from "../scroll-down/scroll-down.component";

const MyCarousel = () => {
    return (
        
        <div id="home">
            <CssBaseline />
           <Carousel controls={false} indicators interval={4500} pause={false}>
            <Carousel.Item>
            <img
            className="d-block w-100 custom-img"
            src={law2}
            alt="First slide"
            />
            
            </Carousel.Item>
            <Carousel.Item>
            <img
             className="d-block w-100 custom-img"
             src={law3}
            alt="Second slide"
            />

            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={law4}
              alt="Third slide"
            />
            </Carousel.Item>
            </Carousel> 
            <ScrollDown />
        </div>
    );
}

export default MyCarousel;
