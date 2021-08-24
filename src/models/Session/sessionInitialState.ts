import { ISession } from 'interfaces/session';

/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/session.ts}
 */
export const sessionInitialState: ISession = {
  isAuthenticated: false,
  isUserLoggingInOrSigningUp: false,
  hasErrorOnSigningUpOrLoggingIn: false,
  errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
  tokenExpirationTime: 0,
  dateTimeStartedLoginOrSignupInMillisec: 0,
  expectedTokenExpirationInMillisec: 0
};
