import React, { ReactNode, useState, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import ReactDOM from "react-dom";
import * as S from "./styles";

interface CardProps {
  children?: React.ReactNode;
  id: any;
  moveCard: (fromIndex: number, toIndex: number) => void;
  findCard: (index: number) => { index: number };
}

interface Item {
  type: string;
  id: number;
  originalIndex: number;
}

function Card({ id, moveCard, findCard, children }: CardProps) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: "card",
    canDrop: () => false,
    hover({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  });

  return (
    <>
      <S.Card ref={(node) => drag(drop(node))} isDragging={isDragging}>
        id:{id}, {isDragging.toString()}
        <br />
        {children}
      </S.Card>
    </>
  );
}

export default Card;
