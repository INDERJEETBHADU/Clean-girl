import React from "react";

function CommonBtn(props) {
  return (
    <>
      <button
        className={` ${props.border} ${props.padding}   bg-pink    rounded-[100px]  font-Lexend  font-bold sm:text-base text-xs   leading-[20px] text-white`}
      >
        {props.text}
      </button>
    </>
  );
}

export default CommonBtn;
