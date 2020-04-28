import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosInstance from 'lib/axios.instance';

const onSignup = async (event: any, email: string, username: string, password: string): Promise<void> => {
  event.preventDefault();
  try {
    // const res = await axios.post('/signup', {
    //   username,
    //   email,
    //   password
    // });

    // sample instance
    const res = await axiosInstance.post('/signup', {
      username,
      email,
      password
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  console.log(email, username, password);
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
              name="email"
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
