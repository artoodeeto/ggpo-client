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
      <aside className={Style.LeftAside}></aside>
      <main>{children}</main>
      <aside className={Style.RightAside}></aside>
    </div>
  );
};

export default PrivateLayout;
