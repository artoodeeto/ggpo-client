import React, { FormEvent, useState, useEffect } from 'react';
import { LoginSignUp } from 'interfaces/signupLogin';
import loginService from 'services/login';
import { connect } from 'react-redux';
import * as userActions from './Actions';
import { isUserAuthorized } from './Selectors';
// import LoginStyles from './App.module.scss';

const onLogin = async (event: FormEvent, email: string, password: string): Promise<void> => {
  event.preventDefault();
  console.log(event);

  const formSignup: LoginSignUp = {
    email,
    password
  };

  const res = await loginService(formSignup);
  console.log(res);
};

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      <div>
        <h1>{props.isAuthenticated ? props.foo : 'nope'}</h1>
        <button onClick={props.onLogin}>test_login</button>
        <button onClick={props.onLogout}>test_logout</button>
        <form onSubmit={(e) => onLogin(e, email, password)}>
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

const mapStateToProps = (state: any) => {
  return {
    foo: 'yep',
    isAuthenticated: isUserAuthorized(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: () => dispatch(userActions.logMeIn()),
    onLogout: () => dispatch(userActions.logMeOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
