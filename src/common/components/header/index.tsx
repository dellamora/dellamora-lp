/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import MoonIcon from "../../svgs/MoonIcon";
/* import { Container } from "./styles"; */

const Header: React.FC = (): JSX.Element => {
  return (
    <nav className="flex justify-between p-8 center">
      <h1 className="text-2xl">Dellamora. </h1>
      <ul className="flex space-x-3 text-xl items-center ">
        <li>Skills </li>
        <li>Blog </li>
        <li>Contact </li>
      </ul>
      <div className="flex space-x-6 items-center ">
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
