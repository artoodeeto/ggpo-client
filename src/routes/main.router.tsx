import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from 'components/Private/Private';
import PublicLayout from 'components/Layout/PublicLayout/PublicLayout';
import { RouteConfigInterface } from '../config/routes.config';

type MainRouteProps = {
  routeConf: RouteConfigInterface[];
};

const MainRoute: FC<MainRouteProps> = ({ routeConf }) => {
  return (
    <Switch>
      {routeConf.map(({ path, component: C, exact, isPrivate }, i) => {
        return isPrivate ? (
          <Private key={i} path={path} component={C} exact={exact} />
        ) : (
          <Route key={i} path={path} exact={exact}>
            <PublicLayout>
              <C />
            </PublicLayout>
          </Route>
        );
      })}
    </Switch>
  );
};

export default MainRoute;
