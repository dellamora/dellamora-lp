/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import MoonIcon from "../../svgs/MoonIcon";
/* import { Container } from "./styles"; */

const Header: React.FC = (): JSX.Element => {
  return (
    <nav className="flex justify-between p-8 center w3-animate-opacity">
      <h1 className="text-2xl w3-animate-left">Dellamora. </h1>
      <ul className="flex space-x-3 text-xl items-center w3-animate-top">
        <li>Skills </li>
        <li>Blog </li>
        <li>Contact </li>
      </ul>
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

export default Header;
