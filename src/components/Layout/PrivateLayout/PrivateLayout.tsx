import React, { FC } from 'react';
import PrivateHeader from '../Headers/PrivateHeader/PrivateHeader';

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
      <section>
        <aside></aside>
        <main>{children}</main>
        <aside></aside>
      </section>
    </div>
  );
};

export default PrivateLayout;
