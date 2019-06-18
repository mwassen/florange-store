/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../css/App.css";

function SlideShow(props) {
  return (
    <div>
      <video className="bg-vid" autoPlay playsInline loop={true} muted>
        <source src={props.videosrc} type="video/webm" />
      </video>
      whaddya want?
    </div>
  );
}

export default SlideShow;
