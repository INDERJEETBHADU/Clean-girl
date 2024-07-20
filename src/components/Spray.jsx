import React from "react";
import CommonHeading from "../common/CommonHeading";
import CommonBtn from "../common/CommonBtn";

function Spray() {
  return (
    <>
      <div className=" bg-lightpink">
        <div className=" container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className="row py-5">
            <div className="col-6">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Spray;
