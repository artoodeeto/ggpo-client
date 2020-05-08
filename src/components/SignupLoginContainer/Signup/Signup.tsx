import React, { useState, useEffect, FormEvent, FC } from 'react';
import { LoginSignUp } from '../../../interfaces/signupLogin';
import * as userSelectors from '../../../models/User/selectors';
import * as sessionActions from '../Store/Actions';
import { connect } from 'react-redux';
import { State } from '../../../interfaces/stateInterface';

const onSubmitSignup = (
  event: FormEvent,
  email: string,
  username: string,
  password: string,
  onSignup: Function
): void => {
  event.preventDefault();

  const formSignup: LoginSignUp = {
    username,
    email,
    password
  };

  onSignup(formSignup);
};

const Signup: FC = (props: any) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // console.log({ email, username, password });
  });

  return (
    <div>
      <div>
        <h1>{props.isAuthenticated ? props.foo : 'nope'}</h1>
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

const mapStateToProps = (state: State) => {
  return {
    sign: 'up',
    isAuthenticated: userSelectors.isUserAuthorized(state),
    userInfo: userSelectors.userInfo(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignup: (userSignup: LoginSignUp) => dispatch(sessionActions.signMeUp(userSignup)),
    onLogout: () => dispatch(sessionActions.logMeOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
