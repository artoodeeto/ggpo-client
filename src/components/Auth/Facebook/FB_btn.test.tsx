import { shallow } from 'enzyme';
import React from 'react';
import { FbBtn } from './FB_btn';

describe('<FbBtn/>', () => {
  describe('USER USING OAUTH', () => {
    it('should show <FbBtn/> component', () => {
      const wrapper = shallow(<FbBtn />);
      expect(wrapper.html()).toEqual(
        `<a class="loginBtn loginBtn--facebook" href="${process.env.REACT_APP_BASE_API_URL}/auth/facebook">Login with Facebook</a>`
      );

      const anchorTag = wrapper.find('a');
      expect(anchorTag.exists()).toBeTrue();
    });
  });
});
