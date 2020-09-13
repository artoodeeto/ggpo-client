import gameGroups from '../Reducers';
import { gameGroupInitSate } from 'models/GameGroup/gameGroupInitState';
import { GameGroupActionTypes } from '../Types';

describe('Game Group Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(gameGroups(undefined, {})).toEqual(gameGroupInitSate);
  });

  it('should set isFetchingSomeGameGroup to TRUE', () => {
    const state = {
      isFetchingSomeGameGroup: false,
      isFetchingSomeGameGroupSuccess: false,
      fetchingSomeGameGroupFailed: false,
      gameGroups: []
    };

    expect(
      gameGroups(state, {
        type: GameGroupActionTypes.IS_FETCHING_SOME_GAME_GROUPS,
        payload: {
          isFetchingSomeGameGroup: true
        }
      })
    ).toEqual({
      isFetchingSomeGameGroup: true,
      isFetchingSomeGameGroupSuccess: false,
      fetchingSomeGameGroupFailed: false,
      gameGroups: []
    });
  });

  it('should set fetchingSomeGameGroupFailed to TRUE', () => {
    const state = {
      isFetchingSomeGameGroup: false,
      isFetchingSomeGameGroupSuccess: false,
      fetchingSomeGameGroupFailed: false,
      gameGroups: []
    };

    expect(
      gameGroups(state, {
        type: GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_FAILED,
        payload: {
          fetchingSomeGameGroupFailed: true
        }
      })
    ).toEqual({
      isFetchingSomeGameGroup: false,
      isFetchingSomeGameGroupSuccess: false,
      fetchingSomeGameGroupFailed: true,
      gameGroups: []
    });
  });

  it('should set some GAME GROUPS, set success to TRUE, and return isFetching to false', () => {
    const state = {
      isFetchingSomeGameGroup: false,
      isFetchingSomeGameGroupSuccess: false,
      fetchingSomeGameGroupFailed: false,
      gameGroups: []
    };

    expect(
      gameGroups(state, {
        type: GameGroupActionTypes.IS_FETCHING_GAME_GROUPS_SUCCESS,
        payload: {
          isFetchingSomeGameGroup: false,
          isFetchingSomeGameGroupSuccess: true,
          gameGroups: [{ id: 1, title: 'waa', description: 'woah' }]
        }
      })
    ).toEqual({
      isFetchingSomeGameGroup: false,
      isFetchingSomeGameGroupSuccess: true,
      fetchingSomeGameGroupFailed: false,
      gameGroups: [{ id: 1, title: 'waa', description: 'woah' }]
    });
  });
});
