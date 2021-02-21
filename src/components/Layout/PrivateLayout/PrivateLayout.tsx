import React, { FC } from 'react';
import PrivateHeader from '../../Headers/PrivateHeader/PrivateHeader';
import Style from './PrivateLayout.module.scss';

type PrivateLayoutProps = {};
/**
 *
 * @description this is a wrapper to a private route
 * see Private/Private.tsx
 */
const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <div>
      <PrivateHeader />
      <aside className={Style.LeftAside} />
      <main className={Style.Main}>{children}</main>
      <aside className={Style.RightAside} />
    </div>
  );
};

export default PrivateLayout;
