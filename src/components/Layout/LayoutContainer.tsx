import React, { FC, Suspense } from 'react';
import MainRoute from 'routes/main.router';
import routeConfig from '../../config/routes.config';

type LayoutContainerProps = {};

export const LayoutContainer: FC<LayoutContainerProps> = () => {
  return (
    <div>
      <Suspense fallback={<div>create loading here</div>}>
        <MainRoute routeConf={routeConfig} />
      </Suspense>

      <section>
        <footer>I am the FOOTER</footer>
      </section>
    </div>
  );
};
