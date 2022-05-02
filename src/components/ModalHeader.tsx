import React from "react";
import Pencil from "../svg/pencil.svg";
import X from "../svg/x.svg";
import { ModalActionsStyled, ModalActionStyled } from "../styled";

export const ModalHeader = ({ isEditing, handleEdit, handleClose }: any) => (
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
);
