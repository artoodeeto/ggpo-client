import { GameGroupActionTypes } from './Types';
import { gameGroupInitSate } from 'models/GameGroup/gameGroupInitState';
import { IStateGetSomeGameGroup } from 'interfaces/gameGroup';

const gameGroups = (state = { ...gameGroupInitSate }, action: any): IStateGetSomeGameGroup => {
  switch (action.type) {
    case GameGroupActionTypes.IS_FETCHING_SOME_GAME_GROUPS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_SUCCESS: {
      return {
        ...state,
        isFetchingSomeGameGroup: action.payload.isFetchingSomeGameGroup,
        isFetchingSomeGameGroupSuccess: action.payload.isFetchingSomeGameGroupSuccess,
        gameGroups: [...action.payload.gameGroups]
      };
    }
    default: {
      return state;
    }
  }
};

export default gameGroups;
