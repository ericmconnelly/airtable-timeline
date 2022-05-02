import React, { FC } from "react";
import { useTimeline } from "../hooks";
import { buildGridLines } from "../utils/grids";

export const Grid: FC = () => {
  const { width, height } = useTimeline();

  return <>{buildGridLines(width, height)}</>;
};
