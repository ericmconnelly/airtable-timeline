import styled from "@emotion/styled";
import { eventBgColor, eventBorderColor } from "../constants/index";

type EventStyledProps = {
  lane: number;
  eventStart: number;
  eventDuration: number;
  isDragging: boolean;
}

export const EventStyled = styled.button`
  background-color: ${eventBgColor};
  opacity: ${(props) => props.isDragging ? 0.5 : 1};
  border-radius: 5px;
  border: 2px solid	${eventBorderColor};
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  transition: all 300ms ease-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 4px;
  color: black;
  font-size: 0.9rem;
  text-align: start;
  :hover {
    background-color: ${eventBorderColor};
  }
  grid-column-start: ${(props: EventStyledProps) => props.eventStart};
  grid-row-start: ${(props: EventStyledProps) => props.lane + 1};
  grid-column-end: ${(props: EventStyledProps) => `span ${props.eventDuration}`};
`;