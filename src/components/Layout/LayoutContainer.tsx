import React, { FC } from 'react';

type LayoutContainerProps = {};

export const LayoutContainer: FC<LayoutContainerProps> = () => {
  return (
    <div>
      <nav></nav>
      <div>
        <aside></aside>
        <main></main>
        <aside></aside>
      </div>
      <footer></footer>
    </div>
  );
};
