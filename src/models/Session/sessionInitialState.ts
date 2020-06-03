export const sessionInitialState = {
  isAuthenticated: false,
  isUserLoggingInOrSigningUp: false,
  hasErrorOnSigningUpOrLoggingIn: false,
  errorResponseOnSigupOrLogin: {},
  tokenExpirationTime: 0,
  dateTimeStartedLoginOrSignupInMillisec: 0,
  expectedTokenExpirationInMillisec: 0
};
