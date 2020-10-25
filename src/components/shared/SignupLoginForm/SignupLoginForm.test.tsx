/* eslint-disable @typescript-eslint/no-empty-function */
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { SignupLoginForm } from './SignupLoginForm';

describe('<SignupLoginForm/>', () => {
  describe('snapshot', () => {
    it('User loging in snapshot', () => {
      const wrapper = shallow(<SignupLoginForm toLoginOrSignup onLogin={() => {}} onSignup={() => {}} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('User signing up snapshot', () => {
      const wrapper = shallow(<SignupLoginForm toLoginOrSignup={false} onLogin={() => {}} onSignup={() => {}} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('form tag', () => {
    it('form should have class name of SignUpLoginForm', () => {
      const wrapper = shallow(<SignupLoginForm toLoginOrSignup={false} onLogin={() => {}} onSignup={() => {}} />);
      expect(wrapper.find('form')).toHaveClassName('SignUpLoginForm');
    });
  });

  describe('User signing up', () => {
    const wrapper = shallow(<SignupLoginForm toLoginOrSignup={false} onLogin={() => {}} onSignup={() => {}} />);
    const inputs = wrapper.find('input');
    it('should display 5 input tags', () => {
      expect(inputs.length).toEqual(5);
    });
    it('input type=button should have value of Signup', () => {
      expect(inputs.at(4).props().value).toBe('Signup');
    });
  });

  describe('User logging in', () => {
    const wrapper = shallow(<SignupLoginForm toLoginOrSignup onLogin={() => {}} onSignup={() => {}} />);
    const inputs = wrapper.find('input');
    it('should display 5 input tags', () => {
      expect(inputs.length).toEqual(3);
    });
    it('input type=button should have value of Login', () => {
      expect(inputs.at(2).props().value).toBe('Login');
    });
  });
});
