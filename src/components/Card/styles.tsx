import styled from "styled-components";

interface CardProps {
  row: number;
  height: number;
  isDragging: boolean;
  isOver: boolean;
}

export const Card = styled.div<CardProps>`
  position: relative;
  float: left;
  width: 100%;
  height: ${(props) => props.height * 10}%;
  background: ${(props) => (props.isOver ? "lightblue" : "#eee")};
  color: #000;
  opacity: ${(props) => (props.isDragging ? 0.3 : 1)};
`;

export const DragHandle = styled.div`
  position: absolute;
  cursor: move;
  right: 10px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 20px solid #ccc;
  border-left: 20px solid transparent;
`;
