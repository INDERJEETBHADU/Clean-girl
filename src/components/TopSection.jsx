import React from "react";
import left_perct from "../assets/images/svg/left-percent-dot.svg";

function TopSection() {
  return (
    <>
      <div className=" bg-pink max-w-[1920px] mx-auto  ">
        <div className=" container  max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px] ">
          <div className=" flex items-center  justify-between py-[5px]">
            <h5 className=" font-Lexend   font-medium text-white text-[11.2px] leading-[14px]  sm:leading-[17.5px] sm:text-sm">
              Join the Clean Revolution! Pre-Order Now
            </h5>
            <div className=" bg-white rounded-[50px] px-[10px] flex items-center sm:gap-[10px] gap-[5px] py-[2px] sm:py-[7.6px] sm:max-w-[141.8px] max-w-[116.2px] w-full  ">
              <img
                width={14.8}
                height={14.6}
                src={left_perct}
                alt="left_perct"
              />
              <p className=" font-Lexend text-[11.2px] sm:leading-[17.5px] leading-[14px] sm:text-sm font-semibold  text-blue">
                Only 13% Left
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSection;
