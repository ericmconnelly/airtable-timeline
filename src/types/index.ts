export type TimelineEvent = {
  id: number;
  start: string;
  end: string;
  name: string;
};

export type EventProps = {
  lane: number;
  index: number;
  event: TimelineEvent;
};

export type TimelineContext = {
  events: TimelineEvent[];
  startDate: Date;
  endDate: Date;
  lanes: TimelineEvent[][];
  width: number;
  height: number;
  updateEvent: (id: TimelineEvent["id"], event: TimelineEvent) => void;
  deleteEvent: (id: TimelineEvent["id"]) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  modal: number;
  showModal: (id: number) => void;
  hideModal: () => void;
};

export type EventFormProps = {
  event: TimelineEvent;
  onCancel: () => void;
  onSave: (event: TimelineEvent) => void;
};

export type LaneProps = {
  lane: number;
  events: TimelineEvent[];
};

export type ModalProps = {
  isShowing: boolean;
  event: TimelineEvent;
  onClose: () => void;
  coords: ModalCoords;
};

export type ModalCoords = {
  left?: number;
  top?: number;
};

export type TimelineProps = {};

export type TimelineProviderProps = {
  children: React.ReactNode;
};