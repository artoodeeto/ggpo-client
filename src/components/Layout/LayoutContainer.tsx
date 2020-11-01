import React, { FC, Suspense } from 'react';
import MainRoute from 'routes/main.router';
import Header from 'components/Layout/Headers/HeadersContainer';
import routeConfig from '../../config/routes.config';

type LayoutContainerProps = {};

export const LayoutContainer: FC<LayoutContainerProps> = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>create loading here</div>}>
        <MainRoute routeConf={routeConfig} />
      </Suspense>

      <section>
        <footer>test test</footer>
      </section>
    </div>
  );
};
