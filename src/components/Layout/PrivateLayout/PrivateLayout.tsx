import React, { FC } from 'react';

type PrivateLayoutProps = {};

const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <section>
      <aside></aside>
      <main>{children}</main>
      <aside></aside>
    </section>
  );
};

export default PrivateLayout;
