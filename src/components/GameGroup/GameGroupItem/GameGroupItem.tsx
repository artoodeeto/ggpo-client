import React from 'react';
import GGIStyle from './GameGroupItem.module.scss';
import { Link } from 'react-router-dom';

const GameGroupItem = (props: any) => {
  return (
    <Link to={(location) => `/game_groups/${props.id}`}>
      <li className={GGIStyle.list}>
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </li>
    </Link>
  );
};

export default GameGroupItem;
