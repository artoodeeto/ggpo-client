import { shallow } from 'enzyme';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Feed from 'components/Feed/Feed';
import ProfileContainer from 'components/Profile/ProfileContainer';
import GameGroupContainer from 'components/GameGroup/GameGroupContainer';
import GameItemContainer from 'components/GameItem/GameItemContainer';
import PrivateLayout from './PrivateLayout';

describe('<PrivateLayout/>', () => {
  describe('PrivateLayout snapshots', () => {
    it('user is on login or signup page', () => {
      const wrapper = shallow(
        <PrivateLayout>
          <Feed />
        </PrivateLayout>
      );
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on profile page', () => {
      const wrapper = shallow(
        <PrivateLayout>
          <ProfileContainer />
        </PrivateLayout>
      );
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on gamegroup page', () => {
      const wrapper = shallow(
        <PrivateLayout>
          <GameGroupContainer />
        </PrivateLayout>
      );
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('user is on gamegroup page', () => {
      const wrapper = shallow(
        <PrivateLayout>
          <GameItemContainer />
        </PrivateLayout>
      );
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
