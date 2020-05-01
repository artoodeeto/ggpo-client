import React, { Component, Fragment } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { Route, NavLink, Switch } from 'react-router-dom';

// background here should show some video, maybe the TI championship games
class SignupLoginContainer extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact render={() => <h1>HOME</h1>} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default SignupLoginContainer;
