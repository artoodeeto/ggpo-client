import React, { useState, useEffect, FormEvent } from 'react';
import axiosInstance from 'lib/axios.instance';
import { LoginSignUp } from 'interfaces/signupLogin';
import signUpService from 'services/signup';

const onSignup = async (event: FormEvent, email: string, username: string, password: string): Promise<void> => {
  event.preventDefault();

  const formSignup: LoginSignUp = {
    username,
    email,
    password
  };

  const res = await signUpService(formSignup);
  console.log(res);
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log({ email, username, password });
  });

  return (
    <div>
      <div>
        <form onSubmit={(e) => onSignup(e, email, username, password)}>
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

export default Signup;
