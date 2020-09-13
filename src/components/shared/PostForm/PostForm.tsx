import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/stateInterface';
import { submitNewUserPost, updateUserPost } from 'store/userProfilePost/Actions';

const PostForm: FC<any> = (props: any) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const editHandler = () => {
    props.handleToEdit(false);
    props.onUpdatePost(props.postId, title, body);
  };

  useEffect(() => {
    if (props.toEdit) {
      setTitle(props.title);
      setBody(props.body);
    }
  }, [props.toEdit, props.title, props.body]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.toEdit ? editHandler() : props.onCreateNewPost(title, body);
        }}
      >
        <label htmlFor="title">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            value={body}
            placeholder="the body"
            name="body"
            id=""
            required
          ></textarea>
        </label>

        <input type="submit" value={props.toEdit ? 'Update' : 'Post'} />
      </form>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onCreateNewPost: (title: string, body: string) => dispatch(submitNewUserPost(title, body)),
    onUpdatePost: (id: string, title: string, body: string) => dispatch(updateUserPost(id, title, body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
