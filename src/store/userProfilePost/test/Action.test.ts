import {
  fetchingUserPosts,
  getUserPosts,
  submitNewUserPost,
  fetchingUserPostsFailed,
  userProfilePost,
  isCreatingNewPost,
  newUserProfilePost,
  creatingNewPostFailed,
  deletingUserProfilePost,
  deletingUserProfilePostFailed,
  deletingUserProfilePostSuccess,
  deleteUserProfilePost,
  isEditingPost,
  isEditingPostFailed,
  isEditingPostSuccess,
  updateUserPost
} from '../Actions';
import { ProfilePostEnumTypes } from '../Types';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import mockPostAPI from 'api/posts/__mocks__/postsMocks';
import { createPostAPI } from 'api/posts/posts';

jest.mock('axios');
jest.mock('../../../api/posts/__mocks__/postsMocks');
const mockedAPI = mockPostAPI as jest.Mocked<typeof mockPostAPI>;
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Post Action Test', () => {
  let store: MockStoreEnhanced<any>;

  beforeEach(() => {
    mockedAxios.post.mockReset();
    mockedAxios.get.mockReset();
    mockedAxios.delete.mockReset();
    mockedAxios.put.mockReset();
    store = mockStore({ session: {}, user: {}, post: {} });
  });

  it('fetchingUserPosts ACTION', () => {
    expect(fetchingUserPosts()).toEqual({
      type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS,
      payload: {
        isFetchingUserPosts: true
      }
    });
  });

  it('fetchingUserPostsFailed ACTION', () => {
    expect(fetchingUserPostsFailed()).toEqual({
      type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED,
      payload: {
        isFetchingUserPosts: false,
        isFetchingUserPostsFailed: true
      }
    });
  });

  it('userProfilePost ACTION', () => {
    const p = [
      {
        id: 1,
        title: 'title',
        body: 'body',
        createdAt: '123',
        updatedAt: '123'
      }
    ];
    expect(userProfilePost(p)).toEqual({
      type: ProfilePostEnumTypes.PROFILE_POSTS,
      payload: {
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: true,
        posts: p
      }
    });
  });

  it('isCreatingNewPost ACTION', () => {
    expect(isCreatingNewPost()).toEqual({
      type: ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS,
      payload: {
        isCreatingPost: true
      }
    });
  });

  it('newUserProfilePost ACTION', () => {
    const p = {
      id: 1,
      title: 'title',
      body: 'body',
      createdAt: '123',
      updatedAt: '123'
    };
    expect(newUserProfilePost(p)).toEqual({
      type: ProfilePostEnumTypes.NEW_PROFILE_POSTS,
      payload: {
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: true,
        post: p
      }
    });
  });

  it('creatingNewPostFailed ACTION', () => {
    expect(creatingNewPostFailed()).toEqual({
      type: ProfilePostEnumTypes.NEW_POST_FAILED,
      payload: {
        isCreatingPost: false,
        creatingNewPostFailed: true,
        creatingNewPostSuccess: false
      }
    });
  });

  describe('getUserPosts ACTION', () => {
    it('should successfully call getUserPostsAPI', () => {
      const p = [
        {
          id: 1,
          title: 'title',
          body: 'body',
          createdAt: '123',
          updatedAt: '123'
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

      return store.dispatch<any>(getUserPosts(1, 2, 3)).then(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('/users/posts/1?offset=2&limit=3');
        expect(store.getActions()).toEqual([
          { type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS, payload: { isFetchingUserPosts: true } },
          {
            type: ProfilePostEnumTypes.PROFILE_POSTS,
            payload: {
              isFetchingUserPosts: false,
              isFetchingUserPostsSuccess: true,
              posts: [
                {
                  id: 1,
                  title: 'title',
                  body: 'body',
                  createdAt: '123',
                  updatedAt: '123'
                }
              ]
            }
          }
        ]);
      });
    });

    it('should failed call getUserPostsAPI', () => {
      mockedAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          data: {}
        })
      );

      return store.dispatch<any>(getUserPosts(1, 2, 3)).then(() => {
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('/users/posts/1?offset=2&limit=3');
        expect(store.getActions()).toEqual([
          { type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS, payload: { isFetchingUserPosts: true } },
          {
            type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED,
            payload: {
              isFetchingUserPosts: false,
              isFetchingUserPostsFailed: true
            }
          }
        ]);
      });
    });
  });

  describe('submitNewUserPost ACTION', () => {
    it('should successfully call createPostAPI', async () => {
      const p = {
        id: 1,
        title: 'title',
        body: 'body',
        createdAt: '123',
        updatedAt: '123'
      };
      mockedAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            meta: {},
            payload: {
              post: p
            }
          }
        })
      );

      // FIXME: API should be used to mock this test not axios
      // mockedAPI.createPostAPI.mockImplementationOnce((foo) => {
      //   console.log({ foo });
      //   return {
      //     data: {}
      //   };
      // });
      // const response = await createPostAPI('waa', 'woo');
      // const expectedResponse = {
      //   meta: {},
      //   payload: { post: p }
      // };
      // expect(mockedAPI.createPostAPI).toHaveBeenCalledTimes(2);
      // expect(response).toEqual({ ...expectedResponse });
      // expect(mockedAPI.createPostAPI).toHaveBeenCalledWith('/posts');

      return store.dispatch<any>(submitNewUserPost('waa', 'woo')).then(() => {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(mockedAxios.post).toHaveBeenCalledWith('/posts', { body: 'woo', title: 'waa' });
        expect(store.getActions()).toEqual([
          {
            type: ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS,
            payload: { isCreatingPost: true }
          },
          {
            type: ProfilePostEnumTypes.NEW_PROFILE_POSTS,
            payload: {
              isCreatingPost: false,
              creatingNewPostFailed: false,
              creatingNewPostSuccess: true,
              post: {
                id: 1,
                title: 'title',
                body: 'body',
                createdAt: '123',
                updatedAt: '123'
              }
            }
          }
        ]);
      });
    });

    it('should failed call createPostAPI', async () => {
      mockedAxios.post.mockImplementationOnce(() =>
        Promise.reject({
          data: {}
        })
      );

      return store.dispatch<any>(submitNewUserPost('foo', 'boo')).then(() => {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(mockedAxios.post).toHaveBeenCalledWith('/posts', { body: 'boo', title: 'foo' });
        expect(store.getActions()).toEqual([
          {
            type: ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS,
            payload: { isCreatingPost: true }
          },
          {
            type: ProfilePostEnumTypes.NEW_POST_FAILED,
            payload: {
              isCreatingPost: false,
              creatingNewPostFailed: true,
              creatingNewPostSuccess: false
            }
          }
        ]);
      });
    });
  });

  describe('DELETING A POSTS ACTIONS', () => {
    it('deletingUserProfilePost ACTION', () => {
      expect(deletingUserProfilePost()).toEqual({
        type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS,
        payload: {
          isDeletingProfilePost: true
        }
      });
    });

    it('deletingUserProfilePostFailed ACTION', () => {
      expect(deletingUserProfilePostFailed()).toEqual({
        type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED,
        payload: {
          isDeletingProfilePost: false,
          deletingProfilePostFailed: true
        }
      });
    });

    it('deletingUserProfilePostSuccess ACTION', () => {
      expect(deletingUserProfilePostSuccess(1)).toEqual({
        type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS,
        payload: {
          isDeletingProfilePost: false,
          deletingProfilePostSuccess: true,
          postId: 1
        }
      });
    });

    describe('deleteUserProfilePost ACTION', () => {
      it('should call a success deleteUserProfilePost', async () => {
        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.resolve({
            data: {}
          })
        );

        return store.dispatch<any>(deleteUserProfilePost(1)).then(() => {
          expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
          expect(mockedAxios.delete).toHaveBeenCalledWith('/posts/1');
          expect(store.getActions()).toEqual([
            {
              type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS,
              payload: { isDeletingProfilePost: true }
            },
            {
              type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS,
              payload: {
                isDeletingProfilePost: false,
                deletingProfilePostSuccess: true,
                postId: 1
              }
            }
          ]);
        });
      });

      it('should call a failed deleteUserProfilePost', async () => {
        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.reject({
            data: {}
          })
        );

        return store.dispatch<any>(deleteUserProfilePost(1)).then(() => {
          expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
          expect(mockedAxios.delete).toHaveBeenCalledWith('/posts/1');
          expect(store.getActions()).toEqual([
            {
              type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS,
              payload: { isDeletingProfilePost: true }
            },
            {
              type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED,
              payload: {
                isDeletingProfilePost: false,
                deletingProfilePostFailed: true
              }
            }
          ]);
        });
      });
    });
  });

  describe('UPDATING A POSTS ACTIONS', () => {
    it('should set isEditingPost to TRUE', () => {
      expect(isEditingPost()).toEqual({
        type: ProfilePostEnumTypes.IS_EDITING_POST,
        payload: {
          isEditingPost: true
        }
      });
    });

    it('should call isEditingPostFailed to set payload', () => {
      expect(isEditingPostFailed()).toEqual({
        type: ProfilePostEnumTypes.EDITING_POST_FAILED,
        payload: {
          isEditingPost: false,
          editingFailed: true
        }
      });
    });

    it('should call isEditingPostSuccess to set payload', () => {
      expect(
        isEditingPostSuccess({
          id: 1,
          title: 'iditid',
          body: 'iditid',
          createdAt: '12',
          updatedAt: '21'
        })
      ).toEqual({
        type: ProfilePostEnumTypes.EDITING_POST_SUCCESS,
        payload: {
          isEditingPost: false,
          editingSuccess: true,
          post: {
            id: 1,
            title: 'iditid',
            body: 'iditid',
            createdAt: '12',
            updatedAt: '21'
          }
        }
      });
    });

    it('should set failed payload', async () => {
      mockedAxios.put.mockImplementationOnce(() =>
        Promise.reject({
          data: {}
        })
      );

      return store.dispatch<any>(updateUserPost('1', 't', 'b')).then(() => {
        expect(mockedAxios.put).toHaveBeenCalledTimes(1);
        expect(mockedAxios.put).toHaveBeenCalledWith('/posts/1', { body: 'b', title: 't' });
        expect(store.getActions()).toEqual([
          {
            type: ProfilePostEnumTypes.IS_EDITING_POST,
            payload: { isEditingPost: true }
          },
          {
            type: ProfilePostEnumTypes.EDITING_POST_FAILED,
            payload: {
              isEditingPost: false,
              editingFailed: true
            }
          }
        ]);
      });
    });

    it('should set success payload', async () => {
      mockedAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            meta: {},
            payload: {
              post: {
                id: 1,
                title: 't',
                body: 'b',
                createdAt: '12',
                updatedAt: '21'
              }
            }
          }
        })
      );

      return store.dispatch<any>(updateUserPost('1', 't', 'b')).then(() => {
        expect(mockedAxios.put).toHaveBeenCalledTimes(1);
        expect(mockedAxios.put).toHaveBeenCalledWith('/posts/1', { title: 't', body: 'b' });
        expect(store.getActions()).toEqual([
          {
            type: ProfilePostEnumTypes.IS_EDITING_POST,
            payload: { isEditingPost: true }
          },
          {
            type: ProfilePostEnumTypes.EDITING_POST_SUCCESS,
            payload: {
              isEditingPost: false,
              editingSuccess: true,
              post: {
                id: 1,
                title: 't',
                body: 'b',
                createdAt: '12',
                updatedAt: '21'
              }
            }
          }
        ]);
      });
    });
  });
});
