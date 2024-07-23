import React from "react";
import CommonHeading from "../common/CommonHeading";
import slide_img from "../assets/images/webp/slider-img.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeartFelt() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" max-md:bg-lightpink  max-w-[1920px] mx-auto ">
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className=" text-center">
            <CommonHeading text="Heartfelt Cleaning" />
            <p className=" mb-0 font-Lexend  font-normal leading-[20px] text-pink text-base mt-[12px] sm:mt-[16px] ">
              Every hopeful transformation begins with the first wipe :)
            </p>
          </div>
        </div>
        <Slider
          className=" md:mt-[60px] mt-[40px]  md:pb-[100px] lg:pb-[208px]"
          {...settings}
        >
          <div className=" mx-[12px]">
            <div>
              <img
                className=" max-w-[364px] w-full "
                src={slide_img}
                alt="slide_img"
              />
            </div>
          </div>
          <div className=" mx-[12px]">
            <div>
              <img
                className=" max-w-[364px] w-full "
                src={slide_img}
                alt="slide_img"
              />
            </div>
          </div>
          <div className=" mx-[12px]">
            <div>
              <img
                className=" max-w-[364px] w-full "
                src={slide_img}
                alt="slide_img"
              />
            </div>
          </div>
          <div className=" mx-[12px]">
            <div>
              <img
                className=" max-w-[364px] w-full "
                src={slide_img}
                alt="slide_img"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HeartFelt;
