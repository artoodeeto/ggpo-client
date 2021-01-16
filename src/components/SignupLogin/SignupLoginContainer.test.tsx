/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from 'components/shared/ErrorMessage/ErrorMsg';
import { Redirect } from 'react-router-dom';
import { shallowToJson } from 'enzyme-to-json';
import { SignupLoginContainer } from './SignupLoginContainer';
import { Login } from './Login/Login';
import { Signup } from './Signup/Signup';
import { LoginSignupSliderButton } from './LoginSignupSliderButton/LoginSignupSliderButton';

describe('<SignupLoginContainer/>', () => {
  describe('SignupLoginContainer', () => {
    it('container should match snapshots if user is logging in', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
      // expect(wrapper.instance().props).toContainKeys(['hasErrors', 'isAuthenticated']);
      // expect(wrapper.state()).toContainKey('toLoginOrSignup');
    });

    it('container should match snapshots if user is signing up', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      wrapper.setState({
        toLoginOrSignup: false
      });
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('SignupLoginContainer should contain props and state', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      // expect(wrapper.instance().props).toContainKeys(['hasErrors', 'isAuthenticated']);
      // expect(wrapper.state()).toContainKey('toLoginOrSignup');
    });

    it('should have classnames', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      expect(wrapper.find('.SignupLoginContainer')).toHaveClassName('SignupLoginContainer');
      // expect(wrapper.find('.SignupLoginContainer__SliderBtnContainer')).toHaveClassName(
      //   'SignupLoginContainer__SliderBtnContainer'
      // );
      // expect(wrapper.find('.SignupLoginContainer__Form_Container')).toHaveClassName(
      //   'SignupLoginContainer__Form_Container'
      // );
    });
  });

  describe('USER have errors logging in', () => {
    it('should show ErrorMsg component', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors isAuthenticated={false} />);
      const errComp = wrapper.find(ErrorMsg);
      expect(errComp.exists()).toBeTrue();
    });
  });

  describe('USER Redirected if already login', () => {
    it('should show Redirect component with  "to" as props and "/feed" as value', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated />);
      const redirect = wrapper.find(Redirect);
      expect(redirect.exists()).toBeTrue();
      expect(redirect.props().to).toEqual('/feed');
    });
  });

  describe('Slider button should show all the time', () => {
    it('shows slider button component', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      // const sliderBtn = wrapper.find(LoginSignupSliderButton);
      // expect(sliderBtn.props()).toContainKey('toShow');
      // expect(sliderBtn.exists()).toBeTrue();
    });
  });

  describe('USER SIGNING UP', () => {
    it('should show Signup component', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      // const sliderBtn = wrapper.find(LoginSignupSliderButton);
      // const spy = jest.spyOn(SignupLoginContainer.prototype, 'toLogInOrSignUp');

      // sliderBtn.prop('toShow')(false);
      // sliderBtn.prop('toShow')(false);
      // expect(spy).toHaveBeenCalledTimes(2);
      const signupComp = wrapper.find(Signup);
      expect(signupComp.exists()).toBeTrue();
      expect(signupComp.props()).toContainKeys(['isLoggingInOrSigningUp']);
      // spy.mockRestore();
    });
  });

  describe('USER LOGGING IN', () => {
    it('should show Login component', () => {
      const wrapper = shallow(<SignupLoginContainer hasErrors={false} isAuthenticated={false} />);
      const loginComp = wrapper.find(Login);
      expect(loginComp.props()).toContainKeys(['isLoggingInOrSigningUp']);
      expect(loginComp.exists()).toBeTrue();
    });
  });
});
