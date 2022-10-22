/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Section, Title } from "../../common/components";
import Cards from "./Card";

const Works: React.FC = (): JSX.Element => {
  return (
    <Section bgColor="bg-[#FBFBFB]" id="portfolio">
      <Title subTitle="Featured Portfolios">MY Projects</Title>
      <Cards />
    </Section>
  );
};

export default Works;
