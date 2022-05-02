import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Airtable from "../svg/airtable.svg";
import { useTimeline } from "../hooks";
import { Timeline } from "./Timeline";
import { TimelineProvider } from "../context";
import { GlobalStyled, HeaderStyled } from "../styled";

export const App = () => {
  return (
    <div className="app">
      <GlobalStyled />
      <HeaderStyled>
        <Airtable />
        <h1>Airtable Timeline</h1>
      </HeaderStyled>
      <main>
        <TimelineProvider>
          <DndProvider backend={HTML5Backend}>
            <Timeline />
          </DndProvider>
        </TimelineProvider>
      </main>
    </div>
  );
};
