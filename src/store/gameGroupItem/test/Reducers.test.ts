import gameGroupItem from '../Reducers';
import { gameGroupItemInitSate } from 'models/GameGroupItem/gameGroupItemInitState';
import { GameGroupItemActionTypes } from '../Types';

const state = {
  fetchingGameGroupItem: false,
  isFetchingGameGroupItemSuccess: false,
  isFetchingGameGroupItemFailed: false,
  isCurrentlyFollowing: false,
  isGameGroupItemFollowSuccess: false,
  isGameGroupItemFollowFailed: false,
  isCurrentlyUnfollowing: false,
  isGameGroupItemUnfollowSuccess: false,
  isGameGroupItemUnfollowFailed: false,
  gameGroupItem: {
    isFollower: false
  }
};

describe('Game Group Item Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(gameGroupItem(undefined, {})).toEqual(gameGroupItemInitSate);
  });

  it('should set gameGroupItem isFollower to TRUE', () => {
    expect(
      gameGroupItem(state, {
        type: GameGroupItemActionTypes.SET_IS_FOLLOWING,
        payload: {
          isFollower: true
        }
      })
    ).toEqual({
      fetchingGameGroupItem: false,
      isFetchingGameGroupItemSuccess: false,
      isFetchingGameGroupItemFailed: false,
      isCurrentlyFollowing: false,
      isGameGroupItemFollowSuccess: false,
      isGameGroupItemFollowFailed: false,
      isCurrentlyUnfollowing: false,
      isGameGroupItemUnfollowSuccess: false,
      isGameGroupItemUnfollowFailed: false,
      gameGroupItem: {
        isFollower: true
      }
    });
  });

  describe('Following a gameGroupItem', () => {
    it('should set isCurrentlyFollowing to TRUE', () => {
      expect(
        gameGroupItem(state, {
          type: GameGroupItemActionTypes.CURRENTLY_FOLLOWING_GAME_GROUP,
          payload: {
            isCurrentlyFollowing: true
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: true,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      });
    });

    it('should set GAME_GROUP_ITEM_FOLLOWED_SUCCESS payload', () => {
      const stateLocal = {
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: true,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      };
      expect(
        gameGroupItem(stateLocal, {
          type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS,
          payload: {
            isCurrentlyFollowing: false,
            isFollower: true
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: true
        }
      });
    });

    it('should set GAME_GROUP_ITEM_FOLLOWED_FAILED payload properties', () => {
      const stateLocal = {
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: true,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      };
      expect(
        gameGroupItem(stateLocal, {
          type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED,
          payload: {
            isCurrentlyFollowing: false,
            isGameGroupItemFollowFailed: true
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: true,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      });
    });
  });

  describe('Unfollowing a gameGroupItem', () => {
    it('set isCurrentlyUnfollowing to TRUE', () => {
      expect(
        gameGroupItem(state, {
          type: GameGroupItemActionTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP,
          payload: {
            isCurrentlyUnfollowing: true
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: true,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      });
    });

    it('should set GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS payload properties ', () => {
      const stateLocal = {
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: true,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: true
        }
      };
      expect(
        gameGroupItem(stateLocal, {
          type: GameGroupItemActionTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS,
          payload: {
            isCurrentlyUnfollowing: false,
            isGameGroupItemUnfollowSuccess: true,
            isFollower: false
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: true,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: false
        }
      });
    });

    it('should set GAME_GROUP_ITEM_UNFOLLOWED_FAILED payload properties ', () => {
      const stateLocal = {
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: true,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: false,
        gameGroupItem: {
          isFollower: true
        }
      };
      expect(
        gameGroupItem(stateLocal, {
          type: GameGroupItemActionTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED,
          payload: {
            isCurrentlyUnfollowing: false,
            isGameGroupItemUnfollowFailed: true
          }
        })
      ).toEqual({
        fetchingGameGroupItem: false,
        isFetchingGameGroupItemSuccess: false,
        isFetchingGameGroupItemFailed: false,
        isCurrentlyFollowing: false,
        isGameGroupItemFollowSuccess: false,
        isGameGroupItemFollowFailed: false,
        isCurrentlyUnfollowing: false,
        isGameGroupItemUnfollowSuccess: false,
        isGameGroupItemUnfollowFailed: true,
        gameGroupItem: {
          isFollower: true
        }
      });
    });
  });
});
