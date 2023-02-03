import { createContext, useState } from 'react';
import { Avatar } from '../models/config';

interface IGameContext {
  avatar?: Avatar | null;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar | null>>;
  stats: any;
  setStats: React.Dispatch<React.SetStateAction<any>>;
}

export const GameContext = createContext<IGameContext>({
  setAvatar: () => {},
  setStats: () => {},
  stats: {}
});

interface Props {
  children: any;
}

const GameProvider = ({children}: Props) => {
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [stats, setStats] = useState({hp: 100});

  return (
    <GameContext.Provider value={{avatar: avatar, setAvatar, stats, setStats}}>
      {children}
    </GameContext.Provider>
  )
};

export default GameProvider;