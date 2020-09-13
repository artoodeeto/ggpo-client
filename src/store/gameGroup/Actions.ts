import { GameGroupActionTypes } from './Types';
import { querySomeGameGroupsAPI } from 'api/gamegroups/gamegroups';
import { IGameGroup } from 'interfaces/gameGroup';

// ! QUERY SOME GAME GROUPS ===================================
export const isFetchingGameGroup = () => ({
  type: GameGroupActionTypes.IS_FETCHING_SOME_GAME_GROUPS,
  payload: {
    isFetchingSomeGameGroup: true
  }
});

export const isFetchingGameGroupFailed = () => ({
  type: GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_FAILED,
  payload: {
    fetchingSomeGameGroupFailed: true
  }
});

export const isFetchingGameGroupSuccess = (gameGroups: IGameGroup[]) => ({
  type: GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_SUCCESS,
  payload: {
    isFetchingSomeGameGroup: false,
    isFetchingSomeGameGroupSuccess: true,
    gameGroups
  }
});

export const getSomeGameGroups = (offset: number, limit: number) => {
  return async (dispatch: Function) => {
    dispatch(isFetchingGameGroup());
    try {
      const { payload } = await querySomeGameGroupsAPI(offset, limit);
      dispatch(isFetchingGameGroupSuccess(payload.gameGroups));
    } catch (error) {
      dispatch(isFetchingGameGroupFailed());
    }
  };
};
// ! QUERY SOME GAME GROUPS ===================================
