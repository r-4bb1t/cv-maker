import styled from "styled-components";

interface CardProps {
  num?: number;
  isDragging: boolean;
}

export const Card = styled.div<CardProps>`
  position: relative;
  width: 70%;
  height: 10%;
  background: #daf;
  color: #000;
  /* opacity: ${(props) => (props.isDragging ? 0.5 : 1)}; */
`;
