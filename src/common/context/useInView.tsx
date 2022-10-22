/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useInView } from "react-intersection-observer";

/* import { Container } from "./styles"; */

const InViewContext: React.FC = (): JSX.Element => {
  const { ref: ref1, entry } = useInView();
  const values = [
    {
      id: 1,
      ref: ref1,
    },
    {
      id: 2,
      ref: ref1,
    },
    {
      id: 3,
      ref: ref1,
    },
    {
      id: 3,
      ref: ref1,
    },
    {
      id: 5,
      ref: ref1,
    },
  ];
  return (
    <div>
      <h1> Hello, InViewContext!</h1>
    </div>
  );
};

export default InViewContext;
