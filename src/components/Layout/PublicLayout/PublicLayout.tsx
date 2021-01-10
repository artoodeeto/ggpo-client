import React, { FC } from 'react';
import PublicHeader from '../../Headers/PublicHeader/PublicHeader';

type PublicLayoutProps = {};

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
};

export default PublicLayout;
