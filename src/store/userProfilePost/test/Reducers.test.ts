import userProfilePost from '../Reducers';
import { userProfilePostInitialState } from 'models/Post/userProfilePostInitialState';
import { ProfilePostEnumTypes } from '../Types';

describe('User Profile Post Reducer Test', () => {
  it('should be equal to initial state', () => {
    expect(userProfilePost(undefined, {})).toEqual(userProfilePostInitialState);
  });

  it('should set isFetchingUserPosts to TRUE', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    expect(
      userProfilePost(state, {
        type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS,
        payload: {
          isFetchingUserPosts: true
        }
      })
    ).toEqual({
      isFetchingUserPosts: true,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set IS_FETCHING_USER_POSTS_FAILED type', () => {
    const state = {
      isFetchingUserPosts: true,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    expect(
      userProfilePost(state, {
        type: ProfilePostEnumTypes.IS_FETCHING_USER_POSTS_FAILED,
        payload: {
          isFetchingUserPosts: false,
          isFetchingUserPostsFailed: true
        }
      })
    ).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: true,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set PROFILE_POSTS type and set a posts', () => {
    const state = {
      isFetchingUserPosts: true,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    const p = [
      {
        id: 1,
        title: 'title',
        body: 'body',
        createdAt: '123',
        updatedAt: '123'
      }
    ];

    expect(
      userProfilePost(state, {
        type: ProfilePostEnumTypes.PROFILE_POSTS,
        payload: {
          isFetchingUserPosts: false,
          isFetchingUserPostsSuccess: true,
          posts: p
        }
      })
    ).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: true,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: p
    });
  });

  it('should set isCreatingPost to true', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    expect(
      userProfilePost(state, {
        type: ProfilePostEnumTypes.IS_CREATING_NEW_PROFILE_POSTS,
        payload: {
          isCreatingPost: true
        }
      })
    ).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: true,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set NEW_PROFILE_POSTS type and add a new post', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: true,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: [
        {
          id: 3,
          title: 't',
          body: 'b',
          createdAt: '2',
          updatedAt: '1'
        }
      ]
    };

    const p = {
      id: 4,
      title: 'title',
      body: 'body',
      createdAt: '123',
      updatedAt: '123'
    };

    const returnVal = userProfilePost(state, {
      type: ProfilePostEnumTypes.NEW_PROFILE_POSTS,
      payload: {
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: true,
        post: p
      }
    });

    expect(returnVal).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: true,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: [
        {
          id: 4,
          title: 'title',
          body: 'body',
          createdAt: '123',
          updatedAt: '123'
        },
        {
          id: 3,
          title: 't',
          body: 'b',
          createdAt: '2',
          updatedAt: '1'
        }
      ]
    });

    expect(returnVal.posts).toBeArray();
    expect(returnVal.posts).toBeArrayOfSize(2);
  });

  it('invoke set NEW_POST_FAILED type ', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: true,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    const returnVal = userProfilePost(state, {
      type: ProfilePostEnumTypes.NEW_POST_FAILED,
      payload: {
        isCreatingPost: false,
        creatingNewPostFailed: true,
        creatingNewPostSuccess: false
      }
    });

    expect(returnVal).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: true,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set DELETING_PROFILE_POSTS type ', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    const returnVal = userProfilePost(state, {
      type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS,
      payload: {
        isDeletingProfilePost: true
      }
    });

    expect(returnVal).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: true,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set DELETING_PROFILE_POSTS type ', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    };

    const returnVal = userProfilePost(state, {
      type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_FAILED,
      payload: {
        isDeletingProfilePost: false,
        deletingProfilePostFailed: true
      }
    });

    expect(returnVal).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: true,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: []
    });
  });

  it('invoke set DELETING_PROFILE_POSTS type ', () => {
    const state = {
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: false,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: [
        {
          id: 1,
          title: 'title',
          body: 'body',
          createdAt: '123',
          updatedAt: '123'
        },
        {
          id: 2,
          title: 't',
          body: 'b',
          createdAt: '2',
          updatedAt: '1'
        }
      ]
    };

    const returnVal = userProfilePost(state, {
      type: ProfilePostEnumTypes.DELETING_PROFILE_POSTS_SUCCESS,
      payload: {
        isDeletingProfilePost: false,
        deletingProfilePostSuccess: true,
        postId: 1
      }
    });

    expect(returnVal).toEqual({
      isFetchingUserPosts: false,
      isFetchingUserPostsSuccess: false,
      isFetchingUserPostsFailed: false,
      isCreatingPost: false,
      creatingNewPostFailed: false,
      creatingNewPostSuccess: false,
      isDeletingProfilePost: false,
      deletingProfilePostFailed: false,
      deletingProfilePostSuccess: true,
      isEditingPost: false,
      editingSuccess: false,
      editingFailed: false,
      posts: [
        {
          id: 2,
          title: 't',
          body: 'b',
          createdAt: '2',
          updatedAt: '1'
        }
      ]
    });
    expect(returnVal.posts).toBeArray();
    expect(returnVal.posts).toBeArrayOfSize(1);
  });

  describe('Editing a User Profile Posts', () => {
    it('invoke set IS_EDITING_POST type ', () => {
      const state = {
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: false,
        editingSuccess: false,
        editingFailed: false,
        posts: []
      };

      const returnVal = userProfilePost(state, {
        type: ProfilePostEnumTypes.IS_EDITING_POST,
        payload: {
          isEditingPost: true
        }
      });

      expect(returnVal).toEqual({
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: true,
        editingSuccess: false,
        editingFailed: false,
        posts: []
      });
    });

    it('invoke set EDITING_POST_SUCCESS type ', () => {
      const state = {
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: false,
        editingSuccess: false,
        editingFailed: false,
        posts: [
          {
            id: 1,
            title: 't',
            body: 'b',
            createdAt: '2',
            updatedAt: '1'
          }
        ]
      };

      const returnVal = userProfilePost(state, {
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

      expect(returnVal).toEqual({
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: false,
        editingSuccess: true,
        editingFailed: false,
        posts: [
          {
            id: 1,
            title: 'iditid',
            body: 'iditid',
            createdAt: '12',
            updatedAt: '21'
          }
        ]
      });
      expect(returnVal.posts[0].title).toEqual('iditid');
      expect(returnVal.posts[0].body).toEqual('iditid');
    });

    it('invoke set EDITING_POST_FAILED type ', () => {
      const state = {
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: false,
        editingSuccess: false,
        editingFailed: false,
        posts: []
      };

      const returnVal = userProfilePost(state, {
        type: ProfilePostEnumTypes.EDITING_POST_FAILED,
        payload: {
          isEditingPost: false,
          editingFailed: true
        }
      });

      expect(returnVal).toEqual({
        isFetchingUserPosts: false,
        isFetchingUserPostsSuccess: false,
        isFetchingUserPostsFailed: false,
        isCreatingPost: false,
        creatingNewPostFailed: false,
        creatingNewPostSuccess: false,
        isDeletingProfilePost: false,
        deletingProfilePostFailed: false,
        deletingProfilePostSuccess: false,
        isEditingPost: false,
        editingSuccess: false,
        editingFailed: true,
        posts: []
      });
    });
  });
});
