import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

type NoMatchBtnProps = {};

const NoMatch: FC<NoMatchBtnProps> = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatch;
