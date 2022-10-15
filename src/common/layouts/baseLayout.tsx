/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Nav from "../components/nav";

/* import { Container } from "./styles"; */

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col  bg-[#FFFFFF]">
      <Nav />
      <div className="grow  ">{children}</div>
    </div>
  );
};

export default BaseLayout;
