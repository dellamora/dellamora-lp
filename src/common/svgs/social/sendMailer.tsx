/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { Icon } from "../../../application/domain/components";

/* import { Container } from "./styles"; */

const SendMail: Icon = ({ className }): JSX.Element => {
  return (
    <a href="mailto:francielle@dellamora.dev">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="25"
        height="25"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#0b0f11"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 1.6,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="10"
          y1="14"
          x2="21"
          y2="3"
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 1.6,
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 1.6,
            duration: 3,
            ease: "easeInOut",
          }}
          d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
        />
      </motion.svg>
    </a>
  );
};

export default SendMail;
