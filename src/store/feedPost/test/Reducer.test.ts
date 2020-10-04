import postReducer from '../Reducers';
import { PostFeedEnumTypes } from '../Types';
import { postFeedInitialState } from 'models/Post/postFeedInitialState';

describe('Feed Post Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(postReducer(undefined, {})).toEqual(postFeedInitialState);
  });

  it('should set some posts', () => {
    expect(
      postReducer(postFeedInitialState, {
        type: PostFeedEnumTypes.GET_SOME_FEED_POSTS,
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
      postReducer(postFeedInitialState, {
        type: PostFeedEnumTypes.IS_FETCHING_FEED_POSTS,
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
          type: PostFeedEnumTypes.IS_FETCHING_FEED_POSTS_FAILED,
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
