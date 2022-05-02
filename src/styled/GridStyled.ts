import styled from "@emotion/styled";

export const GridStyled = styled.div`
  border-left: 1px solid #DCDCDC;
  z-index: -1;
  grid-column-start: ${(props: { index: number; height: number }) =>
    props.index + 1};
  grid-row-start: 1;
  grid-row-end: ${(props: { index: number; height: number }) =>
    props.height + 1};
`;
