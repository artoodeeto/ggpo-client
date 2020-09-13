import * as postActions from '../Actions';
import { PostFeedActionTypes } from '../Types';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Post Action Test', () => {
  let store: MockStoreEnhanced<any>;

  beforeEach(() => {
    mockedAxios.post.mockReset();
    store = mockStore({ session: {}, user: {}, post: {} });
  });

  describe('getSomePostsForFeed ACTION', () => {
    it('should get an array of posts', () => {
      const p = [
        {
          id: 1,
          title: 'title',
          body: 'body',
          createdAt: '123',
          updatedAt: '123',
          user: {
            id: 1,
            username: 'new1',
            email: 'new1@gmail.com'
          }
        }
      ];
      expect(postActions.getSomePostsForFeed(p)).toEqual({
        type: PostFeedActionTypes.GET_SOME_FEED_POSTS,
        payload: {
          isFetchingPosts: false,
          fetchingPostsFailed: false,
          posts: [
            {
              id: 1,
              title: 'title',
              body: 'body',
              createdAt: '123',
              updatedAt: '123',
              user: {
                id: 1,
                username: 'new1',
                email: 'new1@gmail.com'
              }
            }
          ]
        }
      });
    });
  });

  describe('isFetchingPosts ACTION', () => {
    it('should set isFetching to true', () => {
      expect(postActions.isFetchingPosts()).toEqual({
        type: PostFeedActionTypes.IS_FETCHING_FEED_POSTS,
        payload: {
          isFetchingPosts: true
        }
      });
    });
  });

  describe('isFetchingPostsFailed ACTION', () => {
    it('should set fetchingPostsFailed to true if post query failed', () => {
      expect(postActions.isFetchingPostsFailed()).toEqual({
        type: PostFeedActionTypes.IS_FETCHING_FEED_POSTS_FAILED,
        payload: {
          fetchingPostsFailed: true
        }
      });
    });
  });

  describe('GET async ACTION Test', () => {
    it('should get some posts successfully', () => {
      const p = [
        {
          id: 1,
          title: 'title',
          body: 'body',
          createdAt: '123',
          updatedAt: '123',
          user: {
            id: 1,
            username: 'new1',
            email: 'new1@gmail.com'
          }
        }
      ];

      mockedAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            meta: {},
            payload: {
              posts: [...p]
            }
          }
        })
      );

      return store.dispatch<any>(postActions.querySomePost(1, 1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: 'IS_FETCHING_FEED_POSTS', payload: { isFetchingPosts: true } },
          {
            type: 'GET_SOME_FEED_POSTS',
            payload: {
              isFetchingPosts: false,
              fetchingPostsFailed: false,
              posts: [
                {
                  id: 1,
                  title: 'title',
                  body: 'body',
                  createdAt: '123',
                  updatedAt: '123',
                  user: {
                    id: 1,
                    username: 'new1',
                    email: 'new1@gmail.com'
                  }
                }
              ]
            }
          }
        ]);
      });
    });

    it('should set fetching failed to true on failed query posts', () => {
      mockedAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          data: {}
        })
      );

      return store.dispatch<any>(postActions.querySomePost(1, 1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: 'IS_FETCHING_FEED_POSTS', payload: { isFetchingPosts: true } },
          { type: 'IS_FETCHING_FEED_POSTS_FAILED', payload: { fetchingPostsFailed: true } }
        ]);
      });
    });
  });
});
