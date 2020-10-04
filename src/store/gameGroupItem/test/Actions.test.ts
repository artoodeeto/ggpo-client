import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import {
  followGameGroupItem,
  isCurrentlyFollowing,
  isCurrentlyUnfollowing,
  isFollowingGameGroupItemFailed,
  isFollowingGameGroupItemSuccess,
  isUnfollowingGameGroupItemFailed,
  isUnfollowingGameGroupItemSuccess,
  setIsFollower,
  unFollowGameGroupItem
} from '../Actions';
import { GameGroupItemEnumTypes } from '../Types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Game Group Item Action Test', () => {
  let store: MockStoreEnhanced<any>;
  beforeEach(() => {
    mockedAxios.put.mockReset();
    mockedAxios.post.mockReset();
    mockedAxios.get.mockReset();
    mockedAxios.delete.mockReset();
    store = mockStore({
      session: {},
      user: {},
      gameGroups: {},
      feedPost: {},
      userProfilePost: {}
    });
  });

  describe('setIsFollower ACTION', () => {
    it('should set isFollower to the given boolean', () => {
      expect(setIsFollower(false)).toEqual({
        type: GameGroupItemEnumTypes.SET_IS_FOLLOWING,
        payload: {
          isFollower: false
        }
      });
    });
  });

  describe('FOLLOW GAME GROUP ACTION', () => {
    it('set isCurrentlyFollowing to true', () => {
      expect(isCurrentlyFollowing()).toEqual({
        type: GameGroupItemEnumTypes.CURRENTLY_FOLLOWING_GAME_GROUP,
        payload: {
          isCurrentlyFollowing: true
        }
      });
    });

    it('should set isFollowingGameGroupItemSuccess properties', () => {
      expect(isFollowingGameGroupItemSuccess()).toEqual({
        type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS,
        payload: {
          isCurrentlyFollowing: false,
          isFollower: true
        }
      });
    });

    it('should set isFollowingGameGroupItemFailed properties', () => {
      expect(isFollowingGameGroupItemFailed()).toEqual({
        type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED,
        payload: {
          isCurrentlyFollowing: false,
          isGameGroupItemFollowFailed: true
        }
      });
    });

    describe('followGameGroupItem ACTION Test', () => {
      it('should follow a gameGroup successfully', () => {
        mockedAxios.put.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              meta: {},
              payload: {
                gameGroup: {
                  message: 'success'
                }
              }
            }
          })
        );

        return store.dispatch<any>(followGameGroupItem(1)).then(() => {
          expect(mockedAxios.put).toHaveBeenCalledTimes(1);
          expect(mockedAxios.put).toHaveBeenCalledWith('/game_groups/follow/1');
          expect(store.getActions()).toEqual([
            { type: 'CURRENTLY_FOLLOWING_GAME_GROUP', payload: { isCurrentlyFollowing: true } },
            {
              type: 'GAME_GROUP_ITEM_FOLLOWED_SUCCESS',
              payload: {
                isCurrentlyFollowing: false,
                isFollower: true
              }
            }
          ]);
        });
      });

      it('should set fetching failed to true on failed query gameGroups', () => {
        mockedAxios.put.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store.dispatch<any>(followGameGroupItem(1)).then(() => {
          expect(mockedAxios.put).toHaveBeenCalledTimes(1);
          expect(mockedAxios.put).toHaveBeenCalledWith('/game_groups/follow/1');
          expect(store.getActions()).toEqual([
            { type: 'CURRENTLY_FOLLOWING_GAME_GROUP', payload: { isCurrentlyFollowing: true } },
            {
              type: 'GAME_GROUP_ITEM_FOLLOWED_FAILED',
              payload: { isCurrentlyFollowing: false, isGameGroupItemFollowFailed: true }
            }
          ]);
        });
      });
    });
  });

  describe('UNFOLLOW GAME GROUP ACTION', () => {
    it('set isCurrentlyFollowing to true', () => {
      expect(isCurrentlyUnfollowing()).toEqual({
        type: GameGroupItemEnumTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP,
        payload: {
          isCurrentlyUnfollowing: true
        }
      });
    });

    it('should set isUnfollowingGameGroupItemSuccess properties', () => {
      expect(isUnfollowingGameGroupItemSuccess()).toEqual({
        type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS,
        payload: {
          isCurrentlyUnfollowing: false,
          isGameGroupItemUnfollowSuccess: true,
          isFollower: false
        }
      });
    });

    it('should set isUnfollowingGameGroupItemFailed properties', () => {
      expect(isUnfollowingGameGroupItemFailed()).toEqual({
        type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED,
        payload: {
          isCurrentlyUnfollowing: false,
          isGameGroupItemUnfollowFailed: true
        }
      });
    });

    describe('unFollowGameGroupItem ACTION Test', () => {
      it('should follow a gameGroup successfully', () => {
        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              meta: {},
              payload: {
                gameGroup: {
                  message: 'success'
                }
              }
            }
          })
        );

        return store.dispatch<any>(unFollowGameGroupItem(1)).then(() => {
          expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
          expect(mockedAxios.delete).toHaveBeenCalledWith('/game_groups/unfollow/1');
          expect(store.getActions()).toEqual([
            { type: 'CURRENTLY_UNFOLLOWING_GAME_GROUP', payload: { isCurrentlyUnfollowing: true } },
            {
              type: 'GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS',
              payload: {
                isCurrentlyUnfollowing: false,
                isGameGroupItemUnfollowSuccess: true,
                isFollower: false
              }
            }
          ]);
        });
      });

      it('should set fetching failed to true on failed query gameGroups', () => {
        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store.dispatch<any>(unFollowGameGroupItem(1)).then(() => {
          expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
          expect(mockedAxios.delete).toHaveBeenCalledWith('/game_groups/unfollow/1');
          expect(store.getActions()).toEqual([
            { type: 'CURRENTLY_UNFOLLOWING_GAME_GROUP', payload: { isCurrentlyUnfollowing: true } },
            {
              type: 'GAME_GROUP_ITEM_UNFOLLOWED_FAILED',
              payload: { isCurrentlyUnfollowing: false, isGameGroupItemUnfollowFailed: true }
            }
          ]);
        });
      });
    });
  });
});
