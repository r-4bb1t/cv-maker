import styled from "styled-components";

interface CardProps {
  x: number;
  y: number;
  w: number;
  h: number;
  overDir: number;
  isClicked: boolean;
  isOver: boolean;
}
export const Card = styled.div<CardProps>`
  position: absolute;
  width: ${(props) => props.w}%;
  height: ${(props) => props.h}%;
  top: ${(props) => props.y}%;
  left: ${(props) => props.x}%;
  background: ${(props) => (props.isClicked ? "#ff9494" : props.isOver ? "#eee" : "#fff")};
  opacity: ${(props) => (props.isClicked ? "0.2" : "1")};
  color:#000;
  z-index:${(props) => (props.isOver ? 1 : 0)};
  border-top: ${(props) => (props.overDir == 1 ? "2px dashed red" : "none")};
  border-right: ${(props) => (props.overDir == 2 ? "2px dashed red" : "none")};
  border-bottom: ${(props) => (props.overDir == 3 ? "2px dashed red" : "none")};
  border-left: ${(props) => (props.overDir == 4 ? "2px dashed red" : "none")};
  /* display: ${(props) => (props.isClicked ? "none" : "block")}; */
`;
