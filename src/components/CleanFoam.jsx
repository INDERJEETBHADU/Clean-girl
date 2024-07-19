import React from "react";
import { TikTok, PinkStar } from "../common/Icon";
import CommonHeading from "../common/CommonHeading";

function CleanFoam() {
  return (
    <>
      <div className=" bg-lightpink relative  max-w-[1920px] mx-auto ">
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className=" pt-5  flex justify-center ">
            <button className=" font-Lexend  flex items-center gap-2   py-[11px] px-[12px] rounded-[100px]  font-semibold  text-sm leading-[17.5px] text-white bg-black">
              <TikTok />
              Viral TikTok Cleaning Spray
            </button>
          </div>
          <div className=" text-center mt-[19px]">
            <CommonHeading text="Clean Girl Magic Cleaning Foam" />
          </div>
          <div className=" flex gap-[6px] justify-center mt-[16px]">
            <PinkStar />
            <p className=" font-Lexend  font-normal text-base leading-[20px] text-lightbrown ">
              Satisfying Pink
            </p>
          </div>
          {/* early---bird--discount */}
          <p className=" font-Lexend  font-medium  text-2xl leading-[30px] text-pink ">
            $29.90
          </p>
          <p className=" font-Lexend  font-normal text-xl leading-[25px] ">
            $49.90
          </p>
        </div>
      </div>
    </>
  );
}

export default CleanFoam;
