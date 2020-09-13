import { GameGroupItemActionTypes } from './Types';
import { followGameGroupAPI, unfollowGameGroupAPI } from 'api/gamegroups/gamegroups';

// ! QUERY GAME GROUP ITEM ===================================
export const setIsFollower = (isFollower: boolean) => ({
  type: GameGroupItemActionTypes.SET_IS_FOLLOWING,
  payload: {
    isFollower
  }
});

/**
 * @description as of right now game group is being queried in gameItemContainer.tsx
 * because I dont really need the gameGroup in the store, but its here just incase.
 */

// export const fetchingGameGroupItem = () => ({
//   type: GameGroupItemActionTypes.FETCHING_GAME_GROUP_ITEM,
//   payload: {
//     fetchingGameGroupItem: true
//   }
// });

// export const isFetchingGameGroupItemSuccess = (gg: IGameGroup, isFollowing: boolean) => ({
//   type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FETCH_SUCCESS,
//   payload: {
//     isFetchingGameGroupItemSuccess: true,
//     fetchingGameGroupItem: false,
//     gg,
//     isFollowing
//   }
// });

// export const isFetchingGameGroupItemFailed = () => ({
//   type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FETCH_FAILED,
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

export const isCurrentlyFollowing = () => ({
  type: GameGroupItemActionTypes.CURRENTLY_FOLLOWING_GAME_GROUP,
  payload: {
    isCurrentlyFollowing: true
  }
});

export const isFollowingGameGroupItemSuccess = () => ({
  type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FOLLOWED_SUCCESS,
  payload: {
    isCurrentlyFollowing: false,
    isFollower: true
  }
});

export const isFollowingGameGroupItemFailed = () => ({
  type: GameGroupItemActionTypes.GAME_GROUP_ITEM_FOLLOWED_FAILED,
  payload: {
    isCurrentlyFollowing: false,
    isGameGroupItemFollowFailed: true
  }
});

export const followGameGroupItem = (id: number) => {
  return async (dispatch: Function) => {
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
export const isCurrentlyUnfollowing = () => ({
  type: GameGroupItemActionTypes.CURRENTLY_UNFOLLOWING_GAME_GROUP,
  payload: {
    isCurrentlyUnfollowing: true
  }
});

export const isUnfollowingGameGroupItemSuccess = () => ({
  type: GameGroupItemActionTypes.GAME_GROUP_ITEM_UNFOLLOWED_SUCCESS,
  payload: {
    isCurrentlyUnfollowing: false,
    isGameGroupItemUnfollowSuccess: true,
    isFollower: false
  }
});

export const isUnfollowingGameGroupItemFailed = () => ({
  type: GameGroupItemActionTypes.GAME_GROUP_ITEM_UNFOLLOWED_FAILED,
  payload: {
    isCurrentlyUnfollowing: false,
    isGameGroupItemUnfollowFailed: true
  }
});

export const unFollowGameGroupItem = (id: number) => {
  return async (dispatch: Function) => {
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
