import SignupLoginContainer from 'components/SignupLoginContainer/SignupLogin';
import Feed from 'components/Feed/Feed';
import Profile from 'components/Profile/Profile';

const routes = [
  {
    path: '/',
    component: SignupLoginContainer,
    isPrivate: false
  },
  {
    path: '/feed',
    component: Feed,
    isPrivate: true
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: true
  }
];

export default routes;
