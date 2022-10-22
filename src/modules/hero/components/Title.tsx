/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {
  children: string;
  subTitle: string;
};

export const Title = ({ children, subTitle }: Props): JSX.Element => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <div>
      <div className="flex md:items-center ">
        <div className=" hidden md:flex mr-3 h-0.5 w-4 bg-[#D9D9D9] justify-center" />

        {children.split(" ").map((word, index) => {
          return (
            <>
              <motion.span
                className=" font-Inter text-4xl mr-2 text-[#656D72] uppercase text-bold "
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <motion.span
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            </>
          );
        })}
      </div>
      <div className="flex md:items-center  ">
        {subTitle.split(" ").map((word, index) => {
          return (
            <motion.span
              className="font-Frank text-3xl flex mr-2  "
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <motion.h1
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </motion.h1>
                );
              })}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};
