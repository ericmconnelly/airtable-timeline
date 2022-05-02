import styled from "@emotion/styled";

export const ModalStyled = styled.div`
  position: absolute;
  top: ${(props: {coords: { top?: number; left?: number }}) => `${props.coords.top}px`};
  left: ${(props: {coords: { top?: number; left?: number }}) => `${props.coords.left}px`};
  transform: translateX(-50%);
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;
