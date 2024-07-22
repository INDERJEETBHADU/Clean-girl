import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Magic_card } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Magic() {
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
    <div className="bg-lightpink  max-w-[1920px] mx-auto ">
      <div className="text-center pt-[50px]">
        <CommonHeading text="What can Magic Foam Clean?" />
      </div>
      <Slider className="md:mt-[60px] mt-[24px] pb-[64px]" {...settings}>
        {Magic_card.map((data, index) => (
          <div key={index} className="max-w-[267px] w-full mx-[12px]">
            <img
              className="max-w-[267px] rounded-[10px] border-[1px] border-pink"
              src={data.img}
              alt={`magic_${index}`}
            />
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-Jost font-semibold text-[20px] leading-[28.9px] text-pink">
                {data.name}
              </h4>
              <div>{data.svg}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Magic;
