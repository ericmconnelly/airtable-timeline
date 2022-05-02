import React from "react";
import { useTimeline } from "../hooks";
import { FC, useState } from "react";
import { TimelineEvent } from "../types";
import {
  ModalStyled,
} from "../styled";
import { ModalProps } from "../types";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";

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
      <ModalHeader
        isEditing={isEditing}
        handleEdit={handleEdit}
        handleClose={handleClose}
      />
      <ModalBody
        isEditing={isEditing}
        event={event}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    </ModalStyled>
  );
};
