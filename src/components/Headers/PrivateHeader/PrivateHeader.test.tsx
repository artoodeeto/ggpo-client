import { mount, render, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PrivateHeader from './PrivateHeader';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * ! Not sure how to test this but wrapper rendering nothing
 */
describe.skip('<PrivateHeader/>', () => {
  const store = mockStore({
    session: {
      isAuthenticated: true,
      hasErrorOnSigningUpOrLoggingIn: false
    },
    user: {
      id: 1,
      username: 'new1',
      email: 'new1@gmail.com'
    }
  });
  describe('SNAPSHOT', () => {
    // it('container should match snapshots if user is log in', () => {
    // const history = createMemoryHistory();
    // history.push('/');
    // const wrapper = shallow(
    //   <Provider store={store}>
    //     <Router history={history}>
    //       <PrivateHeader />
    //     </Router>
    //   </Provider>
    // );
    // expect(shallowToJson(wrapper)).toMatchSnapshot();
    // });
  });

  describe('Simulate Click', () => {
    it('should click the logOutCurrentUser', () => {
      const spyBtn = jest.fn(() => true);
      const history = createMemoryHistory();
      history.push('/');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <PrivateHeader />
          </Router>
        </Provider>
      );
      // wrapper.debug();
      // console.log(wrapper.find('nav'));
    });
  });
});
