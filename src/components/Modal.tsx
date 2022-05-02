import React from "react";
import { EventForm } from "./EventForm";
import { format } from "date-fns";
import { useTimeline } from "../hooks";
import { FC, useState } from "react";
import Pencil from "../svg/pencil.svg";
import X from "../svg/x.svg";
import { TimelineEvent } from "../types";
import {
  ModalStyled,
  ModalBodyStyled,
  ModalActionsStyled,
  ModalActionStyled,
} from "../styled";
import { ModalProps } from "../types";

export const Modal: FC<ModalProps> = ({
  isShowing,
  event,
  onClose,
  coords,
}) => {
  const { updateEvent, deleteEvent } = useTimeline();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (event: TimelineEvent) => {
    setIsEditing(false);
    updateEvent(event.id, event);
    onClose();
  };

  const handleClose = (e: any) => {
    e.preventDefault();

    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    setIsEditing(false);
    deleteEvent(event.id);
    onClose();
  };

  if (!isShowing) {
    return null;
  }

  return (
    <ModalStyled className="modal" coords={coords}>
      <ModalActionsStyled className="modal-actions">
        {isEditing ? null : (
          <ModalActionStyled className="modal-action" onClick={handleEdit}>
            <Pencil width="1.75rem" />
          </ModalActionStyled>
        )}

        <ModalActionStyled className="modal-action" onClick={handleClose}>
          <X width="1.75rem" />
        </ModalActionStyled>
      </ModalActionsStyled>

      <ModalBodyStyled className="modal-body">
        {isEditing ? (
          <EventForm
            event={event}
            onCancel={handleCancel}
            onSave={handleSave}
          />
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
    </ModalStyled>
  );
};
