/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Instagram from "../../common/svgs/social/Instagram";
import GitHub from "../../common/svgs/social/GitHub";
import Twitter from "../../common/svgs/social/Twitter";
import LinkedIn from "../../common/svgs/social/LinkedIn";
/* import { Container } from "./styles"; */

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="">
      <div className=" flex justify-center items-center space-x-8 py-11">
        <Instagram fill={"#656D72"} />
        <GitHub fill={"#656D72"} />
        <Twitter fill={"#656D72"} />
        <LinkedIn fill={"#656D72"} />
      </div>
      <div className="flex justify-center items-center pb-[88px]">
        <p className="font-Inter text-[#656D72]">© 2022 — Dellamora</p>
      </div>
    </footer>
  );
};

export default Footer;
