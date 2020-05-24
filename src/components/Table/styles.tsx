import styled from "styled-components";

interface TableProps {
  zoom?: number;
}

export const Table = styled.div<TableProps>`
  background: #fff;
  width: 21cm;
  height: 29.7cm;
  margin: 20px;
  zoom: ${(props) => (props.zoom ? props.zoom : 1)};
`;
