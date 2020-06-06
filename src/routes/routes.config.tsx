import SignupLoginContainer from 'components/SignupLogin/SignupLogin';
import Feed from 'components/Feed/Feed';
import Profile from 'components/Profile/Profile';
import { FC } from 'react';

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
    component: Feed,
    isPrivate: true,
    exact: false
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: true,
    exact: false
  }
];

export default routes;
