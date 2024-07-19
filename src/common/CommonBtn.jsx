import React from "react";

function CommonBtn(props) {
  return (
    <>
      <button
        className={` ${props.border} sm:py-[16px] py-[8px]  sm:px-[20px] px-[20px] bg-pink  rounded-[100px]  font-Lexend  font-bold sm:text-base text-xs   leading-[20px] text-white`}
      >
        {props.text}
      </button>
    </>
  );
}

export default CommonBtn;
