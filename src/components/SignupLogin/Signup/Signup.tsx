import React, { useState, FormEvent, FC } from 'react';
import { connect } from 'react-redux';
import { ILoginSignUpFormParams } from 'interfaces/session';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { signMeUp } from 'store/session/Actions';

type SignupProps = {
  onSignup: (userSignup: ILoginSignUpFormParams) => void;
};

const onSubmitSignup = (
  event: FormEvent,
  email: string,
  username: string,
  password: string,
  onSignup: (userSignup: ILoginSignUpFormParams) => void
): void => {
  event.preventDefault();

  const formSignup: ILoginSignUpFormParams = {
    username,
    email,
    password
  };

  onSignup(formSignup);
};

// TODO: Refactor this to have a shared element. this sucks bro

export const Signup: FC<SignupProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <div>
        <form onSubmit={(e) => onSubmitSignup(e, email, username, password, onSignup)}>
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
          {
            // currently not working. refactoring this to check if password is the same as conf password
          }
          <label htmlFor="conf_password">
            Confirm Password:
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="confirm password"
              type="text"
              name="conf_password"
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

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    onSignup: (userSignup: ILoginSignUpFormParams) => dispatch(signMeUp(userSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
