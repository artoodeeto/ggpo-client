import { IGameGroup } from 'interfaces/gameGroup';

export enum GameGroupItemEnumTypes {
  SET_IS_FOLLOWING = 'SET_IS_FOLLOWING',
  FETCHING_GAME_GROUP_ITEM = 'IS_FETCHING_GAME_GROUP_ITEM',
  GAME_GROUP_ITEM_FETCH_SUCCESS = 'GAME_GROUP_ITEM_FETCH_SUCCESS',
  GAME_GROUP_ITEM_FETCH_FAILED = 'GAME_GROUP_ITEM_FETCH_FAILED',
  CURRENTLY_FOLLOWING_GAME_GROUP = 'CURRENTLY_FOLLOWING_GAME_GROUP',
  GAME_GROUP_ITEM_FOLLOWED_SUCCESS = 'GAME_GROUP_ITEM_FOLLOWED_SUCCESS',
  GAME_GROUP_ITEM_FOLLOWED_FAILED = 'GAME_GROUP_ITEM_FOLLOWED_FAILED',
  CURRENTLY_UNFOLLOWING_GAME_GROUP = 'CURRENTLY_UNFOLLOWING_GAME_GROUP',
  GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS = 'GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS',
  GAME_GROUP_ITEM_UNFOLLOWED_FAILED = 'GAME_GROUP_ITEM_UNFOLLOWED_FAILED'
}

export interface ISetIsFollower {
  type: typeof GameGroupItemEnumTypes.SET_IS_FOLLOWING;
  payload: {
    isFollower: boolean;
  };
}

export interface IFetchingGameGroupItem {
  type: typeof GameGroupItemEnumTypes.FETCHING_GAME_GROUP_ITEM;
  payload: {
    fetchingGameGroupItem: boolean;
  };
}

export interface IIsFetchingGameGroupItemSuccess {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_SUCCESS;
  payload: {
    isFetchingGameGroupItemSuccess: boolean;
    fetchingGameGroupItem: boolean;
    gameGroup: IGameGroup;
    isFollowing: boolean;
  };
}

export interface IIsFetchingGameGroupItemFailed {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_FAILED;
  payload: {
    fetchingSomeGameGroupFailed: boolean;
    fetchingGameGroupItem: boolean;
  };
}

export interface IIsCurrentlyFollowing {
  type: typeof GameGroupItemEnumTypes.CURRENTLY_FOLLOWING_GAME_GROUP;
  payload: {
    isCurrentlyFollowing: boolean;
  };
}

export interface IIsFollowingGameGroupItemSuccess {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS;
  payload: {
    isCurrentlyFollowing: boolean;
    isFollower: boolean;
  };
}

export interface IIsFollowingGameGroupItemFailed {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED;
  payload: {
    isCurrentlyFollowing: boolean;
    isGameGroupItemFollowFailed: boolean;
  };
}

export interface IIsCurrentlyUnfollowing {
  type: typeof GameGroupItemEnumTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP;
  payload: {
    isCurrentlyUnfollowing: boolean;
  };
}

export interface IIsUnfollowingGameGroupItemSuccess {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS;
  payload: {
    isCurrentlyUnfollowing: boolean;
    isGameGroupItemUnfollowSuccess: boolean;
    isFollower: boolean;
  };
}

export interface IIsUnfollowingGameGroupItemFailed {
  type: typeof GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED;
  payload: {
    isCurrentlyUnfollowing: boolean;
    isGameGroupItemUnfollowFailed: boolean;
  };
}

export type GameGroupItemActionTypes =
  | ISetIsFollower
  | IFetchingGameGroupItem
  | IIsFetchingGameGroupItemSuccess
  | IIsFetchingGameGroupItemFailed
  | IIsCurrentlyFollowing
  | IIsFollowingGameGroupItemSuccess
  | IIsFollowingGameGroupItemFailed
  | IIsCurrentlyUnfollowing
  | IIsUnfollowingGameGroupItemSuccess
  | IIsUnfollowingGameGroupItemFailed;
