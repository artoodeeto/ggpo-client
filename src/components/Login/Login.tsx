import React from 'react';
// import LoginStyles from './App.module.scss';

function testSubmit(event: any) {
  event.preventDefault();
  console.log(event);
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={testSubmit}>
            <label htmlFor="email">
              Username:
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
  }
}

export default Login;
