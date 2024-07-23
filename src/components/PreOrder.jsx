import React from "react";
import logo from "../assets/images/svg/clean-girl-logo.svg";
import CommonBtn from "../common/CommonBtn";
import { Cart } from "../common/Icon";

function PreOrder() {
  return (
    <>
      <div className="  bg-white max-sm:rounded-[0px_0px_18px_18px] ">
        <div className="container  max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
          <div className=" py-[10px] flex  item-center  justify-between  ">
            <img
              className="  md:max-w-[59px] max-w-[44.2px] w-full cursor-pointer"
              src={logo}
              alt="logo"
            />
            <div className=" flex items-center sm:gap-[30px] gap-[20px]">
              <CommonBtn
                padding="sm:py-[16px] py-[8px]  sm:px-[20px] px-[16px] "
                text="Pre-Order"
                hover="hover:bg-white hover:text-pink hover:border-[1px] duration-300  hover:border-[pink]"
              />
              <div className="  cursor-pointer">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreOrder;
