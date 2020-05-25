import React, { ReactNode, useState, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import ReactDOM from "react-dom";
import * as S from "./styles";

interface CardProps {
  children?: React.ReactNode;
  id: any;
  row: number;
  height: any;
  moveCard: (fromIndex: number, toIndex: number) => void;
  findCard: (index: number) => { index: number };
}

interface Item {
  type: string;
  id: number;
  originalIndex: number;
}

function Card({ id, row, height, moveCard, findCard, children }: CardProps) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.getItem() === null ? false : id === monitor.getItem().id,
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    },
  });

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.getItem() === null ? false : id === monitor.getItem().id,
    }),

    drop({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  });

  return (
    <>
      <S.Card ref={(node) => drag(drop(node))} isDragging={isDragging} row={row} height={height}>
        id:{id}, {isOver.toString()}, row:{row}, height:{height}
        <br />
        {children}
      </S.Card>
    </>
  );
}

export default Card;
