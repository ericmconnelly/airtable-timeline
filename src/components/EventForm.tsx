import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { EventFormProps } from "../types";
import { EventFormStyled } from "../styled";
import { EventFormBody } from "./EventFormBody";
import { EventFormFooter } from "./EventFormFooter";

export const EventForm: FC<EventFormProps> = ({ event, onCancel, onSave }) => {
  const [newEvent, setNewEvent] = useState(event);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(newEvent);
  };

  return (
    <EventFormStyled className="event-form" onSubmit={onSubmit}>
      <EventFormBody newEvent={newEvent} onChange={onChange} />
      <EventFormFooter onCancel={onCancel} onSubmit={onSubmit} />
    </EventFormStyled>
  );
};
