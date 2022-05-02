import React, { FC } from "react";
import { Event } from "./Event";
import { LaneProps } from "../types";

export const Lane: FC<LaneProps> = ({ lane, events }) => {
  return (
    <>
      {events.map((event, index) => {
        return <Event key={event.id} lane={lane} index={index} event={event} />;
      })}
    </>
  );
};
