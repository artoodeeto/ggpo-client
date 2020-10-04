import sessionReducer from '../Reducers';
import { SessionEnumTypes } from '../Types';
import { sessionInitialState } from 'models/Session/sessionInitialState';

describe('Session Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(sessionReducer(undefined, {})).toEqual(sessionInitialState);
  });

  it('it should set the isUserLoggingInorSigningUp to true', () => {
    expect(
      sessionReducer(
        {
          ...sessionInitialState,
          isUserLoggingInOrSigningUp: false,
          errorResponseOnSigupOrLogin: { errorType: 'lawd', errorMessage: { oh: 'lawd' } }
        },
        {
          type: SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP,
          payload: {
            isUserLoggingInOrSigningUp: true
          }
        }
      )
    ).toEqual({
      isUserLoggingInOrSigningUp: true,
      errorResponseOnSigupOrLogin: { errorType: 'lawd', errorMessage: { oh: 'lawd' } },
      hasErrorOnSigningUpOrLoggingIn: false,
      isAuthenticated: false,
      tokenExpirationTime: 0,
      dateTimeStartedLoginOrSignupInMillisec: 0,
      expectedTokenExpirationInMillisec: 0
    });
  });

  it('should set login or signup success state', () => {
    expect(
      sessionReducer(
        {
          isAuthenticated: false,
          isUserLoggingInOrSigningUp: true,
          hasErrorOnSigningUpOrLoggingIn: false,
          errorResponseOnSigupOrLogin: { errorType: '', errorMessage: {} },
          tokenExpirationTime: 0,
          dateTimeStartedLoginOrSignupInMillisec: 0,
          expectedTokenExpirationInMillisec: 0
        },
        {
          type: SessionEnumTypes.LOGIN_SIGNUP_SUCCESS,
          payload: {
            isAuthenticated: true,
            tokenExpirationTime: 1000,
            isUserLoggingInOrSigningUp: false,
            errorResponseOnSigupOrLogin: {},
            hasErrorOnSigningUpOrLoggingIn: false
          }
        }
      )
    ).toEqual({
      isAuthenticated: true,
      tokenExpirationTime: 1000,
      isUserLoggingInOrSigningUp: false,
      errorResponseOnSigupOrLogin: {},
      hasErrorOnSigningUpOrLoggingIn: false,
      dateTimeStartedLoginOrSignupInMillisec: 0,
      expectedTokenExpirationInMillisec: 0
    });
  });

  it('should set to initial state after logout', () => {
    expect(
      sessionReducer(
        {
          isAuthenticated: true,
          isUserLoggingInOrSigningUp: false,
          hasErrorOnSigningUpOrLoggingIn: false,
          errorResponseOnSigupOrLogin: { errorType: '', errorMessage: {} },
          tokenExpirationTime: 1000,
          dateTimeStartedLoginOrSignupInMillisec: 10,
          expectedTokenExpirationInMillisec: 1010
        },
        {
          type: SessionEnumTypes.LOGOUT,
          payload: {
            ...sessionInitialState
          }
        }
      )
    ).toEqual({
      errorResponseOnSigupOrLogin: { errorType: '', errorMessage: {} },
      hasErrorOnSigningUpOrLoggingIn: false,
      isAuthenticated: false,
      isUserLoggingInOrSigningUp: false,
      tokenExpirationTime: 0,
      dateTimeStartedLoginOrSignupInMillisec: 0,
      expectedTokenExpirationInMillisec: 0
    });
  });

  it('should set state to failed response', () => {
    const err = { errorType: 'ERROR_TYPE', errorMessage: { misMatch: 'Password Incorrect' } };
    expect(
      sessionReducer(
        { ...sessionInitialState, errorResponseOnSigupOrLogin: { ...err } },
        {
          type: SessionEnumTypes.SIGNUP_LOGIN_FAILED,
          payload: {
            isUserLoggingInOrSigningUp: false,
            hasErrorOnSigningUpOrLoggingIn: true,
            errorResponseOnSigupOrLogin: err
          }
        }
      )
    ).toEqual({
      errorResponseOnSigupOrLogin: err,
      hasErrorOnSigningUpOrLoggingIn: true,
      isAuthenticated: false,
      isUserLoggingInOrSigningUp: false,
      tokenExpirationTime: 0,
      dateTimeStartedLoginOrSignupInMillisec: 0,
      expectedTokenExpirationInMillisec: 0
    });
  });
});
