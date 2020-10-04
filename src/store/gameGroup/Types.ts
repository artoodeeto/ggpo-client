import { IGameGroup } from 'interfaces/gameGroup';

export enum GameGroupEnumTypes {
  GET_SOME_GAME_GROUPS = 'GET_SOME_GAME_GROUPS',
  IS_FETCHING_SOME_GAME_GROUPS = 'IS_FETCHING_SOME_GAME_GROUPS',
  IS_FETCHING_GAME_GROUPS_FAILED = 'IS_FETCHING_GAME_GROUPS_FAILED',
  IS_FETCHING_GAME_GROUPS_SUCCESS = 'IS_FETCHING_GAME_GROUPS_SUCCESS'
}

export interface IIsFetchingGameGroup {
  type: typeof GameGroupEnumTypes.IS_FETCHING_SOME_GAME_GROUPS;
  payload: {
    isFetchingSomeGameGroup: boolean;
  };
}

export interface IIsFetchingGameGroupFailed {
  type: typeof GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_FAILED;
  payload: {
    fetchingSomeGameGroupFailed: boolean;
  };
}

export interface IIsFetchingGameGroupSuccess {
  type: typeof GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_SUCCESS;
  payload: {
    isFetchingSomeGameGroup: boolean;
    isFetchingSomeGameGroupSuccess: boolean;
    gameGroups: IGameGroup[];
  };
}

export type GameGroupActionTypes = IIsFetchingGameGroup | IIsFetchingGameGroupFailed | IIsFetchingGameGroupSuccess;
