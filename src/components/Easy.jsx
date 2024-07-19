import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Fun } from "../common/Helper";

function Easy() {
  return (
    <>
      <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
        <div className=" text-center">
          <CommonHeading text="Easy & Fun!" />
        </div>
        <div className=" flex gap-4 mt-[50px]  justify-center">
          {Fun.map((data, index) => (
            <>
              <div className=" flex gap-[16px]">
                <div className="">{data.svg}</div>
                <div className="">
                  <h2 className=" font-Shrikhand font-normal italic  leading-[34.99px] text-black text-2xl ">
                    {data.heading}
                  </h2>
                  <p className=" font-Lexend  font-normal text-base max-w-[260px]  leading-[24px] text-blue mt-[10px] ">
                    {data.paragraph}
                  </p>
                </div>
              </div>
            </>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Easy;
