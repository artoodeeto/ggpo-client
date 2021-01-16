import React, { FC } from 'react';
import styles from './PublicHeader.module.scss';

type PublicHeaderProps = {};

const PublicHeader: FC<PublicHeaderProps> = () => {
  return (
    <nav className={styles.NavContainer}>
      <h1>GOOD GAME PEACE OUT!</h1>
    </nav>
  );
};

export default PublicHeader;
