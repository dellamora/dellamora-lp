/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const career: React.FC = (): JSX.Element => {
  return (
    <div
      className="
      flex 
      justify-between
      my-10 p-[65px] 
    bg-[#FBFBFB]"
    >
      <div>
        <div className="flex items-center ">
          <div className="h-0.5 w-4 bg-[#D9D9D9] justify-center" />
          <span className="Inter text-4xl text-[#656D72] uppercase text-bold mx-3 justify-center">
            career path
          </span>
        </div>
        <h1 className="text-2xl flex justify-center">Work Experices</h1>
      </div>
    </div>
  );
};

export default career;
