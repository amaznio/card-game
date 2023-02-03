import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Position } from '../../models/config';
import Hand from './_components/Hand';
import Selection from './_components/selection/Selection';
import { GameContext } from '../../context/game.context';
import Stack from './_components/Stack';
import AvatarCard from './_components/avatarCard/AvatarCard';

const Game = () => {
  const { avatar } = useContext(GameContext);

  const [initialAvatarPos, setInitialAvatarPos] = useState<Position>();

  return (
    <div className="w-screen h-screen flex flex-col relative overflow-hidden">
      <div className="w-full flex flex-col items-center mt-4">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 ">
          Welcome to an RPG card game
        </h1>
      </div>
      {avatar && initialAvatarPos && <AvatarCard initialAvatarPos={initialAvatarPos}/>}
      <div className="canvas flex justify-center items-center w-full h-full relative">
        <div className="w-full h-full flex justify-center items-center">
          {!avatar && <Selection setInitialAvatarPos={setInitialAvatarPos}/> }

          {avatar && (
            <div className="flex flex-row gap-6">
              <Stack />
              <Hand />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;