import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/game.context';
import { CARD_MAP, ICard } from '../../../models/config';
import Card from './Card';

const Hand = () => {
  const {stats, setStats} = useContext(GameContext);
  const [deck, setDeck] = useState<ICard[]>(Array.from(CARD_MAP.values()));
  const [hand, setHand] = useState<ICard[]>([]);
  const [chosenCardHistory, setChosenCardHistory] = useState<ICard[]>([]);

  const chooseRandom3Cards = () => {
    setStats({...stats, hp: stats.hp - 10});
    let newHand = [];

    let randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    randIndex = Math.floor(Math.random() * 3);
    newHand.push(deck[randIndex]);

    setHand(newHand);
    //Animate cards coming in from the stack
  }

  const cardClick = (cardClicked: ICard) => {
    //Animate cards scaling down and fading out
    document.querySelectorAll('.hand .card').forEach((card) => {
      card.classList.add('removed');
      setTimeout(() => {
        card.classList.remove('removed');
        const newHistory = [...chosenCardHistory];
        newHistory.push(cardClicked);

        //TODO: Execute Action

        setChosenCardHistory(newHistory);
      }, 500);
    });

    
  }


  useEffect(() => {
    chooseRandom3Cards();
  }, [,chosenCardHistory]);

  return (
    <div className="hand flex items-center justify-center">
      {hand.map((card, i) => {
        return <Card key={card.name+"-"+i} header={card.name} icon={card.path} desc={card.description} onClick={() => cardClick(card)} />
      })}
    </div>
  );
};

export default Hand;