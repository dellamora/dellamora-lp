/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

type Props = {
  children: JSX.Element | string;
  subTitle: string;
};

export const Title = ({ children, subTitle }: Props): JSX.Element => {
  return (
    <div>
      <div className="flex lg:items-center ">
        <div className="hidden lg:block mr-3 h-0.5 w-4 bg-[#D9D9D9] justify-center" />
        <span className="Inter text-4xl text-[#656D72] uppercase text-bold  ">
          {children}
        </span>
      </div>
      <h1 className="text-2xl flex  bg-inverse">{subTitle}</h1>
    </div>
  );
};
