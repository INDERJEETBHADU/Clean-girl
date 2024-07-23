import React from "react";
import CommonBtn from "../common/CommonBtn";
import footer_logo from "../assets/images/svg/footer-logo.svg";

function Footer() {
  return (
    <>
      <div className=" bg-lightpink  max-w-[1920px] mx-auto ">
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className="  flex justify-center">
            <CommonBtn
              text="Pre-Order Yours"
              border="border-[6px]  border-[#FEACD7]"
              padding="sm:py-[16px] py-[8px]  sm:px-[55.5px] px-[50px] "
              hover="hover:bg-white hover:text-pink  duration-300  hover:border-[pink]"
            />
          </div>
          <div className=" flex justify-center xl:pb-[113px] pb-[37px] lg:pb-[70px] sm:pb-[50px]  mt-[40px] lg:mt-[70px] xl:mt-[130px] ">
            <img
              data-aos="flip-left"
              className="  max-w-[100px] sm:max-w-[200px]  lg:w-[226.15px]:  cursor-pointer"
              src={footer_logo}
              alt="footer_logo"
            />
          </div>
        </div>
        <div className=" max-w-[1440px]  w-full   h-[1px]  bg-pink mx-auto "></div>
        <p className="  font-Lexend   font-normal text-sm leading-[24px] text-center text-pink mt-[24px] pb-[24px] ">
          copy right ©2024 CleanGirl
        </p>
      </div>
    </>
  );
}

export default Footer;
