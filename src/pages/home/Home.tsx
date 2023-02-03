import React from 'react';
import GameProvider from '../../context/game.context';
import Game from '../game/Game';

const Home = () => {

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default Home;