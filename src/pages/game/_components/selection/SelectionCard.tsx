import React from 'react';
import classnames from 'classnames';

interface CardProps {
  icon: string;
  header: string;
  desc: string;
  onClick?: Function;
}

const SelectionCard = (props: CardProps) => {
  
  return (
    <div
      className={classnames("selectionCard cursor-pointer flex flex-col items-center p-4 w-[200px] h-[300px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700")}
      onClick={() => props.onClick && props.onClick()}
    >
      <p>{props.header}</p>
      <img src={"/assets/" + props.icon + ".png"} />
      <p className="text-center">{props.desc}</p>
    </div>
  );
};

export default SelectionCard;