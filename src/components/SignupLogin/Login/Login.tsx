import React, { FormEvent, useState, FC } from 'react';
import { connect } from 'react-redux';
// import LoginStyles from './App.module.scss';
import { ILoginSignUpFormParams } from 'interfaces/session';
import { showLoading } from 'store/session/Selectors';
import { logMeIn } from 'store/session/Actions';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

type LoginProps = {
  toShowLoading: boolean;
  onLogin: (userLogin: ILoginSignUpFormParams) => void;
};

const onSubmitLogin = (
  event: FormEvent,
  email: string,
  password: string,
  onLogin: (userLogin: ILoginSignUpFormParams) => void
): void => {
  event.preventDefault();

  const formSignup: ILoginSignUpFormParams = {
    email,
    password
  };
  onLogin(formSignup);
};

const Login: FC<LoginProps> = ({ toShowLoading, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <div>{toShowLoading ? 'LOGGING EN' : ''}</div>
        <form onSubmit={(e) => onSubmitLogin(e, email, password, onLogin)}>
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

const mapStateToProps = (state: RootState) => {
  return {
    toShowLoading: showLoading(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    onLogin: (userLogin: ILoginSignUpFormParams) => dispatch(logMeIn(userLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
