import userReducer from '../Reducers';
import { UserActionTypes } from '../Types';
import { userInitialState } from 'models/User/userInitialState';

describe('User Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(userReducer(undefined, {})).toEqual(userInitialState);
  });

  it('should set user info', () => {
    expect(
      userReducer(userInitialState, {
        type: UserActionTypes.USER_INFO,
        payload: {
          id: 1,
          username: 'the name duh',
          email: 'email@gmail.com'
        }
      })
    ).toEqual({
      id: 1,
      username: 'the name duh',
      email: 'email@gmail.com'
    });
  });

  it('should set user info', () => {
    expect(
      userReducer(
        {
          id: 1,
          username: 'the name duh',
          email: 'email@gmail.com'
        },
        {
          type: UserActionTypes.USER_LOGOUT,
          payload: {
            id: null,
            username: '',
            email: ''
          }
        }
      )
    ).toEqual({
      ...userInitialState
    });
  });
});
