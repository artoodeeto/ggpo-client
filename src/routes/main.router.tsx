import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfigInterface } from './routes.config';
import Private from 'components/Private/Private';

type Props = {
  routeConf: RouteConfigInterface[];
};

const MainRoute: FC<Props> = (props) => {
  const { routeConf } = props;
  return (
    <Switch>
      {routeConf.map(({ path, component: C, exact, isPrivate, childRoutes }, i) => {
        return isPrivate ? (
          <Private key={i} path={path} component={C} exact={exact} />
        ) : (
          <Route key={i} path={path} render={() => <C />} exact={exact} />
        );
      })}
    </Switch>
  );
};

export default MainRoute;
