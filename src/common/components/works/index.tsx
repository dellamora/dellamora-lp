/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Title } from "../../../application/domain/components/Title";

/* import { Container } from "./styles"; */

const Works: React.FC = (): JSX.Element => {
  return (
    <section
      className="
      flex 
      justify-between
      my-10 p-[65px] "
      id="experices"
    >
      <Title subChildren={"Featured Portfolios"}> my works</Title>
    </section>
  );
};

export default Works;
