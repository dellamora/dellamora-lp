/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import AppIcon from "../../svgs/services/AppIcon";
import CrownIcon from "../../svgs/services/CrownIcon";
import WorldIcon from "../../svgs/services/WorldIcon";

/* import { Container } from "./styles"; */

const Services: React.FC = (): JSX.Element => {
  return (
    <div
      className="
     my-10 p-[65px] 
     bg-[#FBFBFB]
     "
    >
      <div className="flex flex-col">
        <div>
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-4 bg-[#D9D9D9] justify-center" />
            <span className="Inter text-4xl text-[#656D72] uppercase text-bold mx-3 justify-center">
              SERVICES
            </span>
          </div>
          <h1 className="text-2xl flex justify-center">Specialized in</h1>
        </div>
        <div
          className="
        flex 
        mt-[108px] 
        mb-[184]  
        justify-between "
        >
          <div
            className=" 
          bg-[#fff] h-60 w-60 rounded p-6"
          >
            <div className="flex justify-center">
              <CrownIcon />
            </div>
            <h1>UI/UX Design</h1>
            <p className="font-Inter">
              Turn what you have in mind of a digital product into reality. For
              any platform you consider.
            </p>
          </div>
          <div className="bg-[#fff] h-60 w-60 rounded p-6">
            <div className="flex justify-center">
              <AppIcon />
            </div>
            <h1>Application Development</h1>
            <p className="font-Inter">
              Standard designing, building, and implementing your applications
              with documentation.
            </p>
          </div>
          <div className="bg-[#fff] h-60 w-60 rounded p-6">
            <div className="flex justify-center">
              <WorldIcon />
            </div>
            <h1>Web Development</h1>
            <p className="font-Inter">
              Create and maintain your websites and also take care of its
              performance and traffic capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
