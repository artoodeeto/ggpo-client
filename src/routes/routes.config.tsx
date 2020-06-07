import { lazy, FC } from 'react';
import SignupLoginContainer from 'components/SignupLogin/SignupLogin';

export interface RouteConfigInterface {
  path: string;
  component: FC;
  isPrivate: boolean;
  exact: boolean;
}

/**
 * @description
 * add routes here.
 * when you add isPrivate, you can use the Private component to guard that route
 */
const routes: RouteConfigInterface[] = [
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
  }
];

export default routes;
