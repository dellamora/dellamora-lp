/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Title } from "../../../application/domain/components/Title";

/* import { Container } from "./styles"; */

const career: React.FC = (): JSX.Element => {
  return (
    <section
      id="portfolio"
      className="
      flex 
      justify-between
      my-10 p-[65px] 
    bg-[#FBFBFB]"
    >
      <Title subChildren={"Work Experices"}> career path</Title>
    </section>
  );
};

export default career;
