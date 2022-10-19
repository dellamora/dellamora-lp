/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import MoonIcon from "../../common/svgs/MoonIcon";
import { motion, useScroll, useSpring } from "framer-motion";
/* import { Container } from "./styles"; */

const Nav: React.FC = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed w-screen z-10 cursor-none ">
      <nav className=" bg-[#fff] cursor-none flex justify-between  p-8 center w3-animate-opacity">
        <a className="text-2xl w3-animate-left bg-inverse" href="/">
          Dellamora.
        </a>
        <div className=" relative flex text-xl items-center w3-animate-top">
          <a className="pl-0 px-2 font-Frank" href="#portfolio">
            Portfolio
          </a>
          <a className="px-2 font-Frank" href="#experices">
            Experices
          </a>
          <a className="px-2 font-Frank" href="#blog">
            Blog
          </a>
          <a className="px-2 font-Frank" href="#skills">
            Skills
          </a>
          <a className="pr-0 px-2 font-Frank" href="#contact">
            Contact
          </a>
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
        <motion.div
          className="absolute rounded bottom-[0px]  left-0 right-0 h-[2px] origin-[0%] bg-[#000]"
          style={{ scaleX }}
        />
      </nav>
    </div>
  );
};

export default Nav;
