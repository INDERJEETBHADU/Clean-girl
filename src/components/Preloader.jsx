import React from "react";
import logo from "../assets/images/svg/footer-logo.svg";

const Preloader = () => {
  return (
    <div className=" flex justify-center items-center  bg-lightpink min-h-screen ">
      <img className="w-[186px] md:w-auto animate-jump" src={logo} alt="logo" />
    </div>
  );
};

export default Preloader;
