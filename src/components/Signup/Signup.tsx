import React from 'react';

const Signup = () => {
  return (
    <div>
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input placeholder="youremail@address.com" type="text" name="email" id="" required />
          </label>

          <label htmlFor="username">
            Username:
            <input placeholder="user name" type="text" name="username" id="" required />
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

export default Signup;
