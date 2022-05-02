import React from "react";
import { InputFormStyled, EventFormLabel } from "../styled";
import { EventFormBodyProps } from "../types";

export const EventFormBody = ({ newEvent, onChange }: EventFormBodyProps) => (
  <>
    <EventFormLabel htmlFor="name" className="event-form-label">
      Name
    </EventFormLabel>

    <InputFormStyled
      type="text"
      id="name"
      name="name"
      className="event-form-input"
      value={newEvent.name}
      onChange={onChange}
    />

    <label htmlFor="start" className="event-form-label">
      Start
    </label>

    <InputFormStyled
      type="date"
      id="start"
      name="start"
      className="event-form-input"
      value={newEvent.start}
      onChange={onChange}
    />

    <label htmlFor="end" className="event-form-label">
      End
    </label>

    <InputFormStyled
      type="date"
      id="end"
      name="end"
      className="event-form-input"
      value={newEvent.end}
      onChange={onChange}
    />
  </>
);
