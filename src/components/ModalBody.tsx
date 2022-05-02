import React from "react";
import { EventForm } from "./EventForm";
import { format } from "date-fns";
import {
  ModalBodyStyled,
} from "../styled";

export const ModalBody = ({
  isEditing,
  event,
  handleCancel,
  handleSave,
  handleDelete,
}: any) => (
  <ModalBodyStyled className="modal-body">
    {isEditing ? (
      <EventForm event={event} onCancel={handleCancel} onSave={handleSave} />
    ) : (
      <>
        <h2>{event.name}</h2>

        <p>{`${format(new Date(event.start), "P")} - ${format(
          new Date(event.end),
          "P"
        )}`}</p>

        <button
          type="button"
          className="actions button primary"
          onClick={handleDelete}
        >
          Delete
        </button>
      </>
    )}
  </ModalBodyStyled>
);
