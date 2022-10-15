/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Title } from "../../../application/domain/components/Title";
import AppIcon from "../../svgs/services/AppIcon";
import CrownIcon from "../../svgs/services/CrownIcon";
import WorldIcon from "../../svgs/services/WorldIcon";

/* import { Container } from "./styles"; */

const Services: React.FC = (): JSX.Element => {
  return (
    <div
      id="specialized"
      className="
     my-10 p-[65px] 
     bg-[#FBFBFB]
     "
    >
      <div className="flex flex-col">
        <Title subChildren={"Specialized in"}> SERVICES</Title>

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
