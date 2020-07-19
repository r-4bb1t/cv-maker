import styled from "styled-components";

interface CardProps {
  height: number;
  isDragging: boolean;
  isOver: boolean;
}

interface ResizeProps {
  isResizing: boolean;
}

export const Card = styled.div<CardProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height * 10}%;
  background: ${(props) => (props.isOver ? "lightblue" : "white")};
  color: #000;
  /* opacity: ${(props) => (props.isDragging ? 0.3 : 1)}; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`;

export const DragHandle = styled.div`
  position: absolute;
  cursor: move;
  right: 15px;
  top: calc(50%-var(height) / 2);
`;

export const ResizeHandle = styled.div`
  cursor: s-resize;
  position: relative;
  top: -25px;
`;

export const BorderLine = styled.div<ResizeProps>`
  background: ${(props) => (props.isResizing ? "lightblue" : "lightgray")};
  position: absolute;
  left: 2.5%;
  bottom: 0px;
  width: 95%;
  height: 2px;
`;
