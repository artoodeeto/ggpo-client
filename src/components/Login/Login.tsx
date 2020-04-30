import React, { FormEvent, useState } from 'react';
import { LoginSignUp } from 'interfaces/signupLogin';
import loginService from 'services/login';
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
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

export default Login;
