import { lazy, FC } from 'react';
import SignupLoginContainer from 'components/SignupLogin/SignupLoginContainer';

export interface RouteConfigInterface {
  path: string;
  component: FC;
  isPrivate: boolean;
  exact: boolean;
  childRoutes?: RouteConfigInterface[];
}

/**
 * @description
 * add routes here.
 * when you add isPrivate, you can use the Private component to guard that route
 */
const routeConfig: RouteConfigInterface[] = [
  {
    path: '/',
    component: SignupLoginContainer,
    isPrivate: false,
    exact: true
  },
  {
    path: '/feed',
    component: lazy(() => import('components/Feed/Feed')),
    isPrivate: true,
    exact: false
  },
  {
    path: '/profile',
    component: lazy(() => import('components/Profile/Profile')),
    isPrivate: true,
    exact: false
  },
  {
    path: '/game_groups',
    component: lazy(() => import('components/GameGroup/GameGroupContainer')),
    isPrivate: true,
    exact: true,
    childRoutes: []
  },
  {
    path: '/game_groups/:id',
    component: lazy(() => import('components/GameItem/GameItemContainer')),
    isPrivate: true,
    exact: false
  },
  {
    path: '*',
    component: lazy(() => import('components/shared/NoRouteMatch/NoRouteMatch')),
    isPrivate: false,
    exact: false
  }
];

export default routeConfig;
