import React, { useState } from "react";
import * as S from "./styles";
import { useDrop } from "react-dnd";
import { Map, List, Record } from "immutable";
import Card from "../Card";

const cardItems = List([
  Map({
    id: 0,
    children: "asdf0",
  }),
  Map({
    id: 1,
    children: "asdf1",
  }),
  Map({
    id: 2,
    children: "asdf2",
  }),
]);

function Table() {
  const [cards, setCards] = useState(cardItems);

  const moveCard = (id: number, toIndex: number) => {
    const { card, index } = findCard(id);
    let newCards = cards;
    newCards = newCards.splice(index, 1);
    newCards = newCards.splice(toIndex, 0, card);
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
      <S.Table ref={drop}>
        {cards.map((card, i) => (
          <Card key={i} id={card.get("id")} moveCard={moveCard} findCard={findCard} children={card.get("children")} />
        ))}
      </S.Table>
    </>
  );
}

export default Table;
