/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
type Props = {
  children: JSX.Element | string;
};
const Paragraph: React.FC = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <div className="flex items-center ">
        <div className=" mr-3 h-0.5 w-4 bg-[#D9D9D9] " />
        <span className="Inter  text-[#656D72]  ">{children}</span>
      </div>
    </div>
  );
};

export default Paragraph;
