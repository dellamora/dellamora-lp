/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import Instagram from "../../svgs/social/Instagram";
import GitHub from "../../svgs/social/GitHub";
import Twitter from "../../svgs/social/Twitter";
import LinkedIn from "../../svgs/social/LinkedIn";
/* import { Container } from "./styles"; */

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between h-fit p-[65px]">
      <div>
        <div className="flex items-center">
          <div
            className="h-0.5 w-4 bg-[#D9D9D9]            w3-animate-opacity
           w3-animate-left"
          ></div>
          <span
            className="
          Inter 
          text-4xl
           text-[#656D72] 
           uppercase 
           text-bold 
           mx-3
           w3-animate-opacity
           w3-animate-left "
          >
            MY NAME IS FRANCIELLE
          </span>
        </div>
        <h1 className="text-3xl">Dellamora</h1>
        <p className="font-Inter w-[33rem]">
          Creative front-end developer with more than +2 years of experience in
          enterprise companies and startups. Proficient in Html, Tailwind Css,
          Javascript and React. Passionate about UI/UX
        </p>
        <div className="flex items-center space-x-8 py-11">
          <Instagram />
          <GitHub />
          <Twitter />
          <LinkedIn />
        </div>
      </div>

      <div
        className=" 
      flex 
      w3-containe 
      w3-animate-right 
      "
      >
        <div
          className="
        bg-[#F1AB75] 
        w-80 
        rounded-[16px] 
        h-96 
        rotate-12 
        w3-animate-opacity"
        ></div>
        <img
          src="/assets/mePc.png"
          className="
          absolute
          rounded-[16px]  
          w-80 h-96"
        />
      </div>
    </div>
  );
};

export default Header;
