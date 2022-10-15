/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Instagram from "../../svgs/social/Instagram";
import GitHub from "../../svgs/social/GitHub";
import Twitter from "../../svgs/social/Twitter";
import LinkedIn from "../../svgs/social/LinkedIn";
/* import { Container } from "./styles"; */

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="">
      <div className="flex justify-center items-center space-x-8 py-11">
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
