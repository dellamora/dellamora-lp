/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import MoonIcon from "../../svgs/MoonIcon";
/* import { Container } from "./styles"; */

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className=" flex justify-between p-8 center w3-animate-opacity">
      <p className="text-2xl w3-animate-left">Dellamora. </p>
      <div className="flex space-x-3 text-xl items-center w3-animate-top">
        <a href="#specialized">Specialized </a>
        <a href="#portfolio"> Portfolio </a>
        <a href="#experices">Experices </a>
        <a href="#blog">Blog </a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex space-x-6 items-center w3-animate-right ">
        <MoonIcon width="17px" />
        <button
          className="
        bg-white 
        hover:bg-gray-100 
        text-gray-800 
        font-semibold 
        py-2 px-3
        border 
        border-[#F1F1F1]
        rounded"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Nav;
