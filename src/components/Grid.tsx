import React, { FC } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useTimeline } from "../hooks";
import { GridStyled } from "../styled";

export const Grid: FC = () => {
  const { width, height } = useTimeline();
  const gridLines = Array(width).fill(undefined);

  return (
    <>
      {gridLines.map((_, index) => {
        return (
          <Tooltip title="Hello" key={index}>
            <GridStyled
              index={index}
              height={height}
              key={index}
              className="grid-line"
            />
          </Tooltip>
        );
      })}
    </>
  );
};
