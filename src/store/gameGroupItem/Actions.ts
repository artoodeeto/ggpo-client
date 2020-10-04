import {
  GameGroupItemEnumTypes,
  IIsCurrentlyFollowing,
  IIsCurrentlyUnfollowing,
  IIsFollowingGameGroupItemFailed,
  IIsFollowingGameGroupItemSuccess,
  IIsUnfollowingGameGroupItemFailed,
  IIsUnfollowingGameGroupItemSuccess,
  ISetIsFollower
} from './Types';
import { followGameGroupAPI, unfollowGameGroupAPI } from 'api/gamegroups/gamegroups';
import { AppThunk } from 'interfaces/thunkType';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';

// ! QUERY GAME GROUP ITEM ===================================
export const setIsFollower = (isFollower: boolean): ISetIsFollower => ({
  type: GameGroupItemEnumTypes.SET_IS_FOLLOWING,
  payload: {
    isFollower
  }
});

/**
 * @description as of right now game group is being queried in gameItemContainer.tsx
 * because I dont really need the gameGroup in the store, but its here just incase.
 */

// export const fetchingGameGroupItem = (): FetchingGameGroupItem => ({
//   type: GameGroupItemEnumTypes.FETCHING_GAME_GROUP_ITEM,
//   payload: {
//     fetchingGameGroupItem: true
//   }
// });

// export const isFetchingGameGroupItemSuccess = (gg: IGameGroup, isFollowing: boolean): IsFetchingGameGroupItemSuccess => ({
//   type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_SUCCESS,
//   payload: {
//     isFetchingGameGroupItemSuccess: true,
//     fetchingGameGroupItem: false,
//     gg,
//     isFollowing
//   }
// });

// export const isFetchingGameGroupItemFailed = (): IsFetchingGameGroupItemFailed => ({
//   type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FETCH_FAILED,
//   payload: {
//     fetchingSomeGameGroupFailed: true,
//     fetchingGameGroupItem: false
//   }
// });

// export const readGameGroupItem = (id: number) => {
//   return async (dispatch: Function) => {
//     dispatch(fetchingGameGroupItem());
//     try {
//       const { payload } = await getAGameGroup(id);
//       dispatch(isFetchingGameGroupItemSuccess(payload.gameGroup, payload.isFollower));
//     } catch (error) {
//       dispatch(isFetchingGameGroupItemFailed());
//     }
//   };
// };

// ! QUERY GAME GROUP ITEM  ===================================

// ! FOLLOW GAME GROUP ITEM  ===================================

export const isCurrentlyFollowing = (): IIsCurrentlyFollowing => ({
  type: GameGroupItemEnumTypes.CURRENTLY_FOLLOWING_GAME_GROUP,
  payload: {
    isCurrentlyFollowing: true
  }
});

export const isFollowingGameGroupItemSuccess = (): IIsFollowingGameGroupItemSuccess => ({
  type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS,
  payload: {
    isCurrentlyFollowing: false,
    isFollower: true
  }
});

export const isFollowingGameGroupItemFailed = (): IIsFollowingGameGroupItemFailed => ({
  type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED,
  payload: {
    isCurrentlyFollowing: false,
    isGameGroupItemFollowFailed: true
  }
});

export const followGameGroupItem = (id: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(isCurrentlyFollowing());
    try {
      await followGameGroupAPI(id);
      dispatch(isFollowingGameGroupItemSuccess());
    } catch (error) {
      dispatch(isFollowingGameGroupItemFailed());
    }
  };
};
// ! FOLLOW GAME GROUP ITEM  ===================================

// ! UNFOLLOW GAME GROUP ITEM  ===================================
export const isCurrentlyUnfollowing = (): IIsCurrentlyUnfollowing => ({
  type: GameGroupItemEnumTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP,
  payload: {
    isCurrentlyUnfollowing: true
  }
});

export const isUnfollowingGameGroupItemSuccess = (): IIsUnfollowingGameGroupItemSuccess => ({
  type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS,
  payload: {
    isCurrentlyUnfollowing: false,
    isGameGroupItemUnfollowSuccess: true,
    isFollower: false
  }
});

export const isUnfollowingGameGroupItemFailed = (): IIsUnfollowingGameGroupItemFailed => ({
  type: GameGroupItemEnumTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED,
  payload: {
    isCurrentlyUnfollowing: false,
    isGameGroupItemUnfollowFailed: true
  }
});

export const unFollowGameGroupItem = (id: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
    dispatch(isCurrentlyUnfollowing());
    try {
      await unfollowGameGroupAPI(id);
      dispatch(isUnfollowingGameGroupItemSuccess());
    } catch (error) {
      dispatch(isUnfollowingGameGroupItemFailed());
    }
  };
};
// ! UNFOLLOW GAME GROUP ITEM  ===================================
