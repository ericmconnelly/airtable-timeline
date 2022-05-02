import React from "react";
import timelineItems from "../data/timelineItems";
import { addDays, subDays } from "date-fns";
import differenceInDays from "date-fns/differenceInDays";
import { createContext, FC, useState } from "react";
import { TimelineContext as TimelineCtx, TimelineEvent } from "../types";
import { getEndDate, getStartDate } from "../utils/items";
import { assignLanes } from "../utils/lanes";
import { TimelineProviderProps } from "../types";

const TimelineContext = createContext({} as TimelineCtx);

const TimelineProvider = ({ children }: TimelineProviderProps) => {
  const [events, setEvents] = useState(timelineItems);
  const [lanes, setLanes] = useState(assignLanes(events));
  const [modal, setModal] = useState(null);
  const [startDate, setStartDate] = useState(getStartDate(events));
  const [endDate, setEndDate] = useState(getEndDate(events));

  const width = Math.max(0, differenceInDays(endDate, startDate) + 1);
  const height = lanes.length;

  const updateEvent = (id: TimelineEvent["id"], event: TimelineEvent) => {
    const index = events.findIndex((e) => e.id === id);
    const newEvents = Array.from(events);
    newEvents[index] = event;

    setEvents(newEvents);
  };

  const deleteEvent = (id: TimelineEvent["id"]): void => {
    const newEvents = Array.from(events);
    const index = events.findIndex((e) => e.id === id);
    newEvents.splice(index, 1);

    setEvents(newEvents);
  };

  const zoomIn = () => {
    const newStartDate = addDays(startDate, 1);
    const newEndDate = subDays(endDate, 1);

    if (differenceInDays(newEndDate, newStartDate) > 0) {
      setStartDate(newStartDate);
      setEndDate(newEndDate);
    }
  };

  const zoomOut = () => {
    setStartDate(subDays(startDate, 1));
    setEndDate(addDays(endDate, 1));
  };

  const showModal = (id: number) => {
    setModal(id);
  };

  const hideModal = () => {
    setModal(null);
  };

  const context = {
    events,
    startDate,
    endDate,
    lanes,
    width,
    height,
    modal,
    setLanes,
    updateEvent,
    deleteEvent,
    zoomIn,
    zoomOut,
    showModal,
    hideModal,
  };

  return (
    <TimelineContext.Provider value={context}>
      {children}
    </TimelineContext.Provider>
  );
};

export { TimelineContext, TimelineProvider };
