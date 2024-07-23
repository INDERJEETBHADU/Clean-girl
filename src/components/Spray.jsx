import React, { useRef, useEffect } from "react";
import CommonHeading from "../common/CommonHeading";
import CommonBtn from "../common/CommonBtn";
import top_layer from "../assets/images/webp/small-screen-top-no.webp";
import btm_layer from "../assets/images/webp/small_screen_btmmmmm.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Back, Next } from "../common/Icon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider_img from "../assets/images/webp/slider_img_statifiy.webp";

function Spray() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (prevRef.current && nextRef.current) {
        prevRef.current.addEventListener("click", () =>
          swiperInstance.slidePrev()
        );
        nextRef.current.addEventListener("click", () =>
          swiperInstance.slideNext()
        );
      }
    }
  }, []);

  return (
    <>
      <div className="bg-lightpink relative max-w-[1920px] mx-auto">
        <div className="hidden lg:block">
          <div className="bg-[url(../src/assets/images/webp/number_bg.webp)] md:absolute top-[-7%] w-full h-[394px] bg-[length:100%_100%] bg-center bg-no-repeat flex items-center justify-center">
            <div className="flex justify-center flex-col items-center">
              <h2 className="font-Lexend font-extrabold text-6xxl leading-[65px] text-center text-white">
                4,281,923 +
              </h2>
              <p className="font-Shrikhand font-normal italic text-2xl leading-[34.99px] text-center text-white mt-[17px]">
                Clean Girl Supporters
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5"></div>
        {/* layer---part---smalll-screen */}
        <div className="lg:hidden md:absolute top-[-8%]">
          <div className="">
            <img className="w-full" src={top_layer} alt="top_layer" />
          </div>
          <div className="bg-pink h-[104.17px] flex justify-center   items-center mt-[-2px] mb-[-2px]">
            <h2 className="font-Lexend relative z-20 font-extrabold sm:text-6xxl text-[45px] leading-[55px]  sm:leading-[65px] text-center text-white">
              4,281,923 +
            </h2>
          </div>
          <div className="">
            <img src={btm_layer} alt="btm_layer" />
          </div>
        </div>
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className="row md:pt-[300px] lg:pt-[450px] lg:pb-[150px] pb-[28px] sm:pb-[68px] md:pb-[98px]">
            <div className="md:col-6 col-12 flex items-center">
              <div className="">
                <CommonHeading text="The Most Satisfying Cleaning Spray" />
                <p className="font-Lexend font-normal text-sm leading-[24px] text-pink max-w-[408px] mt-[16px]">
                  Cleaner than ever before, simpler than traditional methods,
                  and brighter than your cleanest dreams!
                </p>
                <div className="md:mt-[60px] mt-[20px]">
                  <CommonBtn
                    text="Pre-Order"
                    border="border-[6px] border-[#FEACD7]"
                    padding="sm:py-[16px] py-[8px] sm:px-[80.5px] px-[40px]"
                    hover="hover:bg-white hover:text-pink  duration-300  hover:border-[pink]"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-6 pt-[40px] md:pt-[0px] col-12 relative">
              {/* slider---part---here */}
              <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                modules={[Navigation, Pagination]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="">
                    <img
                      className="rounded-[16px] max-w-[461px] w-full"
                      src={slider_img}
                      alt="slider_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img
                      className="rounded-[16px] max-w-[461px] w-full"
                      src={slider_img}
                      alt="slider_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img
                      className="rounded-[16px] max-w-[461px] w-full"
                      src={slider_img}
                      alt="slider_img"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-between max-w-[461px] items-center mt-[40px]">
                <div
                  ref={prevRef}
                  className="py-[14.29px] px-[31px] rounded-[100px] bg-[#E5DDE2] cursor-pointer"
                >
                  <Back />
                </div>
                <div className="custom-pagination flex justify-center gap-2"></div>
                <div
                  ref={nextRef}
                  className="py-[14.29px] px-[31px] rounded-[100px] bg-[#E5DDE2] cursor-pointer"
                >
                  <Next />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spray;
