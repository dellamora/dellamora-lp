/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";
import MoonIcon from "../../../common/svgs/MoonIcon";
import Footer from "../../footer";
type Props = {
  links: { name: string; to: string; id: number }[];
  handleClose: () => void;
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
/* import { Container } from "./styles"; */
const SideBar = ({ links, handleClose }: Props): JSX.Element => {
  return (
    <>
      <motion.div
        className="
      sideBar 
      md:hidden 
      flex
      flex-col 
      z-20
      fixed 
      h-screen 
      right-0 
      w-[70%] 
      bg-[#fff] 
      p-3
      justify-between
      "
        initial={{ x: 360 }}
        animate={{ x: 0 }}
        exit={{ x: 700 }}
        transition={{ velocity: 0.6 }}
      >
        <div />
        <motion.ul className="flex flex-col space-y-6  " variants={variants}>
          <div className="flex flex-col  items-center space-y-8 ">
            {links.map(({ name, to, id }) => (
              <motion.div
                key={id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: id * 0.2,
                  },
                }}
                transition={{
                  x: { stiffness: 1000 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <a className="font-thin text-2xl " href={to}>
                  {name}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.ul>
        <Footer />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="
        md:hidden 
        block z-10 
        fixed 
        h-screen
        right-0 
        w-screen 
        bg-inverse
        backdrop-blur-sm

        "
      />
    </>
  );
};

export default SideBar;
