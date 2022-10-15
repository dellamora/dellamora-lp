import { Metrics } from "../types";

export type Icon<T extends Record<string, unknown> = Record<string, unknown>> =
  (
    props: {
      width?: `${number}${Metrics}`;
      active?: boolean;
      fill?: `${string}`;
    } & T,
  ) => JSX.Element;
