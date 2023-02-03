import React, { useEffect, useState } from 'react';
import { CARD_MAP, ICard } from '../../../models/config';
import Card from './Card';

const Hand = () => {

  const [deck, setDeck] = useState<ICard[]>(Array.from(CARD_MAP.values()));
  const [hand, setHand] = useState<ICard[]>([]);
  const [chosenCardHistory, setChosenCardHistory] = useState<ICard[]>([]);

  const chooseRandom3Cards = () => {
    let newHand = [];

    let randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    setHand(newHand);
  }

  const cardClick = (card: ICard) => {
    const newHistory = [...chosenCardHistory];
    newHistory.push(card);

    //TODO: Execute Action

    setChosenCardHistory(newHistory);
  }


  useEffect(() => {
    chooseRandom3Cards();
  }, [,chosenCardHistory]);

  return (
    <div className="hand flex items-center justify-center">
      {hand.map((card) => {
        return <Card header={card.name} icon={card.path} desc={card.description} onClick={() => cardClick(card)} />
      })}
    </div>
  );
};

export default Hand;