import React, { useState } from "react";
import * as S from "./styles";
import Card from "../Card";

const onDragEvent = (updateStateCallback: () => void) => {
  updateStateCallback();
};

const onDrag = (updateStateCallback: () => void) => {
  updateStateCallback();
};

const onDragEnd = (updateStateCallback: () => void) => {
  updateStateCallback();
};

const onDragOver = (updateStateCallback: () => void) => {
  updateStateCallback();
};

const onDragLeave = (updateStateCallback: () => void) => {
  updateStateCallback();
};

const onDrop = (updateStateCallback: () => void) => {
  updateStateCallback();
};

function Table() {
  const [cards, setCards] = useState([
    { index: 1, x: 0, w: 100, row: 1 },
    { index: 2, x: 0, w: 100, row: 2 },
    { index: 3, x: 0, w: 50, row: 3 },
    { index: 4, x: 50, w: 50, row: 3 },
  ]);
  const [rows, setRows] = useState([0, 10, 10, 10]);
  return (
    <>
      <S.Table zoom={1}>
        {cards.map((arr, i) => {
          return (
            <Card
              x={arr.x}
              y={rows.slice(0, arr.row).reduce((a, b) => a + b)}
              w={arr.w}
              h={rows[arr.row]}
              index={arr.index}
              key={i}
              onDragEvent={onDragEvent}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            />
          );
        })}
      </S.Table>
    </>
  );
}

export default Table;
