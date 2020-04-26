import React from 'react';
// import LoginStyles from './App.module.scss';

function testSubmit(event: any) {
  event.preventDefault();
  console.log(event);
}

const Login = () => {
  return (
    <div>
      <div>
        <form onSubmit={testSubmit}>
          <label htmlFor="email">
            Email:
            <input placeholder="youremail@address.com" type="text" name="email" id="" required />
          </label>

          <label htmlFor="password">
            Password:
            <input placeholder="password" type="text" name="email" id="" required />
          </label>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
