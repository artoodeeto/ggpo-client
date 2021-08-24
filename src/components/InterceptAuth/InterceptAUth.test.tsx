import { mount, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import InterceptAuth from './InterceptAuth';
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore([thunk]);

describe('<InterceptAuth/>', () => {
  describe('SNAPSHOT', () => {
    it.skip('container should match snapshots if user is signing up', () => {
      const store = mockStore({
        session: {
          isAuthenticated: true
        }
      });
      const wrapper = shallow(
        <Provider store={store}>
          <InterceptAuth />
        </Provider>
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('USER USING OAUTH', () => {
    it('Redirect to <Feed> if Authenticated', () => {
      const store = mockStore({
        session: {
          isAuthenticated: true
        }
      });
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <InterceptAuth />
          </MemoryRouter>
        </Provider>
      );

      const redirect = wrapper.find('Redirect');
      expect(redirect.exists()).toBeTrue();
      expect(redirect.props().to).toEqual('/feed');
    });

    it('Redirect to / if Unauthenticated', () => {
      const store = mockStore({
        session: {
          isAuthenticated: false
        }
      });
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <InterceptAuth />
          </MemoryRouter>
        </Provider>
      );

      const redirect = wrapper.find('Redirect');
      expect(redirect.exists()).toBeTrue();
      expect(redirect.props().to).toEqual('/');
    });
  });
});
