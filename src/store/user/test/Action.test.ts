import * as userActions from '../Actions';
import { UserEnumTypes } from '../Types';
import { userInitialState } from 'models/User/userInitialState';

describe('Session Action Test', () => {
  describe('onSuccessLoginOrSignUp ACTION', () => {
    it('should be equal', () => {
      const u = {
        id: 1,
        email: 'theEmail@yahoo.com',
        username: 'yousirnem'
      };
      expect(userActions.setupUserOnSuccessLoginORSignup(u)).toEqual({
        type: UserEnumTypes.USER_INFO,
        payload: {
          ...u
        }
      });
    });
  });

  describe('logoutUser ACTION', () => {
    it('should return to initial state after user logsout', () => {
      expect(userActions.logoutUser()).toEqual({
        type: UserEnumTypes.USER_LOGOUT,
        payload: {
          ...userInitialState
        }
      });
    });
  });
});
