import React from "react";
import tiktok from "../assets/images/webp/tik-tok-1.webp";
import tiktok_button from "../assets/images/svg/Famous _from_Tiktok.svg";
import CommonHeading from "../common/CommonHeading";
import btm_layer_suppoter from "../assets/images/webp/supporter_bottom_layer.webp";
import btm_layer_suppoter_small from "../assets/images/webp/small-screen_supporter_btm.webp";

function Supporter() {
  return (
    <>
      <div className=" mt-[-2px] relative">
        <div className="container  max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className="row max-md:flex-col-reverse  xl:pb-[180px] lg:pb-[120px] md:pb-[80px]   md:pt-[92px] lg:pt-[120px] xl:pt-[192px] ">
            <div className="xl:col-6  md:col-7   flex  justify-center col-12">
              <div className=" flex  flex-col  sm:flex-row   gap-[15px] md:gap-[19.2px] lg:gap-[40px] sm:gap-[25px] items-center max-md:mt-4 max-md:mb-4">
                <img
                  className=" md:max-w-[172px] lg:max-w-[243px]  max-w-[180px]  w-full  shadow-3xl rounded-[13.54px] "
                  src={tiktok}
                  alt="tiktok"
                />
                <div className="  xl:translate-y-[-77.01px] lg:rotate-[3deg] ">
                  <img
                    className="  md:max-w-[172px] lg:max-w-[243px] max-w-[180px] h-full w-full  shadow-3xl rounded-[13.54px] "
                    src={tiktok}
                    alt="tiktok"
                  />
                </div>
              </div>
            </div>
            <div className="xl:col-6 md:col-5  col-12 flex items-center md:justify-end justify-center">
              <div className=" pt-4 max-md:text-center">
                <img
                  className=" max-md:mx-auto"
                  src={tiktok_button}
                  alt="tiktok_button"
                />
                <CommonHeading
                  width="max-w-[508px] md:mt-4 mt-2"
                  text="Over 4 Million Supporters Worldwide & Counting!"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-md:hidden absolute bottom-[-8%]">
          <img src={btm_layer_suppoter} alt="supporter" />
        </div>
        <div className=" md:hidden">
          <img src={btm_layer_suppoter_small} alt="supporter" />
        </div>
      </div>
    </>
  );
}

export default Supporter;
