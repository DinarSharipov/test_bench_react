import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SliderPage.module.scss";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };

  let array = new Array(100).fill();

  return (
    <Slider {...settings} className={classes.slider}>
      {array.map((item, index) => {
        return (
          <div>
            <img src={`./images/${index + 1}.jpg`} alt="photo" />
          </div>
        );
      })}

      {/* <div>
        <img src="./images/2.jpg" alt="photo" />
      </div>
      <div>
        <img src="./images/3.jpg" alt="photo" />
      </div>
      <div>
        <img src="./images/4.jpg" alt="photo" />
      </div>
      <div>
        <img src="./images/5.jpg" alt="photo" />
      </div>
      <div>
        <img src="./images/6.jpg" alt="photo" />
      </div> */}
    </Slider>
  );
}
