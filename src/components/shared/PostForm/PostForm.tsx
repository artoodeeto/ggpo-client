import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitNewUserPost, updateUserPost } from 'store/userProfilePost/Actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { IPost } from 'interfaces/post';

type PostFormProps = {
  post?: IPost;
  toEdit?: boolean;
  handleToEdit?: (val: boolean) => void;
  onCreateNewPost: (title: string, body: string) => void;
  onUpdatePost: (id: number, title: string, body: string) => void;
};

const PostForm: FC<PostFormProps> = ({ post, toEdit, handleToEdit, onCreateNewPost, onUpdatePost }) => {
  const [titleState, setTitle] = useState('');
  const [bodyState, setBody] = useState('');

  const editHandler = () => {
    if (handleToEdit) handleToEdit(false);
    if (post) onUpdatePost(post.id, titleState, bodyState);
  };

  useEffect(() => {
    if (toEdit && post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [toEdit, post]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toEdit ? editHandler() : onCreateNewPost(titleState, bodyState);
        }}
      >
        <label htmlFor="title">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={titleState}
            placeholder="your title"
            type="text"
            name="title"
            id=""
            required
          />
        </label>

        <label htmlFor="body">
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={bodyState}
            placeholder="the body"
            name="body"
            id=""
            required
          ></textarea>
        </label>

        <input type="submit" value={toEdit ? 'Update' : 'Post'} />
        <button
          onClick={() => {
            if (handleToEdit) handleToEdit(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    onCreateNewPost: (title: string, body: string) => dispatch(submitNewUserPost(title, body)),
    onUpdatePost: (id: number, title: string, body: string) => dispatch(updateUserPost(id, title, body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
