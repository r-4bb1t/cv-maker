import styled, { keyframes } from "styled-components";

interface PanelProps {
  isShowing: boolean;
}

const hide = keyframes`
  0% {
    right: 0;
  }
  80% {
    right:-20%;
  }
  100% {
    right:-20%;
  }
`;

const show = keyframes`
  0% {
    right:-20%;
  }
  80% {
    right: 0;
  }
  100% {
    right: 0;
  }
`;

export const Container = styled.div<PanelProps>`
  position: fixed;
  z-index: 100;
  width: 20%;
  height: 100vh;
  top: 0;
  right: -20%;
  background: white;
  color: black;
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.5);
  animation: ${(props) => (props.isShowing ? show : hide)} 1s normal forwards;
`;
