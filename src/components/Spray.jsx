import React from "react";
import CommonHeading from "../common/CommonHeading";
import CommonBtn from "../common/CommonBtn";
import top_layer from "../assets/images/webp/small-screen-top-no.png";
import btm_layer from "../assets/images/webp/small_screen_no.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Spray() {
  return (
    <>
      <div className=" bg-lightpink relative   max-w-[1920px] mx-auto ">
        <div className="hidden lg:block ">
          <div className="bg-[url(../src/assets/images/webp/number_bg.webp)]    md:absolute top-[-7%] w-full    h-[394px]  bg-cover bg-center bg-no-repeat flex  items-center justify-center ">
            <div className=" flex justify-center flex-col items-center">
              <h2 className=" font-Lexend   font-extrabold text-6xxl leading-[65px] text-center text-white  ">
                4,281,923 +
              </h2>
              <p className="  font-Shrikhand font-normal italic  text-2xl leading-[34.99px] text-center text-white mt-[17px] ">
                Clean Girl Supporters
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-5"></div>
        {/* layer---part---smalll-screen */}
        <div className=" lg:hidden md:absolute top-[-8%]">
          <div className="">
            <img className=" w-full" src={top_layer} alt="top_layer" />
          </div>
          <div className=" bg-pink h-[104.17] mt-[-2px] mb-[-2px]">
            <h2 className=" font-Lexend relative z-20     font-extrabold text-6xxl leading-[65px] text-center text-white  ">
              4,281,923 +
            </h2>
          </div>
          <div className="">
            <img src={btm_layer} alt="btm_layer" />
          </div>
        </div>
        <div className=" container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className="row md:pt-[300px] lg:pt-[486px] pb-[150px]">
            <div className="lg:col-6 col-12">
              <CommonHeading text="The Most Satisfying Cleaning Spray " />
              <p className="  font-Lexend  font-normal text-sm leading-[24px] text-pink max-w-[408px] mt-[16px] ">
                Cleaner than ever before, simpler than traditional methods, and
                brighter than your cleanest dreams!
              </p>
              <div className=" mt-[60px]">
                <CommonBtn
                  text="Pre-Order"
                  border="border-[6px]  border-[#FEACD7]"
                  padding="sm:py-[16px] py-[8px]  sm:px-[80.5px] px-[16px] "
                />
              </div>
            </div>
            <div className="lg:col-6 col-12">
              {/* slider---part---here */}
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="flex justify-center items-center h-[300px] bg-blue-500 text-blue">
                    Slide 1
                  </div>
                </SwiperSlide>
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spray;
