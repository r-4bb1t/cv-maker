import React, { useState } from "react";
import * as S from "./styles";
import { useDrop } from "react-dnd";
import { Map, List, Record } from "immutable";
import Card from "../Card";
import Profile from "../Contents/Profile";

interface TableProps {
  zoom: number;
}

const cardItems = List([
  Map({
    id: 0,
    children: <Profile />,
    height: 3,
  }),
  Map({
    id: 1,
    children: "인생은 인생이다",
    height: 2,
  }),
  Map({
    id: 2,
    children: "냥냔냥",
    height: 3,
  }),
  Map({
    id: 3,
    children: "열라면에 다진마늘",
    height: 2,
  }),
]);

function Table({ zoom }: TableProps) {
  const [cards, setCards] = useState(cardItems);

  const moveCard = (id: number, toIndex: number) => {
    const { card, index } = findCard(id);
    let newCards = cards;
    newCards = newCards.splice(index, 1).splice(toIndex, 0, card);
    setCards(newCards);
  };

  const findCard = (id: number) => {
    const card = cards.filter((c) => c.get("id") === id).get(0);
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const [, drop] = useDrop({ accept: "card" });

  return (
    <>
      <S.Table ref={drop} zoom={zoom}>
        {cards.map((card, i) => (
          <Card
            key={i}
            row={i}
            height={card.get("height")}
            id={card.get("id")}
            moveCard={moveCard}
            findCard={findCard}
            children={card.get("children")}
          />
        ))}
      </S.Table>
    </>
  );
}

export default Table;
