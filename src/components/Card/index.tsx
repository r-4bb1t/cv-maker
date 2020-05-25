import React, { ReactNode, useState, useRef } from "react";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";
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
  const [{ isDragging }, drag, preview] = useDrag({
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
      isOver: monitor.isOver(),
    }),
    hover({ id: draggedId }: Item, monitor) {
      console.log(monitor.getInitialSourceClientOffset());
      console.log(monitor.getClientOffset());
      console.log(monitor.getSourceClientOffset());
      console.log("--------------------------------");
    },
    drop({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  });

  return (
    <>
      <S.Card ref={(node) => drop(preview(node))} isDragging={isDragging} isOver={isOver} row={row} height={height}>
        <S.DragHandle ref={(node) => drag(node)} />
        id:{id}, {isOver.toString()}, row:{row}, height:{height}
        <br />
        {children}
      </S.Card>
    </>
  );
}

export default Card;
