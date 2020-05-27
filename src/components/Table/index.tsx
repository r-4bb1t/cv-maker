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
    setLastHeight();
  };

  const findCard = (id: any) => {
    const card = cards.filter((c) => c.get("id") === id).get(0);
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const setLastHeight = () => {
    /* let s = 0;
    cards.map(
      (card, i) =>
        (s += findCard(card.get("id")).index === cards.size - 1 ? 0 : Number.parseInt(card.get("height").toString()))
    );
    console.log(s); */
    /* let newCards = cards;
    newCards = newCards.setIn([cards.size - 1, "height"], 10 - s);
    setCards(newCards); */
  };

  const setHeight = (id: number, to: number) => {
    let newCards = cards;
    newCards = newCards.setIn([id, "height"], to);
    setCards(newCards);
    setLastHeight();
  };

  const [, resizeDrop] = useDrop({
    accept: "resize",
    hover(item, monitor) {
      const { index, height } = monitor.getItem();
      if (index < cards.size - 1) {
        let sum = cards.getIn([index, "height"]) + cards.getIn([index + 1, "height"]);
        let temp = Math.max(Math.round(height + monitor.getDifferenceFromInitialOffset().y / 100), 1);
        console.log("sum " + sum);
        console.log("temp " + temp);
        if (temp < sum) {
          let newCards = cards;
          newCards = newCards.setIn([cards.getIn([index, "id"]), "height"], temp);
          newCards = newCards.setIn([cards.getIn([index + 1, "id"]), "height"], sum - temp);
          setCards(newCards);
        }
        console.log(sum - temp);
      }
    },
  });

  return (
    <>
      <S.Table ref={(node) => resizeDrop(node)} zoom={zoom}>
        {cards.map((card, i) => (
          <Card
            key={i}
            height={card.get("height")}
            id={card.get("id")}
            moveCard={moveCard}
            findCard={findCard}
            isLast={findCard(card.get("id")).index === cards.size - 1}
            children={card.get("children")}
          />
        ))}
      </S.Table>
    </>
  );
}

export default Table;
