import React, { useContext, useEffect, useState } from 'react';
import { Avatar } from '../../models/config';
import Hand from './_components/Hand';
import Selection from './_components/selection/Selection';
import { GameContext } from '../../context/game.context';
import Stack from './_components/Stack';

const Game = () => {
  const { avatar } = useContext(GameContext);

  // useEffect(() => {
  //   const counters = document.querySelectorAll('.counter');
  //   counters.forEach((ele) => {
  //     let start = 0;
  //     const end = parseInt(ele.getAttribute("data-counter") || '0');
  //     const timePerAnim = 30;
  //     const jump = Math.floor(end / timePerAnim);
  //     console.time("counter"+end);
  //     const timeStart = Date.now();
  //     let interval = setInterval(() => {
  //       start += jump;
  //       ele.textContent = start.toString();
  //       if (start === end || (end - start <= 0)) {
  //         clearInterval(interval);
  //         console.timeEnd("counter"+end);
  //         const timeEnd = Date.now();
  //         console.log("Duration:", timeEnd - timeStart +"ms");
  //         start = end;
  //       }

  //     }, timePerAnim);
  //   })
  // }, []);


  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-col items-center mt-4">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 ">
          Welcome to an RPG card game
        </h1>
        {/* <div className="counter card flex flex-col items-center justify-center text-7xl w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-counter="2099">
          0
        </div>
        <div className="counter card flex flex-col items-center justify-center text-7xl w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-counter="400">
          0
        </div>
        <div className="counter card flex flex-col items-center justify-center text-7xl w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-counter="167">
          0
        </div>
        <div className="counter card flex flex-col items-center justify-center text-7xl w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          data-counter="188">
          0
        </div> */}
      </div>
      <div className="canvas flex justify-center items-center w-full h-full relative">
        <div className="w-full h-full flex justify-center items-center">
          {!avatar && <Selection /> }

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