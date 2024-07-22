import React from "react";
import { TikTok, PinkStar, Stars } from "../common/Icon";
import CommonHeading from "../common/CommonHeading";
import CommonBtn from "../common/CommonBtn";
import foam_girl from "../assets/images/webp/clean-foam-girl_left.webp";


function CleanFoam() {
  return (
    
    <>
      <div className=" bg-lightpink relative  max-w-[1920px] mx-auto ">
        <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          {/* screen */}
          <div className=" hidden md:block">
            <div className=" pt-[48px]  flex justify-center ">
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
            <div className=" flex items-center gap-[24px] justify-center mt-[24px]">
              <div className=" flex gap-[16px]">
                <p className=" font-Lexend  font-medium  text-2xl leading-[30px] text-pink ">
                  $29.90
                </p>
                <p className=" font-Lexend text-grey  font-normal text-xl leading-[25px] ">
                  $49.90
                </p>
              </div>
              <CommonBtn
                padding="sm:py-[10px] py-[8px]  sm:px-[20px] px-[16px] "
                text="Early Bird Discount"
              />
            </div>
          </div>
          {/* row----col----part */}
          <div className="row md:pt-[60px] pt-4 pb-[48px] ">
            <div className="md:col-6 col-12 flex justify-center md:justify-start">
              <img
                className=" max-w-[235px] md:max-w-[420px] lg:max-w-[477.01px] w-full"
                src={foam_girl}
                alt="foam_girl"
              />
            </div>
            <div className="md:col-6 col-12  ">
              <div className=" md:hidden">
                <div className=" pt-5  flex  ">
                  <button className=" font-Lexend  flex items-center gap-2   py-[11px] px-[12px] rounded-[100px]  font-semibold  text-sm leading-[17.5px] text-white bg-black">
                    <TikTok />
                    Viral TikTok Cleaning Spray
                  </button>
                </div>
                <div className="  mt-[8px]">
                  <CommonHeading text="Clean Girl Magic Cleaning Foam" />
                </div>
                <div className=" flex gap-[6px] ">
                  <PinkStar />
                  <p className=" font-Lexend  font-normal text-base leading-[20px] text-lightbrown ">
                    Satisfying Pink
                  </p>
                </div>
                {/* early---bird--discount */}
                <div className=" flex items-center gap-[24px]  mt-[12px] mb-[36px]">
                  <div className=" flex gap-[16px]">
                    <p className=" font-Lexend  font-medium  text-2xl leading-[30px] text-pink ">
                      $29.90
                    </p>
                    <p className=" font-Lexend text-grey  font-normal text-xl leading-[25px] ">
                      $49.90
                    </p>
                  </div>
                  <CommonBtn
                    padding="sm:py-[10px] py-[8px]  sm:px-[20px] px-[16px] "
                    text="Early Bird Discount"
                  />
                </div>
              </div>
              <div className="  flex  flex-col items-center">
                <div className="max-w-[558px] w-full p-[24px_24px_30px_24px] rounded-[16px]  bg-mediumpink ">
                  <h6 className=" font-Lexend  font-semibold text-xl leading-[25px]  text-blue ">
                    Next batch ships Mar 14
                  </h6>
                  <div className=" flex items-center  gap-[5px] mt-[20px]">
                    <Stars />
                    <p className=" font-Lexend  font-medium  text-sm leading-[20px] text-blue ">
                      Pre-order your Clean Girl Magic Foam before it sells out
                      again!
                    </p>
                  </div>
                  <div className=" flex items-center  gap-[5px] mt-[16px]">
                    <Stars />
                    <p className=" font-Lexend  font-medium  text-sm leading-[20px] text-blue ">
                      $5 off all Pre-Orders
                    </p>
                  </div>
                  {/* inside---boxes */}
                  <div className="max-w-[510px] flex   justify-between items-center  w-full mt-4  rounded-[50px] bg-lightwhite py-[20px] px-[14px] sm:py-[20px] sm:px-[24px]  ">
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-darkgrey ">
                      February 29
                    </h6>
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-darkgrey ">
                      Sold Out
                    </h6>
                  </div>
                  <div className="max-w-[510px] border-[2px] border-[#053167] bg-[url(./assets/images/webp/ship_box_bg_layer.webp)] bg-cover bg-center bg-no-repeat flex   justify-between items-center  w-full mt-[16px]  rounded-[50px] bg-transparent py-[20px] px-[14px] sm:py-[20px] sm:px-[24px]  ">
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-white ">
                      March 14
                    </h6>
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-white ">
                      Only 13% Left!
                    </h6>
                  </div>
                  <div className="max-w-[510px] flex   justify-between items-center  w-full mt-[16px]  rounded-[50px] bg-lightwhite py-[20px] px-[14px] sm:py-[20px] sm:px-[24px] ">
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-darkgrey ">
                      March 31
                    </h6>
                    <h6 className=" font-Lexend  font-normal text-base leading-[20px] text-darkgrey ">
                      In Production
                    </h6>
                  </div>
                  {/* icon--boxes---end--here */}
                </div>
                <div className=" sm:mt-[34px] mt-[30px] ">
                  <CommonBtn
                    text="Pre-Order Magic Cleaning Foam"
                    border="border-[6px]  border-[#FEACD7]"
                    padding="sm:py-[16px] py-[12px]  md:px-[35px] xl:px-[123px] px-[60px] "
                  />
                </div>
                <div className=" flex items-center  gap-[5px] sm:mt-[28px] mt-[14px] ">
                  <Stars />
                  <p className=" font-Lexend  font-medium  text-sm leading-[20px] text-blue ">
                    Thank you so much for your support!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CleanFoam;
