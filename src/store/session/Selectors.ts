import { IState } from 'interfaces/stateInterface';

export const showLoading = (store: IState) => store.session.isUserLoggingInOrSigningUp;
export const tokenExp = (store: IState) => store.session.tokenExpirationTime;
export const isUserAuthorized = (store: IState) => store.session.isAuthenticated;
export const authErrorsResponse = (store: IState) => store.session.errorResponseOnSigupOrLogin;
export const hasErrorOnSignupOrLogin = (store: IState) => store.session.hasErrorOnSigningUpOrLoggingIn;
