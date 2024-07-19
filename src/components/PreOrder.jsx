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
              <CommonBtn text="Pre-Order" />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreOrder;