/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import Instagram from "../../../common/svgs/social/Instagram";
import GitHub from "../../../common/svgs/social/GitHub";
import Twitter from "../../../common/svgs/social/Twitter";
import LinkedIn from "../../../common/svgs/social/LinkedIn";
import SendMail from "../../../common/svgs/social/sendMailer";
/* import { Container } from "./styles"; */

const Content: React.FC = (): JSX.Element => {
  return (
    <div>
      <p className="font-Inter max-w-[33rem] text-justify text-[#232E35]">
        Creative front-end developer with more than +2 years of experience in
        enterprise companies and startups. Proficient in Html, Tailwind Css,
        Javascript and React. Passionate about UI/UX
      </p>

      <div className="flex lg:justify-start space-x-8 py-11">
        <Instagram />
        <GitHub />
        <Twitter />
        <LinkedIn />
        <SendMail width="25px" className="stroke-[#2c3e50]" />
      </div>
    </div>
  );
};

export default Content;
