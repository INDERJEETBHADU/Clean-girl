import React from "react";

function CommonBtn(props) {
  return (
    <>
      <button
        className={` ${props.border} ${props.padding} sm:px-[20px] px-[16px]   bg-pink  rounded-[100px]  font-Lexend  font-bold sm:text-base text-xs   leading-[20px] text-white`}
      >
        {props.text}
      </button>
    </>
  );
}

export default CommonBtn;
