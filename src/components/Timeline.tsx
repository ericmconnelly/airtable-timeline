import React, { FC, WheelEvent } from "react";
import { useDrop } from "react-dnd";

import { Grid } from "./Grid";
import { Lane } from "./Lane";
import { useTimeline } from "../hooks";
import { TimelineStyled } from "../styled";
import { TimelineProps } from "../types";

export const Timeline: FC<TimelineProps> = () => {
  const { lanes, width, height, zoomIn, zoomOut} = useTimeline();
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "event",
      canDrop: () => true,
      drop(_item, monitor) {
        console.log('dropping ', _item, monitor.getItem())
        return undefined
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItemType(),
      }),
    }),
    []
  );

  const onWheel = (event: WheelEvent) => {
    event.deltaY < 0 ? zoomIn() : zoomOut();
  };

  return (
    <TimelineStyled
      className="timeline"
      onWheel={onWheel}
      width={width}
      height={height}
      ref={drop}
    >
      {lanes.map((lane, index) => {
        return <Lane key={index} lane={index} events={lane}/>;
      })}

      <Grid />
    </TimelineStyled>
  );
};
