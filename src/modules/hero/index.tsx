/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Instagram from "../../common/svgs/social/Instagram";
import GitHub from "../../common/svgs/social/GitHub";
import Twitter from "../../common/svgs/social/Twitter";
import LinkedIn from "../../common/svgs/social/LinkedIn";
/* import { Container } from "./styles"; */

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className=" flex overflow-hidden relative h-screen items-center justify-center  p-[65px]">
      <div className=" lg:flex lg:justify-between max-w-[80rem] lg:w-full lg:flex-row-reverse ">
        <div
          className=" 
          flex 
          w3-containe 
          w3-animate-right 
          
      "
        >
          <motion.div
            animate={{ rotate: -12 }}
            transition={{ duration: 2, delay: 0.75 }}
            className="
            lg:bg-[#000] 
            lg:w-[21rem] 
            lg:rounded-[16px] 
            lg:h-[25rem] 
            lg:-otate-12 
            lg:w3-animate-opacity"
          ></motion.div>
          <img
            src="/assets/mePc.png"
            className=" hidden lg:block lg:absolute
            lg:rounded-[16px] lg:w-[21rem] lg:h-[25rem] "
          ></img>
        </div>
        <div>
          <div className="flex lg:items-center ">
            <div className="hidden lg:block h-0.5 w-4 bg-[#e4c7c7]  w3-animate-opacity w3-animate-left"></div>
            <span
              className="
           Inter 
           text-4xl
           text-[#656D72] 
           uppercase 
           text-bold 
           lg:mx-3
           w3-animate-opacity
           w3-animate-left "
            >
              MY NAME IS FRANCIELLE
            </span>
          </div>
          <h1 className="text-3xl bg-inverse">Dellamora</h1>
          <p className="font-Inter max-w-[33rem] text-justify">
            Creative front-end developer with more than +2 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React. Passionate about UI/UX
          </p>
          <div className="flex  lg:justify-start space-x-8 py-11">
            <Instagram
              onClick={() => {
                console.log("OIOI");
              }}
            />
            <GitHub />
            <Twitter />
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
