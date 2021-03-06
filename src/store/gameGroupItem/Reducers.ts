import { GameGroupItemActionTypes, GameGroupItemEnumTypes } from './Types';
import { IStateGameGroupItem } from 'interfaces/gameGroupItem';
import { gameGroupItemInitSate } from 'models/GameGroupItem/gameGroupItemInitState';

const gameGroupItem = (state = gameGroupItemInitSate, action: GameGroupItemActionTypes): IStateGameGroupItem => {
  switch (action.type) {
    case GameGroupItemEnumTypes.SET_IS_FOLLOWING: {
      return {
        ...state,
        gameGroupItem: { isFollower: action.payload.isFollower }
      };
    }
    case GameGroupItemEnumTypes.FETCHING_GAME_GROUP_ITEM: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        gameGroupItem: { isFollower: action.payload.isFollowing, gameGroup: action.payload.gameGroup }
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupItemEnumTypes.CURRENTLY_FOLLOWING_GAME_GROUP: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS: {
      return {
        ...state,
        isCurrentlyFollowing: action.payload.isCurrentlyFollowing,
        gameGroupItem: { isFollower: action.payload.isFollower }
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupItemEnumTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS: {
      return {
        ...state,
        isCurrentlyUnfollowing: action.payload.isCurrentlyUnfollowing,
        isGameGroupItemUnfollowSuccess: action.payload.isGameGroupItemUnfollowSuccess,
        gameGroupItem: { isFollower: action.payload.isFollower }
      };
    }
    case GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default gameGroupItem;
