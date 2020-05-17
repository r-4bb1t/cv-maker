import React, { ReactNode, useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as S from "./styles";

interface CardProps {
  x: number;
  y: number;
  w: number;
  h: number;
  index: number;
  overDir: number;
  onDragEvent(input: () => void): void;
  onDrag(input: () => void): void;
  onDragEnd(input: () => void): void;
  onDragOver(input: () => void): void;
  onDragLeave(input: () => void): void;
  onDrop(input: () => void): void;
  children?: React.ReactNode;
}

function Card({
  x,
  y,
  w,
  h,
  index,
  children,
  overDir,
  onDragEvent,
  onDrag,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
}: CardProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const ref = React.useRef(null);
  const getRef = () => {
    return ref.current.getBoundingClientRect();
  };
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsClicked(true);
    console.log("drag : " + isClicked);
  };
  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("draaaaaagging : " + isClicked);
  };
  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsClicked(false);
    console.log("from : " + index);
  };
  const handleDragOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    /* console.log(((e.pageX - getRef().left) / getRef().width) * 2 - 1);
          console.log(((e.pageY - getRef().top) / getRef().height) * 2 - 1); */
    /* setOverDir(
      Math.floor(
        (Math.atan2(
          ((e.pageY - getRef().top) / getRef().height) * 2 - 1,
          ((e.pageX - getRef().left) / getRef().width) * 2 - 1
        ) *
          (180 / Math.PI) +
          225) /
          90
      )
    ); */
    /* return Math.floor(
      (Math.atan2(
        ((e.pageY - getRef().top) / getRef().height) * 2 - 1,
        ((e.pageX - getRef().left) / getRef().width) * 2 - 1
      ) *
        (180 / Math.PI) +
        225) /
        90
    ); */
    /* console.log(overDir); */
  };

  const handleDragLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsOver(false);
  };
  const handleDrop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsOver(false);
    console.log("to : " + index);
  };
  return (
    <>
      <S.Card
        ref={ref}
        x={x}
        y={y}
        w={w}
        h={h}
        isClicked={isClicked}
        isOver={isOver}
        overDir={overDir}
        draggable={true}
        onDragStart={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onDragEvent(() => handleDragStart(e))}
        onDrag={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onDrag(() => handleDrag(e))}
        onDragEnd={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onDragEnd(() => handleDragEnd(e))}
        onDragEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          setIsOver(true);
        }}
        onDragLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onDragLeave(() => handleDragLeave(e))}
        onDragOver={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          onDragOver(() => {
            handleDragOver(e);
          })
        }
        onDrop={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onDrop(() => handleDrop(e))}
      >
        {index}
        {children}
      </S.Card>
    </>
  );
}

export default Card;
