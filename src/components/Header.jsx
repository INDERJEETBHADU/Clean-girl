import React from "react";
import PreOrder from "./PreOrder";
import CommonBtn from "../common/CommonBtn";
import { Stars } from "../common/Icon";
import girl_hero from "../assets/images/webp/clean-girl-hero-img.webp";
import hero_bottom_layer from "../assets/images/webp/hero-bottom-layer.webp";
import small_screen_girl from "../assets/images/webp/small-screen_girl.webp";
import small_screen_layer from "../assets/images/webp/small-screen-bottom.webp";

function Header() {
  return (
    <>
      <div className=" bg-lightpink  relative  max-w-[1920px] mx-auto ">
        <PreOrder />
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className=" sm:hidden">
            <div className="row pt-5 pb-[36px]">
              <div className="col-6 flex items-center">
                <div className="">
                  <h1 className=" font-Shrikhand font-normal italic text-[28px] leading-[40.82px] text-pink ">
                    Hey! I’m Clean Girl
                  </h1>
                  <p className=" text-lightbrown font-Lexend  text-base  mt-[12px] max-w-[330px] ">
                    Thank you so much for supporting me to make the world a
                    beautiful place!
                  </p>
                </div>
              </div>
              <div className="col-6 flex justify-center">
                <img
                  className=" max-w-[127px] w-full"
                  src={small_screen_girl}
                  alt="small_screen_girl"
                />
              </div>
            </div>
            <div className=" flex  flex-col  items-center">
              <button className=" px-[64px] max-w-[390px] w-full border-[6px] border-[#FEACD7] py-[16px] bg-pink  rounded-[100px]  font-Lexend  font-bold  text-xs   leading-[20px] text-white">
                Pre-Order Magic Cleaning Foam
              </button>
              <div className=" flex items-center justify-center gap-[5px] pb-[48px] mt-[8px]">
                <Stars />
                <p className=" font-Lexend  font-medium  text-[12px] leading-[15px]  text-blue ">
                  Thank you so much for your support!
                </p>
              </div>
            </div>
          </div>

          {/* big------screen */}
          <div className="row max-sm:hidden pt-[7px]">
            <div className="col-6 flex  items-center">
              <div className="">
                <h1 className=" font-Shrikhand font-normal italic text-[45px] md:text-[65px] leading-[70px]   lg:text-xxxl md:leading-[90px] lg:leading-[104px] text-pink ">
                  Hey! I’m Clean Girl
                </h1>
                <p className=" text-lightbrown font-Lexend  text-base  mt-[10px] max-w-[330px] ">
                  Thank you so much for supporting me to make the world a
                  beautiful place!
                </p>
                <div className=" hidden md:block mt-[34.5px]">
                  <CommonBtn
                    text="Pre-Order Magic Cleaning Foam"
                    border="border-[6px]  border-[#FEACD7]"
                    padding="sm:py-[16px] py-[8px]  sm:px-[20px] px-[16px] "
                  />
                </div>
                <div className=" hidden md:block">
                  <div className=" flex items-center  gap-[5px] mt-[28px]">
                    <Stars />
                    <p className=" font-Lexend  font-medium  text-sm leading-[20px] text-blue ">
                      Thank you so much for your support!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* -----girl----hero----img */}
            <div className="col-6">
              <img src={girl_hero} alt="clean-girl" />
            </div>
          </div>
          <div className="  flex flex-col items-center   pb-5 md:pb-[0px]   ">
            <div className=" hidden sm:block md:hidden mt-[34.5px]">
              <CommonBtn
                text="Pre-Order Magic Cleaning Foam"
                border="border-[6px]  border-[#FEACD7]"
                padding="sm:py-[16px] py-[8px]  sm:px-[20px] px-[16px] "
              />
            </div>
            <div className=" hidden sm:block md:hidden ">
              <div className=" flex items-center  gap-[5px] mt-[28px]">
                <Stars />
                <p className=" font-Lexend  font-medium  text-sm leading-[20px] text-blue ">
                  Thank you so much for your support!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute hidden md:block bottom-[-1%] ">
          <img src={hero_bottom_layer} alt="vector" />
        </div>
        <div className=" md:hidden">
          <img src={small_screen_layer} alt="vector" />
        </div>
      </div>
    </>
  );
}

export default Header;
