import styled from "styled-components";

interface CardProps {
  row: number;
  height: number;
  isDragging: boolean;
}

export const Card = styled.div<CardProps>`
  position: static;
  float: left;
  width: 100%;
  height: ${(props) => props.height * 10}%;
  background: #daf;
  color: #000;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
`;
