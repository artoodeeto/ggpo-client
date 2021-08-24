import * as sessionActions from '../Actions';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { SessionEnumTypes } from '../Types';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from 'lib/axios.instance';
import { userInitialState } from 'models/User/userInitialState';

jest.mock('../../../lib/axios.instance.ts');
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Session Action Test', () => {
  let store: MockStoreEnhanced<any>;
  beforeEach(() => {
    mockedAxios.post.mockReset();
    store = mockStore({ session: { ...sessionInitialState }, user: { ...userInitialState } });
  });

  describe('onSuccessLoginOrSignUp ACTION', () => {
    it('should set isAuthenticated and tokenExpirationTime', () => {
      expect(sessionActions.onSuccessLoginOrSignUp(111, 12)).toEqual({
        type: SessionEnumTypes.LOGIN_SIGNUP_SUCCESS,
        payload: {
          isAuthenticated: true,
          tokenExpirationTime: 111,
          isUserLoggingInOrSigningUp: false,
          errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
          hasErrorOnSigningUpOrLoggingIn: false,
          dateTimeStartedLoginOrSignupInMillisec: 12,
          expectedTokenExpirationInMillisec: 111 + 12
        }
      });
    });
  });

  describe('userLoggingInOrSigningUp ACTION', () => {
    it('should set isUserLoggingInOrSigningUp to true', () => {
      expect(sessionActions.userLoggingInOrSigningUp()).toEqual({
        type: SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP,
        payload: {
          isUserLoggingInOrSigningUp: true
        }
      });
    });
  });

  describe('logoutSession ACTION', () => {
    it('should be equal to initial state on logout', () => {
      expect(sessionActions.logoutSession()).toEqual({
        type: SessionEnumTypes.LOGOUT,
        payload: {
          ...sessionInitialState
        }
      });
    });
  });

  describe('userLoginOrSignupFailed ACTION', () => {
    it('should set state to failed properties on failed signup or login', () => {
      expect(
        sessionActions.userLoginOrSignupFailed({ errorType: 'Query Failed', error: { msg: '', errors: [] } })
      ).toEqual({
        type: SessionEnumTypes.SIGNUP_LOGIN_FAILED,
        payload: {
          isUserLoggingInOrSigningUp: false,
          hasErrorOnSigningUpOrLoggingIn: true,
          errorResponseOnSigupOrLogin: { errorType: 'Query Failed', error: { msg: '', errors: [] } }
        }
      });
    });
  });

  describe('SESSION async ACTION Test', () => {
    describe('On Signup', () => {
      it('should set session and user on signup success', async () => {
        mockedAxios.post.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              meta: {
                issueDate: '1',
                expToken: '1'
              },
              payload: {
                user: {
                  id: 1,
                  username: 'yousir1',
                  email: 'yousir1@gmail.com'
                },
                token: 'JWT TOKEN'
              }
            }
          })
        );

        return store
          .dispatch<any>(
            sessionActions.signMeUp({ username: 'yousir1', password: 'Password1!', email: 'yousir1@gmail.com' })
          )
          .then(() => {
            expect(store.getActions()).toEqual([
              { payload: { isUserLoggingInOrSigningUp: true }, type: 'IS_LOGGING_IN_OR_SIGNING_UP' },
              {
                payload: {
                  errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
                  hasErrorOnSigningUpOrLoggingIn: false,
                  isAuthenticated: true,
                  isUserLoggingInOrSigningUp: false,
                  tokenExpirationTime: 1,
                  dateTimeStartedLoginOrSignupInMillisec: 1,
                  expectedTokenExpirationInMillisec: 2
                },
                type: 'LOGIN_SIGNUP_SUCCESS'
              },
              {
                payload: { id: 1, username: 'yousir1', email: 'yousir1@gmail.com' },
                type: 'USER_INFO'
              }
            ]);
          });
      });

      it('should call error types on signup failed', async () => {
        mockedAxios.post.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store
          .dispatch<any>(
            sessionActions.signMeUp({ username: 'yousir1', password: 'Password1!', email: 'yousir1@gmail.com' })
          )
          .then(() => {
            expect(store.getActions()).toEqual([
              {
                payload: {
                  isUserLoggingInOrSigningUp: true
                },
                type: 'IS_LOGGING_IN_OR_SIGNING_UP'
              },
              {
                payload: {
                  isUserLoggingInOrSigningUp: false,
                  hasErrorOnSigningUpOrLoggingIn: true,
                  errorResponseOnSigupOrLogin: {}
                },
                type: 'SIGNUP_LOGIN_FAILED'
              }
            ]);
          });
      });
    });

    describe('On Login', () => {
      it('should set session and user on login success', async () => {
        mockedAxios.post.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              meta: {
                issueDate: '2',
                expToken: '2'
              },
              payload: {
                user: {
                  id: 1,
                  username: 'yousir1',
                  email: 'yousir1@gmail.com'
                },
                token: 'JWT TOKEN'
              }
            }
          })
        );

        return store
          .dispatch<any>(sessionActions.logMeIn({ password: 'Password1!', email: 'yousir1@gmail.com' }))
          .then(() => {
            expect(store.getActions()).toEqual([
              { payload: { isUserLoggingInOrSigningUp: true }, type: 'IS_LOGGING_IN_OR_SIGNING_UP' },
              {
                payload: {
                  errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
                  hasErrorOnSigningUpOrLoggingIn: false,
                  isAuthenticated: true,
                  isUserLoggingInOrSigningUp: false,
                  tokenExpirationTime: 2,
                  dateTimeStartedLoginOrSignupInMillisec: 2,
                  expectedTokenExpirationInMillisec: 4
                },
                type: 'LOGIN_SIGNUP_SUCCESS'
              },
              {
                payload: { id: 1, username: 'yousir1', email: 'yousir1@gmail.com' },
                type: 'USER_INFO'
              }
            ]);
          });
      });

      it('should set session and user on login success', async () => {
        mockedAxios.post.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store
          .dispatch<any>(sessionActions.logMeIn({ password: 'Password1!', email: 'yousir1@gmail.com' }))
          .then(() => {
            expect(store.getActions()).toEqual([
              { payload: { isUserLoggingInOrSigningUp: true }, type: 'IS_LOGGING_IN_OR_SIGNING_UP' },
              {
                payload: {
                  isUserLoggingInOrSigningUp: false,
                  hasErrorOnSigningUpOrLoggingIn: true,
                  errorResponseOnSigupOrLogin: {}
                },
                type: 'SIGNUP_LOGIN_FAILED'
              }
            ]);
          });
      });
    });
  });
});
