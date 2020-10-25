import React, { FC, FormEvent, useState } from 'react';
import { ILoginSignUpFormParams } from 'interfaces/session';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { logMeIn, signMeUp } from 'store/session/Actions';
import styles from './SignupLoginForm.module.scss';

const handleSubmit = (
  event: FormEvent,
  params: ILoginSignUpFormParams,
  signupOrLoginAPI: (userSignup: ILoginSignUpFormParams) => void
): void => {
  event.preventDefault();

  signupOrLoginAPI(params);
};

type SignupLoginFormProps = {
  toLoginOrSignup: boolean;
  onLogin: (userLogin: ILoginSignUpFormParams) => void;
  onSignup: (userSignup: ILoginSignUpFormParams) => void;
};

// TODO: change this as array of objects so we wont have render each input. we'll replace this with filter.
/**
 * TODO: sample object
 * [{
 *  onchange: fn,
 *  value,
 *  placeHolder,
 * type
 * }]
 */
export const SignupLoginForm: FC<SignupLoginFormProps> = ({ toLoginOrSignup, onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const params = {
    email,
    username,
    password
  };

  return (
    <form
      className={styles.SignUpLoginForm}
      onSubmit={(e) => handleSubmit(e, params, toLoginOrSignup ? onLogin : onSignup)}
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email_address@gmail.com"
        type="text"
        name="email"
        id=""
        required
      />

      {toLoginOrSignup ? null : (
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="user name"
          type="text"
          name="username"
          id=""
          required
        />
      )}

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="password"
        type="text"
        name="password"
        id=""
        required
      />

      {toLoginOrSignup ? null : (
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="confirm password"
          type="text"
          name="conf_password"
          id=""
          required
        />
      )}

      <input type="submit" value={toLoginOrSignup ? 'Login' : 'Signup'} />
    </form>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    onSignup: (userSignup: ILoginSignUpFormParams) => dispatch(signMeUp(userSignup)),
    onLogin: (userLogin: ILoginSignUpFormParams) => dispatch(logMeIn(userLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupLoginForm);
