/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  subChildren: React.ReactNode;
};

export function Title({ children, subChildren }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex items-center justify-center">
          <div className="h-0.5 w-4 bg-[#D9D9D9] justify-center" />
          <span className="Inter text-4xl text-[#656D72] uppercase text-bold mx-3 justify-center">
            {children}
          </span>
        </div>
        <h1 className="text-2xl flex justify-center">{subChildren}</h1>
      </div>
    </div>
  );
}
