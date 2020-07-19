import React from "react";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";
import * as S from "./styles";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import HeightIcon from "@material-ui/icons/Minimize";

interface CardProps {
  children?: React.ReactNode;
  id: any;
  height: any;
  moveCard: (fromIndex: number, toIndex: number) => void;
  findCard: (index: number) => { index: number };
  isResizable: boolean;
}

interface Item {
  type: string;
  id: number;
  originalIndex: number;
}

function Card({ id, height, moveCard, findCard, isResizable, children }: CardProps) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag, preview] = useDrag({
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

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    hover({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
    /* drop({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    }, */
  });

  const [{ isDragging: isResizing }, resize, resizePreview] = useDrag({
    item: { type: "resize", index: findCard(id).index, height },
    options: {
      dropEffect: "copy",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <S.Card ref={(node) => drop(preview(node))} isDragging={isDragging} isOver={isOver} height={height}>
        <S.DragHandle ref={(node) => drag(node)}>
          <DragHandleIcon style={{ color: "lightgray" }} />
        </S.DragHandle>
        {children}
        {isResizable ? (
          <S.BorderLine isResizing={isResizing} ref={(node) => resize(node)}>
            <DragPreviewImage connect={resizePreview} src={"nullPreview.png"} />
            <S.ResizeHandle ref={(node) => resize(node)}>
              <HeightIcon style={{ color: "lightgray" }} />
            </S.ResizeHandle>
          </S.BorderLine>
        ) : (
          <></>
        )}
      </S.Card>
    </>
  );
}

export default Card;
