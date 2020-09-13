import React, { FC, Fragment, useState } from 'react';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import PostItemStyle from './PostItem.module.scss';
import { deleteUserProfilePost } from 'store/userProfilePost/Actions';
import PostForm from 'components/shared/PostForm/PostForm';

// ? to allow delete post in feed or not?
// ! if we allow it then we have to query the owner of the post or include it in the API
// ! and check if the current user owns the posts in feed
export const PostItem: FC<any> = (props: any) => {
  let [toEditValue, setToEdit] = useState(false);

  const toDisplay = toEditValue ? (
    <PostForm
      postId={props.post.id}
      title={props.post.title}
      body={props.post.body}
      toEdit={true}
      handleToEdit={setToEdit}
    />
  ) : (
    <div className={PostItemStyle.box}>
      <h3>title: {props.post.title}</h3>
      <p>
        body: {props.post.body}
        <br />
        {props.post.user ? `by: ${props.post.user.username}` : ''}
        <br />
        {props.post.user ? `email: ${props.post.user.email}` : ''}
      </p>
      {props.showOptionsBtn ? <button onClick={() => props.deletePost(props.post.id)}>Delete</button> : ''}
      {props.showOptionsBtn ? <button onClick={() => setToEdit(!toEditValue)}>Edit</button> : ''}
    </div>
  );

  return <Fragment>{toDisplay}</Fragment>;
};

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deletePost: (postId: string) => dispatch(deleteUserProfilePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
