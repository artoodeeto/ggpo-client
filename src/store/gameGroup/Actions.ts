import {
  GameGroupEnumTypes,
  IIsFetchingGameGroup,
  IIsFetchingGameGroupFailed,
  IIsFetchingGameGroupSuccess
} from './Types';
import { querySomeGameGroupsAPI } from 'api/gamegroups/gamegroups';
import { IGameGroup } from 'interfaces/gameGroup';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppThunk } from 'interfaces/thunkType';
import { RootState } from 'store/root/root_reducer';

// ! QUERY SOME GAME GROUPS ===================================
export const isFetchingGameGroup = (): IIsFetchingGameGroup => ({
  type: GameGroupEnumTypes.IS_FETCHING_SOME_GAME_GROUPS,
  payload: {
    isFetchingSomeGameGroup: true
  }
});

export const isFetchingGameGroupFailed = (): IIsFetchingGameGroupFailed => ({
  type: GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_FAILED,
  payload: {
    fetchingSomeGameGroupFailed: true
  }
});

export const isFetchingGameGroupSuccess = (gameGroups: IGameGroup[]): IIsFetchingGameGroupSuccess => ({
  type: GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_SUCCESS,
  payload: {
    isFetchingSomeGameGroup: false,
    isFetchingSomeGameGroupSuccess: true,
    gameGroups
  }
});

export const getSomeGameGroups = (offset: number, limit: number): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, {}, AnyAction>): Promise<void> => {
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
