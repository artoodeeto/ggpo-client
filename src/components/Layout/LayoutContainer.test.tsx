import { mount, shallow } from 'enzyme';
import React from 'react';
import { mountToJson, shallowToJson } from 'enzyme-to-json';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { LayoutContainer } from './LayoutContainer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<LayoutContainer/>', () => {
  describe.skip('SignupLoginContainer snap shot', () => {
    it('user is on login or signup page', () => {
      const store = mockStore({
        session: {
          isAuthenticated: false,
          hasErrorOnSigningUpOrLoggingIn: false
        }
      });
      const history = createMemoryHistory();
      history.push('/');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <LayoutContainer />
          </Router>
        </Provider>
      );
      // console.log(wrapper.find(LayoutContainer).dive().find(MainRoute));
      // expect(wrapper.find(LayoutContainer).dive().find(MainRoute)).toHaveLength(2);
      // expect(shallowToJson(wrapper)).toMatchSnapshot();
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on feed page', () => {
      const store = mockStore({
        session: {
          isAuthenticated: true,
          hasErrorOnSigningUpOrLoggingIn: false
        },
        feedPost: {
          isFetchingPosts: false,
          fetchingPostsFailed: false,
          posts: []
        },
        user: {
          id: 1,
          username: 'new1',
          email: 'new1@gmail.com'
        }
      });
      const history = createMemoryHistory();
      history.push('/feed');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <LayoutContainer />
          </Router>
        </Provider>
      );
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on profile page', () => {
      const store = mockStore({
        session: {
          isAuthenticated: true,
          hasErrorOnSigningUpOrLoggingIn: false
        },
        user: {
          id: 1,
          username: 'new1',
          email: 'new1@gmail.com'
        },
        userProfilePost: {
          posts: []
        }
      });
      const history = createMemoryHistory();
      history.push('/profile');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <LayoutContainer />
          </Router>
        </Provider>
      );
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on GameGroupContainer page', () => {
      const store = mockStore({
        session: {
          isAuthenticated: true,
          hasErrorOnSigningUpOrLoggingIn: false
        },
        user: {
          id: 1,
          username: 'new1',
          email: 'new1@gmail.com'
        },
        gameGroups: {
          gameGroups: [
            {
              id: 1,
              title: 'wa',
              description: 'wawaaw'
            }
          ]
        }
      });
      const history = createMemoryHistory();
      history.push('/game_groups');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <LayoutContainer />
          </Router>
        </Provider>
      );
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on GameItemContainer page', () => {
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
      const history = createMemoryHistory();
      history.push('/game_groups/1');
      const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <LayoutContainer />
          </Router>
        </Provider>
      );
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
});
