import axios from 'axios';
import Cookies from 'js-cookie';
import * as autoLogoutAfterTokenExpire from 'helper/autoLogoutAfterTokenExp';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { userInitialState } from 'models/User/userInitialState';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UserEnumTypes } from 'store/user/Types';
import * as sessionActions from '../Actions';
import { SessionEnumTypes } from '../Types';

jest.mock('axios');
const mockedAxe = axios as jest.Mocked<typeof axios>;
jest.mock('js-cookie');
const mockedCookies = Cookies as jest.Mocked<typeof Cookies>;

const mockStore = configureMockStore([thunk]);

describe('OAuth Action test', () => {
  let store: MockStoreEnhanced<any>;
  beforeEach(() => {
    mockedAxe.get.mockReset();
    mockedCookies.remove.mockReset();
    store = mockStore({ session: { ...sessionInitialState }, user: { ...userInitialState } });
  });

  describe('OAuth', () => {
    describe('getUserDataFromOAuth', () => {
      it('should set session and user on login success', async () => {
        mockedAxe.get.mockImplementationOnce(() =>
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
                }
              }
            }
          })
        );

        const autoLogout = jest.spyOn(autoLogoutAfterTokenExpire, 'autoLogoutAfterTokenExpire');

        return store.dispatch<any>(sessionActions.getUserDataFromOAuth()).then(() => {
          expect(autoLogout).toHaveBeenCalledTimes(1);
          /**
           * FIXME: type error on test
           * Expected: [Function anonymous], 1
           * Received: [Function dispatch], 1
           */
          // expect(autoLogout).toHaveBeenCalledWith(store.dispatch as Dispatch<any>, 1);

          expect(store.getActions()).toEqual([
            { payload: { isUserLoggingInOrSigningUp: true }, type: SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP },
            {
              payload: {
                isAuthenticated: true,
                tokenExpirationTime: 1,
                isUserLoggingInOrSigningUp: false,
                errorResponseOnSigupOrLogin: { errorType: '', error: { msg: '', errors: [] } },
                hasErrorOnSigningUpOrLoggingIn: false,
                dateTimeStartedLoginOrSignupInMillisec: 1,
                expectedTokenExpirationInMillisec: 1 + 1
              },
              type: SessionEnumTypes.LOGIN_SIGNUP_SUCCESS
            },
            {
              type: UserEnumTypes.USER_INFO,
              payload: {
                id: 1,
                username: 'yousir1',
                email: 'yousir1@gmail.com'
              }
            }
          ]);
        });
      });

      // ! ====================== REJECT TEST ======================
      it('should set session and user to initial state if getUserDataFromOAuth failed', async () => {
        mockedAxe.get.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store.dispatch<any>(sessionActions.getUserDataFromOAuth()).then(() => {
          expect(mockedCookies.remove).toHaveBeenCalledTimes(1);
          expect(mockedCookies.remove).toHaveBeenCalledWith(process.env.REACT_APP_COOKIE_NAME as string);
          expect(store.getActions()).toEqual([
            { payload: { isUserLoggingInOrSigningUp: true }, type: SessionEnumTypes.IS_LOGGING_IN_OR_SIGNING_UP },
            { payload: { ...sessionInitialState }, type: SessionEnumTypes.LOGOUT },
            { payload: { ...userInitialState }, type: UserEnumTypes.USER_LOGOUT }
          ]);
        });
      });
    });

    describe('logMeOut', () => {
      it('should set session and user on logout success', async () => {
        mockedAxe.get.mockImplementationOnce(() =>
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
                }
              }
            }
          })
        );

        return store.dispatch<any>(sessionActions.logMeOut()).then(() => {
          expect(store.getActions()).toEqual([
            { payload: { ...sessionInitialState }, type: SessionEnumTypes.LOGOUT },
            {
              payload: {
                ...userInitialState
              },
              type: UserEnumTypes.USER_LOGOUT
            }
          ]);
        });
      });

      // ! ====================== REJECT TEST ======================
      it('should set session and user to initial state if failed to logout', async () => {
        mockedAxe.get.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store.dispatch<any>(sessionActions.logMeOut()).then(() => {
          expect(mockedCookies.remove).toHaveBeenCalledTimes(1);
          expect(mockedCookies.remove).toHaveBeenCalledWith(process.env.REACT_APP_COOKIE_NAME as string);
          expect(store.getActions()).toEqual([
            { payload: { ...sessionInitialState }, type: SessionEnumTypes.LOGOUT },
            { payload: { ...userInitialState }, type: UserEnumTypes.USER_LOGOUT }
          ]);
        });
      });
    });
  });
});
