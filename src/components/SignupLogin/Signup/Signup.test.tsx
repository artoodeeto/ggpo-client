import React from 'react';
import SignupLoginForm from 'components/shared/SignupLoginForm/SignupLoginForm';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Signup } from './Signup';

describe('<Signup/>', () => {
  describe('Signup', () => {
    it('should show SignupLoginForm with props', () => {
      const wrapper = shallow(<Signup isLoggingInOrSigningUp={false} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();

      expect(wrapper.find(SignupLoginForm).exists()).toBeTrue();
      expect(wrapper.props()).toContainKeys(['toLoginOrSignup']);
    });
  });
});
