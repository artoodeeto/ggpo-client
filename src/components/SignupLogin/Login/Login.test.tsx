import React from 'react';
import SignupLoginForm from 'components/shared/SignupLoginForm/SignupLoginForm';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Login } from './Login';

describe('<Login/>', () => {
  describe('Login', () => {
    it('should show SignupLoginForm with props', () => {
      const wrapper = shallow(<Login isLoggingInOrSigningUp={false} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();

      expect(wrapper.find(SignupLoginForm).exists()).toBeTrue();
      expect(wrapper.props()).toContainKeys(['toLoginOrSignup']);
    });
  });
});
