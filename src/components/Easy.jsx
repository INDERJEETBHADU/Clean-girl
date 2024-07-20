import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Fun } from "../common/Helper";
import easy_top_layer from "../assets/images/webp/easy-top-layer.webp";

function Easy() {
  return (
    <>
      <div className=" max-md:bg-lightpink">
        <div className=" hidden md:block">
          <img src={easy_top_layer} alt="easy-top-layer" />
        </div>
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className=" text-center md:pt-[14px] pt-[48px] ">
            <CommonHeading text="Easy & Fun!" />
          </div>
          <div className=" flex gap-4 flex-wrap md:mt-[50px] mt-[20px] lg:pb-[150px] pb-[48px]  justify-center">
            {Fun.map((data, index) => (
              <>
                <div className=" flex gap-[16px]">
                  <div className="">{data.svg}</div>
                  <div className="">
                    <h2 className=" font-Shrikhand font-normal italic  leading-[34.99px] text-black text-2xl ">
                      {data.heading}
                    </h2>
                    <p className=" font-Lexend  font-normal text-base max-w-[260px]  leading-[24px] text-blue md:mt-[10px] mt-[6px] ">
                      {data.paragraph}
                    </p>
                  </div>
                </div>
              </>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default Easy;
