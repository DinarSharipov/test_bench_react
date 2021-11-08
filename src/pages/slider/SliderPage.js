// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SliderPage.module.scss";

// export default function SimpleSlider() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   let array = new Array(100).fill();

//   return (
//     <div className={classes.sliderWrapper}>
//       <Slider {...settings} className={classes.slider}>
//         {array.map((item, index) => {
//           return <img src={`./images/${index + 1}.jpg`} alt="photo" />;
//         })}
//       </Slider>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      array: new Array(70).fill(),
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    return (
      <div className={classes.sliderWrapper}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.state.array.map((item, index) => {
            return <img src={`./images/${index + 1}.jpg`} alt="photo" />;
          })}
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.state.array.map((item, index) => {
            return <img src={`./images/${index + 1}.jpg`} alt="photo" />;
          })}
        </Slider>
      </div>
    );
  }
}
