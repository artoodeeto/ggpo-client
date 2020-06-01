import React, { useState, useEffect, FormEvent, FC } from 'react';
import * as userSelectors from 'store/user/Selectors';
import * as sessionSelectors from 'store/session/Selectors';
import * as sessionActions from 'store/session/Actions';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import { ILoginSignUpFormParams } from 'interfaces/session';

const onSubmitSignup = (
  event: FormEvent,
  email: string,
  username: string,
  password: string,
  onSignup: Function
): void => {
  event.preventDefault();

  const formSignup: ILoginSignUpFormParams = {
    username,
    email,
    password
  };

  onSignup(formSignup);
};

export const Signup: FC = (props: any) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, [username, email, password]);

  return (
    <div>
      <div>
        <form onSubmit={(e) => onSubmitSignup(e, email, username, password, props.onSignup)}>
          <label htmlFor="email">
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="youremail@address.com"
              type="text"
              name="email"
              id=""
              required
            />
          </label>

          <label htmlFor="username">
            Username:
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="user name"
              type="text"
              name="username"
              id=""
              required
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              type="text"
              name="password"
              id=""
              required
            />
          </label>

          <input type="submit" value="Sigup" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    sign: 'up',
    isAuthenticated: sessionSelectors.isUserAuthorized(state),
    userInfo: userSelectors.userInfo(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignup: (userSignup: ILoginSignUpFormParams) => dispatch(sessionActions.signMeUp(userSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
