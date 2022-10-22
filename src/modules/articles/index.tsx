/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Section, Title } from "../../common/components";
import Card from "./components/Card";

const Articles: React.FC = (): JSX.Element => {
  return (
    <Section bgColor="bg-[#FBFBFB]" id="blog">
      <Title subTitle="Personal Blog">MY ARTICLES</Title>
      <Card />
    </Section>
  );
};

export default Articles;
