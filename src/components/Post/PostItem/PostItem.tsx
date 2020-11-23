import React, { FC, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { deleteUserProfilePost } from 'store/userProfilePost/Actions';
import PostForm from 'components/shared/PostForm/PostForm';
import { RootState } from 'store/root/root_reducer';
import { IPost } from 'interfaces/post';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import PostItemStyle from './PostItem.module.scss';

type PostItemProps = {
  post: IPost;
  showOptionsBtn: boolean;
  deletePost: (postId: number) => void;
};

// ? to allow delete post in feed or not?
// ! if we allow it then we have to query the owner of the post or include it in the API
// ! and check if the current user owns the posts in feed
export const PostItem: FC<PostItemProps> = ({ post, showOptionsBtn, deletePost }) => {
  const [toEditValue, setToEdit] = useState(false);

  const toDisplay = toEditValue ? (
    <PostForm post={post} toEdit handleToEdit={setToEdit} />
  ) : (
    <div className={PostItemStyle.box}>
      <h3 aria-roledescription="title">title: {post.title}</h3>
      <section>
        <p>body: {post.body}</p>
        <span>{post.user ? `by: ${post.user.username}` : ''}</span>
        {/* <span>{post.user ? `email: ${post.user.email}` : ''}</span> */}
      </section>
      {showOptionsBtn ? (
        <button aria-roledescription="delete post button" type="button" onClick={() => deletePost(Number(post.id))}>
          Delete
        </button>
      ) : null}
      {showOptionsBtn ? (
        <button aria-roledescription="edit post button" type="button" onClick={() => setToEdit(!toEditValue)}>
          Edit
        </button>
      ) : null}
    </div>
  );

  return <Fragment>{toDisplay}</Fragment>;
};

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    deletePost: (postId: number) => dispatch(deleteUserProfilePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
