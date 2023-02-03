import { createContext, useState } from 'react';
import { Avatar } from '../models/config';

interface IGameContext {
  avatar?: Avatar | null;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar | null>>;
}

export const GameContext = createContext<IGameContext>({setAvatar: () => {}});

interface Props {
  children: any;
}

const GameProvider = ({children}: Props) => {
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  return (
    <GameContext.Provider value={{avatar: avatar, setAvatar}}>
      {children}
    </GameContext.Provider>
  )
};

export default GameProvider;