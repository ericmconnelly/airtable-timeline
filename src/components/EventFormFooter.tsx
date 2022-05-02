import React from "react";
import { EventFormFooterProps } from "../types";

export const EventFormFooter = ({ onCancel, onSubmit }: EventFormFooterProps) => (
  <div className="actions">
    <button type="button" className="button secondary" onClick={onCancel}>
      Cancel
    </button>

    <button type="submit" className="button primary" onClick={onSubmit}>
      Save
    </button>
  </div>
);