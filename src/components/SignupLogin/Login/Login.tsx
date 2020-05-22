import React, { FormEvent, useState, useEffect, FC } from 'react';
import { connect } from 'react-redux';
import * as sessionActions from 'store/session/Actions';
import * as userSelectors from 'store/user/Selectors';
import * as sessionSelectors from 'store/session/Selectors';
// import LoginStyles from './App.module.scss';
import { State } from 'interfaces/stateInterface';
import { LoginSignUpFormParams } from 'interfaces/session';

const onSubmitLogin = (event: FormEvent, email: string, password: string, onLogin: Function): void => {
  event.preventDefault();

  const formSignup: LoginSignUpFormParams = {
    email,
    password
  };
  onLogin(formSignup);
};

const Login: FC = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('login');
  });

  return (
    <div>
      <div>
        <div>{props.toShowLoading ? 'LOGGING EN' : ''}</div>
        <form onSubmit={(e) => onSubmitLogin(e, email, password, props.onLogin)}>
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

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    isAuthenticated: sessionSelectors.isUserAuthorized(state),
    userInfo: userSelectors.userInfo(state),
    toShowLoading: sessionSelectors.showLoading(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onLogin: (userLogin: LoginSignUpFormParams) => dispatch(sessionActions.logMeIn(userLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
