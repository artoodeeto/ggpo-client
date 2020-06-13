import postReducer from '../Reducers';
import { PostActionTypes } from '../Types';
import { postInitialState } from 'models/Post/postInitialState';

describe('Post Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(postReducer(undefined, {})).toEqual(postInitialState);
  });

  it('should set some posts', () => {
    expect(
      postReducer(postInitialState, {
        type: PostActionTypes.GET_SOME_POSTS,
        payload: {
          isFetchingPosts: false,
          fetchingPostsFailed: false,
          posts: [
            {
              id: 1,
              title: 'wa',
              body: 'wo',
              createdAt: 'as',
              updatedAt: 'a',
              user: {
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
            }
          ]
        }
      })
    ).toEqual({
      isFetchingPosts: false,
      fetchingPostsFailed: false,
      posts: [
        {
          id: 1,
          title: 'wa',
          body: 'wo',
          createdAt: 'as',
          updatedAt: 'a',
          user: {
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
        }
      ]
    });
  });

  it('should set is fetching to true', () => {
    expect(
      postReducer(postInitialState, {
        type: PostActionTypes.IS_FETCHING_POSTS,
        payload: {
          isFetchingPosts: true
        }
      })
    ).toEqual({
      fetchingPostsFailed: false,
      isFetchingPosts: true,
      posts: []
    });
  });

  it('should set is fetching failed to true', () => {
    expect(
      postReducer(
        {
          isFetchingPosts: true,
          fetchingPostsFailed: false,
          posts: []
        },
        {
          type: PostActionTypes.IS_FETCHING_POSTS_FAILED,
          payload: {
            fetchingPostsFailed: true
          }
        }
      )
    ).toEqual({
      fetchingPostsFailed: true,
      isFetchingPosts: true,
      posts: []
    });
  });
});
