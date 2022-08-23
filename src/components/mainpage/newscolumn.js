//https://www.npmjs.com/package/react-slick
//npm install react-slick --save
//npm install slick-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./newscolumn.module.css";
import "./newscolumn.css";
import photo from "../media/photo.svg";

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
        <div className={style.newsContainer}>
          <div className={style.photoContainer}>
            <img src={photo} className={style.photo} alt=""></img>
          </div>
          <div className={style.newsSubContainer}>
            <span className={style.newsSource}>
              Блок председателя правления
            </span>
            <span className={style.newsHeader}>Заголовок новостей</span>
            <span className={style.newsLink}>
              какая-то ссылка, переходящая на новость
            </span>
          </div>
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
