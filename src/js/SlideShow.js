/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/App.css";

function SlideShow(props) {
  const settings = {
    fade: true,
    speed: 400,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      <Slider className="slideshow" {...settings}>
        {props.product.images
          .filter(image => {
            const regex = /(\.gif)/g;

            return image.src.search(regex) === -1;
          })
          .map(image => {
            return (
              <div key={image.id}>
                <img src={image.src} alt={image.title} className="slideImg" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default SlideShow;
