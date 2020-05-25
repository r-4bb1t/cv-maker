import styled from "styled-components";

interface CardProps {
  row: number;
  height: number;
  isDragging: boolean;
  isOver: boolean;
}

interface BorderProps {
  isOver: boolean;
}

export const Card = styled.div<CardProps>`
  position: relative;
  float: left;
  width: 100%;
  height: ${(props) => props.height * 10}%;
  background: ${(props) => (props.isOver ? "lightblue" : "white")};
  color: #000;
  opacity: ${(props) => (props.isDragging ? 0.3 : 1)};
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

export const BorderLine = styled.div<BorderProps>`
  background: lightgray;
  position: absolute;
  left: 2.5%;
  bottom: 0px;
  width: 95%;
  height: 2px;
`;
