import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReactSlider.css';
import logo from "../assets/images/1.jpg";
import logo1 from "../assets/images/2.jpg";
import logo2 from "../assets/images/3.jpg";
import logo3 from "../assets/images/4.jpg";
import logo4 from "../assets/images/5.jpg";
import logo5 from "../assets/images/6.jpg";
import logo6 from "../assets/images/7.jpeg";


function ReactSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    console.log(logo)
    return (
        <div className=" rcolor  border border-2">
        <Slider {...settings}>
          <div>
              <img src={logo} />
          </div>
          <div>
              <img src={logo1} />
          </div>
          <div>
              <img src={logo2} />
          </div>
          <div>
              <img src={logo3} />
          </div>
          <div>
              <img src={logo4} />
          </div>
          <div>
              <img src={logo5} />
          </div>
          <div>
              <img src={logo6} />
          </div>
        </Slider>
      </div>
    );
}

export default ReactSlider



