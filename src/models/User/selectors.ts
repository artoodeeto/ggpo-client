import { State } from '../../interfaces/stateInterface';

export const isUserAuthorized = (store: State) => store.user.isAuthenticated;
export const userInfo = (store: State) => store.user;
