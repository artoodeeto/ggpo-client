import React, { FC, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { deleteUserProfilePost } from 'store/userProfilePost/Actions';
import PostForm from 'components/shared/PostForm/PostForm';
import { RootState } from 'store/root/root_reducer';
import { IPost } from 'interfaces/post';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fullDateParser } from 'helper/dateParser';
import Style from './PostItem.module.scss';

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
    <div className={Style.PostItem}>
      <section className={Style.PostItemFigContainer}>
        <figure className={Style.FigContainer}>
          <img
            src="https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Gravatar%20API_1.png?itok=ayIeuL1k"
            alt="user avatar"
          />
          <figcaption className={Style.FigCaption}>
            <span aria-label={`user ${post.user?.username}`}>{post?.user?.username}</span>
            <span aria-label="data">{fullDateParser(post.createdAt)}</span>
          </figcaption>
        </figure>
      </section>

      <section className={Style.PostItemPostContainer}>
        <h3 aria-roledescription="title">{post.title}</h3>
        <p aria-roledescription="body">{post.body}</p>
      </section>

      <section>
        {/* <span>{post.user ? `email: ${post.user.email}` : ''}</span> */}
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
      </section>
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
