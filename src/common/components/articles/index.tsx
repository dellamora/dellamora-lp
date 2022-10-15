/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Title } from "../../../application/domain/components/Title";

/* import { Container } from "./styles"; */

const Articles: React.FC = (): JSX.Element => {
  return (
    <section
      className="
   my-10 p-[65px] 
   "
      id="blog"
    >
      <Title subChildren={"Personal Blog"}> MY ARTICLES</Title>
    </section>
  );
};

export default Articles;
