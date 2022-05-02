import React from "react";
import { GridStyled } from "../styled";

export const buildGridLines = (width: number, height: number) => {
  const gridLines = [];

  for (let index = 0; index < width; index++) {
    gridLines.push(
      <GridStyled
        index={index}
        height={height}
        key={index}
        className="grid-line"
      />
    );
  }

  return gridLines;
};
