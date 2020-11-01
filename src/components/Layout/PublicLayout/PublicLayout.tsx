import React, { FC, Fragment } from 'react';

type PublicLayoutProps = {};

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return <Fragment>{children};</Fragment>;
};

export default PublicLayout;
