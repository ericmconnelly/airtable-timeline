import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { GridStyled } from "../styled";

export const buildGridLines = (width: number, height: number) => {
  const gridLines = [];

  for (let index = 0; index < width; index++) {
    gridLines.push(
      <Tooltip title="Hello" key={index}>
        <GridStyled
          index={index}
          height={height}
          key={index}
          className="grid-line"
        />
      </Tooltip>
    );
  }

  return gridLines;
};
