import styled from "styled-components";

interface TableProps {
  zoom?: number;
}

export const Table = styled.div<TableProps>`
  position: relative;
  background: #ccc;
  margin: 0 auto;
  width: 21cm;
  height: 29.7cm;
  zoom: ${(props) => (props.zoom ? props.zoom : 1)};
`;
