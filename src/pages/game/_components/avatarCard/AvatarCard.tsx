import { motion, AnimatePresence } from 'framer-motion';
import react, { useContext } from 'react'
import { GameContext } from '../../../../context/game.context';
import { Position } from '../../../../models/config';

interface AvatarCardProps {
  initialAvatarPos: Position;
}

const AvatarCard = (props: AvatarCardProps) => {
  const {avatar, stats} = useContext(GameContext);

  return (
    <AnimatePresence>
      {avatar && (
        <motion.div
          key={"AvatarCard"}
          initial={{x: props.initialAvatarPos.x, y: props.initialAvatarPos.y}}
          animate={{x: 16, y: 16}}
          transition={{ease: 'easeIn', duration: 1}}
          className="absolute"
        >
          <div
            className="card cursor-pointer flex flex-col p-4 w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            onClick={() => {}}
          >
            <div className='flex flex-col items-center'>
              <p>{avatar.name}</p>
              <img src={"/assets/" + avatar.path + ".png"} />
            </div>
            <motion.div
              initial={{width: '100%' }}
              animate={{width:  stats.hp+"%"}}
              className='mt-4 h-1 bg-red-600 rounded-md'/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvatarCard;