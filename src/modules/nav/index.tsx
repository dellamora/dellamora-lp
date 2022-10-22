/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import MoonIcon from "../../common/svgs/MoonIcon";
import {
  motion,
  useScroll,
  useSpring,
  useCycle,
  AnimatePresence,
} from "framer-motion";
import { useDimensions } from "./components/use-dimensions";
import { MenuToggle } from "./components/MenuToggle";
import SideBar from "./components/SideBar";
/* import { Container } from "./styles"; */

const Nav = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const links = [
    { name: "Portfolio", to: "#portfolio", id: 1 },
    { name: "Experices", to: "#experices", id: 2 },
    { name: "Blog", to: "#blog", id: 3 },
    { name: "Skills", to: "#skills", id: 4 },
    { name: "Contact", to: "#contact", id: 5 },
  ];

  return (
    <div>
      <motion.nav className="justify-end bg-transparent flex fixed w-screen z-30  md:bg-[#fff] cursor-none md:justify-between p-5 center navBar">
        <a className="hidden md:block text-2xl  bg-inverse" href="/">
          Dellamora.
        </a>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="fixed flex md:hidden items-center space-x-5 z-20 bg-[#fff]"
        >
          <MenuToggle toggle={() => setIsOpen(current => !current)} />
        </motion.div>

        <div className="hidden gap-3 md:relative md:flex text-xl items-center ">
          {links.map(({ name, to, id }) => (
            <a className="pl-0 px-2 font-Frank" key={id} href={to}>
              {name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-3 items-center ">
          <MoonIcon width="17px" />
          <button
            onClick={() => console.log("baixar pdf")}
            className="
              bg-white 
              hover:bg-gray-100 
              text-gray-800 
              font-semibold 
              py-[13px] px-[20px]
              border 
             border-[#F1F1F1]
             text-[#232E35]
             font-Inter 
             rounded-lg"
          >
            Resume
          </button>
        </div>
        <motion.div
          className="top-0 absolute  rounded md:top-auto  md:bottom-[0px] left-0 right-0 md:h-[2px] origin-[0%] bg-primary"
          style={{ scaleX }}
        />
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <SideBar links={links} handleClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
