import React, { FC, useState } from "react";
import { useDrag } from "react-dnd";
import { isAfter, isBefore } from "date-fns";
import differenceInDays from "date-fns/differenceInDays";
import { useTimeline } from "../hooks";
import { EventNameStyled, EventStyled } from "../styled";
import { EventProps, TimelineEvent } from "../types";
import { Modal } from "./Modal";
import { Portal } from "./Portal";

export const Event: FC<EventProps> = ({ lane, event, index }) => {
  const { startDate, endDate, showModal, hideModal, modal } = useTimeline();
  const [coords, setCoords] = useState({});

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "event",
      item: event,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  if (isAfter(startDate, new Date(event.end))) {
    return null;
  }

  if (isBefore(endDate, new Date(event.start))) {
    return null;
  }

  const eventStart = isAfter(startDate, new Date(event.start))
    ? 1
    : differenceInDays(new Date(event.start), startDate) + 1;

  const eventDuration = isAfter(startDate, new Date(event.start))
    ? differenceInDays(new Date(event.end), startDate) + 1
    : differenceInDays(new Date(event.end), new Date(event.start)) + 1;

  const onClick = (event: any, timelineEvent: TimelineEvent) => {
    if (timelineEvent.id === modal) return;

    const rect = event.target.getBoundingClientRect();

    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY + 30,
    });

    showModal(timelineEvent.id);
  };

  const onClose = () => {
    hideModal();
  };

  return (
    <>
      <EventStyled
        ref={drag}
        className="event"
        onClick={(e) => onClick(e, event)}
        lane={lane}
        isDragging={isDragging}
        eventStart={eventStart}
        eventDuration={eventDuration}
      >
        <EventNameStyled className="event-name">{event.name}</EventNameStyled>
        {modal === event.id && (
          <Portal>
            <Modal
              coords={coords}
              isShowing={modal === event.id}
              event={event}
              onClose={onClose}
            />
          </Portal>
        )}
      </EventStyled>
    </>
  );
};
