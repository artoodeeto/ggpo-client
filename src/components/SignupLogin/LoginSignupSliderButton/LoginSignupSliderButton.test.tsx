/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { LoginSignupSliderButton } from './LoginSignupSliderButton';

describe('<LoginSignupSliderButton/>', () => {
  describe('snapshot', () => {
    it('', () => {
      const wrapper = shallow(<LoginSignupSliderButton toShow={(val) => {}} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('button tags', () => {
    const wrapper = shallow(<LoginSignupSliderButton toShow={(val) => {}} />);
    it('should count 2 buttons', () => {
      expect(wrapper.find('button').length).toBe(2);
    });
    it('should have class name of sliderBtn', () => {
      expect(wrapper.find('.SliderBtn')).toHaveClassName('SliderBtn');
      expect(wrapper.find('.SliderBtn').length).toBe(2);
    });
    it('should have text', () => {
      expect(wrapper.find('button').at(0).text()).toEqual('Already a User?');
      expect(wrapper.find('button').at(1).text()).toEqual('New User');
    });
    it('onClick should have been called', () => {
      const spyFunc = jest.fn(() => true);
      const cont = shallow(<LoginSignupSliderButton toShow={spyFunc} />);
      cont.find('button').at(0).simulate('click');
      cont.find('button').at(1).simulate('click');
      expect(spyFunc).toHaveBeenCalledTimes(2);
      spyFunc.mockRestore();
    });
  });
});
