import styled from "@emotion/styled";

export const TimelineStyled = styled.div`
  display: grid;
  row-gap: 1rem;
  position: relative;
  grid-template-columns: ${(props: { width: number; height: number }) =>
    `repeat(${props.width}, 1fr)`};
  grid-template-rows: ${(props: { width: number; height: number }) =>
    `repeat(${props.height}, 2rem)`};
`;
