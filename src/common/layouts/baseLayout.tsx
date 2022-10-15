/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Header from "../components/nav";

/* import { Container } from "./styles"; */

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#FFFFFF]">
      <Header />
      <div className="grow  p-[65px] ">{children}</div>
    </div>
  );
};

export default BaseLayout;
