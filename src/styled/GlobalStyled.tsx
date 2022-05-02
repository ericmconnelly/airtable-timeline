import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyled = () => (
  <Global
    styles={css`
      body {
        margin: 4rem;
        padding: 0;
        font-family: sans-serif;
      }

      .button {
        padding: 0.5rem 1rem;
        color: black;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid black;
        font-size: 1rem;
        font-weight: 700;
        transition: all 300ms ease-out;
      }

      .button.primary {
        background-color: #f0f8ff;
      }

      .button.primary:hover {
        background-color: #eee8aa;
      }

      .button.secondary {
        background-color: #bbbbbb;
      }

      .button.secondary:hover {
        background-color: #999999;
      }

      .actions {
        display: grid;
        grid-auto-flow: column;
        column-gap: 1rem;
        margin: 2rem 0rem 0rem auto;
      }
    `}
  />
);
