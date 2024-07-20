import React from "react";

function CommonHeading(props) {
  return (
    <>
      <h3
        className={` ${props.width} font-Shrikhand font-normal italic lg:text-ms md:text-[30px] text-[20px] sm:text-[28px] leading-[32.82px] sm:leading-[40.82px] md:leading-[50.32px] lg:leading-[58.32px] text-pink  `}
      >
        {props.text}
      </h3>
    </>
  );
}

export default CommonHeading;
