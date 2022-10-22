/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

/* import { Container } from "./styles"; */

const Cards: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ rotate: -12 }}
        transition={{ duration: 2, delay: 0.75 }}
        className="
      lg:bg-primary 
      lg:w-[21rem] 
      lg:rounded-[16px] 
      lg:h-[25rem] 
      lg:-rotate-12 
"
      />

      <img
        src="/assets/mePc.png"
        className=" hidden lg:block lg:absolute
      lg:rounded-[16px] lg:w-[21rem] lg:h-[25rem] "
      ></img>
    </div>
  );
};

export default Cards;
