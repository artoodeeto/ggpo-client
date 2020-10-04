import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { sessionInitialState } from 'models/Session/sessionInitialState';
import { userInitialState } from 'models/User/userInitialState';
import { GameGroupEnumTypes } from '../Types';
import {
  isFetchingGameGroup,
  isFetchingGameGroupFailed,
  isFetchingGameGroupSuccess,
  getSomeGameGroups
} from '../Actions';
import { gameGroupInitSate } from 'models/GameGroup/gameGroupInitState';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('GameGroup Action Test', () => {
  let store: MockStoreEnhanced<any>;
  beforeEach(() => {
    mockedAxios.post.mockReset();
    mockedAxios.get.mockReset();
    store = mockStore({
      session: { ...sessionInitialState },
      user: { ...userInitialState },
      gameGroups: { ...gameGroupInitSate },
      feedPost: {},
      userProfilePost: {}
    });
  });

  describe('isFetchingGameGroup ACTION', () => {
    it('should set isFetchingSomeGameGroup to true', () => {
      expect(isFetchingGameGroup()).toEqual({
        type: GameGroupEnumTypes.IS_FETCHING_SOME_GAME_GROUPS,
        payload: {
          isFetchingSomeGameGroup: true
        }
      });
    });
  });

  describe('isFetchingGameGroup ACTION', () => {
    it('should set fetchingSomeGameGroupFailed to true', () => {
      expect(isFetchingGameGroupFailed()).toEqual({
        type: GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_FAILED,
        payload: {
          fetchingSomeGameGroupFailed: true
        }
      });
    });
  });

  describe('isFetchingGameGroupSuccess ACTION', () => {
    it('should set fetchingSomeGameGroupFailed to true', () => {
      const gg = [
        {
          id: 3,
          title: 'withcer',
          description: 'weakass',
          createdAt: '2020-08-28T02:11:55.000Z',
          updatedAt: 'null'
        },
        {
          id: 2,
          title: 'lol',
          description: 'lolsssss',
          createdAt: '2020-08-28T02:11:43.000Z',
          updatedAt: 'null'
        },
        {
          id: 1,
          title: 'dota2',
          description: 'trash talk here on dota2',
          createdAt: '2020-08-27T03:27:23.000Z',
          updatedAt: 'wa'
        }
      ];
      expect(isFetchingGameGroupSuccess(gg)).toEqual({
        type: GameGroupEnumTypes.IS_FETCHING_GAME_GROUPS_SUCCESS,
        payload: {
          isFetchingSomeGameGroup: false,
          isFetchingSomeGameGroupSuccess: true,
          gameGroups: gg
        }
      });
    });
  });

  describe('getSomeGameGroups ACTION Test', () => {
    it('should get some gameGroups successfully', () => {
      const gg = [
        {
          id: 3,
          title: 'withcer',
          description: 'weakass',
          createdAt: '2020-08-28T02:11:55.000Z',
          updatedAt: 'null'
        },
        {
          id: 2,
          title: 'lol',
          description: 'lolsssss',
          createdAt: '2020-08-28T02:11:43.000Z',
          updatedAt: 'null'
        },
        {
          id: 1,
          title: 'dota2',
          description: 'trash talk here on dota2',
          createdAt: '2020-08-27T03:27:23.000Z',
          updatedAt: 'wa'
        }
      ];

      mockedAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            meta: {},
            payload: {
              gameGroups: gg
            }
          }
        })
      );

      return store.dispatch<any>(getSomeGameGroups(1, 1)).then(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups?offset=1&limit=1');
        expect(store.getActions()).toEqual([
          { type: 'IS_FETCHING_SOME_GAME_GROUPS', payload: { isFetchingSomeGameGroup: true } },
          {
            type: 'IS_FETCHING_GAME_GROUPS_SUCCESS',
            payload: {
              isFetchingSomeGameGroup: false,
              isFetchingSomeGameGroupSuccess: true,
              gameGroups: gg
            }
          }
        ]);
      });
    });

    it('should set fetching failed to true on failed query gameGroups', () => {
      mockedAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          data: {}
        })
      );

      return store.dispatch<any>(getSomeGameGroups(1, 1)).then(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups?offset=1&limit=1');
        expect(store.getActions()).toEqual([
          { type: 'IS_FETCHING_SOME_GAME_GROUPS', payload: { isFetchingSomeGameGroup: true } },
          { type: 'IS_FETCHING_GAME_GROUPS_FAILED', payload: { fetchingSomeGameGroupFailed: true } }
        ]);
      });
    });
  });
});
