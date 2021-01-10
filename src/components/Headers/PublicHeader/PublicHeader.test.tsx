import { renderToJson, shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { render } from 'enzyme';
import PublicHeader from './PublicHeader';

describe('<PublicHeader/>', () => {
  describe('SNAPSHOT', () => {
    it('container should match snapshots if user is not log in', () => {
      const wrapper = render(<PublicHeader />);
      expect(renderToJson(wrapper)).toMatchSnapshot();
    });
    it('should have heading text', () => {
      const wrapper = render(<PublicHeader />);
      expect(wrapper.find('h1').text()).toEqual('GOOD GAME PEACE OUT!');
    });
  });
});
