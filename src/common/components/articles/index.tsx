/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Articles: React.FC = (): JSX.Element => {
  return (
    <div
      className="
   my-10 p-[65px] 
   "
    >
      <div className="flex flex-col">
        <div>
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-4 bg-[#D9D9D9] justify-center" />
            <span className="Inter text-4xl text-[#656D72] uppercase text-bold mx-3 justify-center">
              MY ARTICLES
            </span>
          </div>
          <h1 className="text-2xl flex justify-center">Personal Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Articles;
