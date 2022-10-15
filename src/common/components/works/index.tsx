/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Works: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between h-fit p-[65px]">
      <div>
        <div className="flex items-center ">
          <div className="h-0.5 w-4 bg-[#D9D9D9] justify-center" />
          <span className="Inter text-4xl text-[#656D72] uppercase text-bold mx-3 justify-center">
            my works
          </span>
        </div>
        <h1 className="text-2xl flex justify-center">Featured Portfolios</h1>
      </div>
    </div>
  );
};

export default Works;
