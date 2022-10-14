/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";

/* import { Container } from "./styles"; */

const Card: React.FC = (): JSX.Element => {
  const [hoverClass, setHoverClass] = useState("single-letter");
  return (
    <div className="absolute  top-[35%] ">
      <div className="flex items-center">
        <div className="h-0.5 w-4 bg-[#D9D9D9]"></div>
        <span className="Inter text-4xl text-[#656D72] mx-3">
          MY NAME IS FRANCIELLE
        </span>
      </div>
      <h1 className="text-3xl">Dellamora</h1>
      <p className="w-[538px]">
        Creative front-end developer with more than +2 years of experience in
        enterprise companies and startups. Proficient in Html, Tailwind Css,
        Javascript and React. Passionate about UI/UX
      </p>
    </div>
  );
};

export default Card;
