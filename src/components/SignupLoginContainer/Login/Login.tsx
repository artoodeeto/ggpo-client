import React, { FormEvent, useState, useEffect, FC } from 'react';
import { LoginSignUp } from 'interfaces/signupLogin';
import { connect } from 'react-redux';
import * as userActions from '../Store/Actions';
import * as userSelectors from '../../../models/User/selectors';
// import LoginStyles from './App.module.scss';
import { State } from '../../../interfaces/stateInterface';
import { useHistory } from 'react-router-dom';

const onSubmitLogin = (event: FormEvent, email: string, password: string, onLogin: Function): void => {
  event.preventDefault();

  const formSignup: LoginSignUp = {
    email,
    password
  };
  setTimeout(() => onLogin(formSignup), 10000);
};

const Login: FC = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log('pp');
    if (props.isAuthenticated) {
      setLoading(false);
      history.push('/feed');
    }
  });

  return (
    <div>
      <div>
        <h1>{props.isAuthenticated ? props.foo : 'nope'}</h1>
        <div>{isLoading ? 'LOADING...' : ''}</div>
        <button onClick={props.onLogout}>LOGOUT</button>
        <form
          onSubmit={(e) => {
            setLoading(true);
            onSubmitLogin(e, email, password, props.onLogin);
          }}
        >
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
    foo: 'yep',
    isAuthenticated: userSelectors.isUserAuthorized(state),
    userInfo: userSelectors.userInfo(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onLogin: (userLogin: LoginSignUp) => dispatch(userActions.logMeIn(userLogin)),
    onLogout: () => dispatch(userActions.logMeOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
