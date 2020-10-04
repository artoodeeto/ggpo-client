import React, { FC } from 'react';
import GGIStyle from './GameGroupItem.module.scss';
import { Link } from 'react-router-dom';
import { IGameGroup } from 'interfaces/gameGroup';

type GameGroupItemProps = {
  gameGroup: IGameGroup;
};

const GameGroupItem: FC<GameGroupItemProps> = ({ gameGroup }) => {
  return (
    <Link to={(location) => `/game_groups/${gameGroup.id}`}>
      <li className={GGIStyle.list}>
        <p>{gameGroup.title}</p>
        <p>{gameGroup.description}</p>
      </li>
    </Link>
  );
};

export default GameGroupItem;
