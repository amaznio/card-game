import React, { useEffect, useState } from 'react';
import { CARD_MAP, ICard } from '../../../models/config';
import Card from './Card';

const Stack = () => {

  return (
    <div className="stack flex items-center justify-center w-[150px] mr-8">
      <div className="card flex flex-col items-center p-6 w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      </div>
      <div className="card flex flex-col items-center p-6 w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      </div>
      <div className="card flex flex-col items-center p-6 w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      </div>
      <div className="card flex flex-col items-center p-6 w-[150px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      </div>
    </div>
  );
};

export default Stack;