import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../../context/game.context';
import { Avatar, AVATAR_MAP } from '../../../../models/config';
import SelectionCard from './SelectionCard';

const Selection = () => {
  const { setAvatar } = useContext(GameContext);

  const [chosen, setChosen] = useState<Avatar | null>(null);
  const avatarsToChooseFrom = Array.from(AVATAR_MAP.values());

  const headerText = !chosen ? "Choose your avatar" : "You have chosen: " + chosen.name;

  const onClickSelection = (avatar: Avatar, index: number) => {
    setChosen(avatar);
    const cardsEls = document.querySelectorAll('#selection-list .selectionCard') as NodeListOf<HTMLElement>;
    const chosenLeft = cardsEls[index].getBoundingClientRect().left;
    console.log("Chosen Card Left:", chosenLeft);

    cardsEls.forEach((card, i) => {
      if (i === index) {
        card.classList.add('z-10');
        setTimeout(() => {
          const canvas = document.querySelector('.canvas');
          card.classList.add('absolute');
          card.classList.add('bottom-4');
          card.classList.add('left-4');
          canvas?.appendChild(card);
          setAvatar(avatar);
        }, 1000);
      }
      else {
        const cardLeft = card.getBoundingClientRect().left;
        console.log("=======");
        console.log("Card ", i);
        console.log("Left ", cardLeft);
        const offset = chosenLeft - cardLeft;
        card.style.transform = "translateX("+offset+"px)";
        setTimeout(() => {
          card.remove();
        }, 400);
      }
      setTimeout(() => {
        // document.getElementById('selection-list')?.classList.add('finished');
        document.getElementById('selection-list')?.classList.add('justify-center');
        document.getElementById('selection-list')?.classList.remove('justify-between');
      }, 400);
      
    })
  };

  return (
    <div className="w-8/12 flex flex-col justify-between items-center">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-4">{headerText}</h2>
      <div id="selection-list" className="w-full flex flex-row justify-between items-center">
        {avatarsToChooseFrom.map((avatar: Avatar, index: number) => {
          return <SelectionCard key={avatar.name + "-index"} icon={avatar.path} header={avatar.name} desc={avatar.description} onClick={() => onClickSelection(avatar, index)} />;
        })}
      </div>
    </div>
  );
};

export default Selection;