import { TimelineContext } from "../context";
import { useContext } from "react";
import { TimelineContext as TimelineCtx } from "../types";

export const useTimeline = (): TimelineCtx => {
  const timelineCtx = useContext(TimelineContext);
  return timelineCtx;
};
