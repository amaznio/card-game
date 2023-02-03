import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { GameContext } from '../../../../context/game.context';
import { Avatar, AVATAR_MAP } from '../../../../models/config';
import SelectionCard from './SelectionCard';

interface SelectionProps {
  setInitialAvatarPos: Function;
}

const Selection = (props: SelectionProps) => {
  const { setAvatar } = useContext(GameContext);

  const [chosen, setChosen] = useState<Avatar | null>(null);
  const [avatarsToChooseFrom, setAvatarsToChooseFrom] = useState<Avatar[]>(Array.from(AVATAR_MAP.values()));

  const headerText = !chosen ? "Choose your avatar" : "You have chosen: " + chosen.name;

  const onClickSelection = (avatar: Avatar, index: number) => {
    setChosen(avatar);
    const cardsEls = document.querySelectorAll('#selection-list .selectionCard') as NodeListOf<HTMLElement>;
    const chosenLeft = cardsEls[index].getBoundingClientRect().left;
    console.log("Chosen Card Left:", chosenLeft);

    cardsEls.forEach((card, i) => {
      if (i === index) {
        document.getElementById(avatar.name)?.classList.add('z-10');
        // card.classList.add('z-10');
        setTimeout(() => {
          // const canvas = document.querySelector('.canvas');
          // card.classList.add('absolute');
          // card.classList.add('bottom-4');
          // card.classList.add('left-4');
          // canvas?.appendChild(card);
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
        
      }
      
    });
    setTimeout(() => {
      setAvatarsToChooseFrom(avatarsToChooseFrom.filter((val) => val.name === avatar.name));
    }, 400);
    setTimeout(() => {
      const chosenCard = document.getElementById(avatar.name);
      console.log(chosenCard?.getBoundingClientRect());
      props.setInitialAvatarPos({
        x: chosenCard?.getBoundingClientRect().x,
        y: chosenCard?.getBoundingClientRect().y
      })
    }, 410);

  };

  return (
    <div className="w-8/12 flex flex-col justify-between items-center">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-4">{headerText}</h2>
      <div id="selection-list" className="w-full flex flex-row justify-center gap-4 items-center">
        <AnimatePresence>
          {avatarsToChooseFrom.map((avatar: Avatar, index: number) => {
            // if(chosen && chosen.name !== avatar.name) return <></>;

            return (
              <motion.div
                id={avatar.name}
                key={avatar.name}
                initial={{ display: 'none', opacity: 0 }}
                animate={{ display: 'block', opacity: 1 }}
                exit={{ display: 'none', opacity: 0, type: "tween" }}
                transition={{duration: .1}}
              >
                <SelectionCard key={avatar.name + "-index"} icon={avatar.path} header={avatar.name} desc={avatar.description} onClick={() => onClickSelection(avatar, index)} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Selection;