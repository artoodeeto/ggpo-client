import { State } from 'interfaces/stateInterface';

export const showLoading = (store: State) => store.session.isUserLoggingInOrSigningUp;
export const tokenExp = (store: State) => store.session.tokenExpirationTime;
export const isUserAuthorized = (store: State) => store.session.isAuthenticated;
export const authErrorsResponse = (store: State) => store.session.errorResponseOnSigupOrLogin;
export const hasErrorOnSignupOrLogin = (store: State) => store.session.hasErrorOnSigningUpOrLoggingIn;
