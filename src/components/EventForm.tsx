import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { EventFormProps } from "../types";
import { InputFormStyled, EventFormStyled, EventFormLabel } from "../styled";

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

      <div className="actions">
        <button type="button" className="button secondary" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="button primary" onClick={onSubmit}>
          Save
        </button>
      </div>
    </EventFormStyled>
  );
};
