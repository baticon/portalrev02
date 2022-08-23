//https://www.npmjs.com/package/react-slick
//npm install react-slick --save
//npm install slick-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./newscolumn.module.css";
import "./newscolumn.css";

const slide = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "Custom",
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>
        <div>
          <h3>Hello there</h3>
        </div>
        <div>
          <h3>I am here</h3>
        </div>
        <div>
          <h3>How are you doing?</h3>
        </div>
      </Slider>
    </div>
  );
};

export default slide;
