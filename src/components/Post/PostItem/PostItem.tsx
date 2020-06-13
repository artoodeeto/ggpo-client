import React, { FC } from 'react';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import PostItemStyle from './PostItem.module.scss';

export const PostItem: FC<any> = (props: any) => {
  return (
    <div className={PostItemStyle.box}>
      <h3>title: {props.post.title}</h3>
      <p>
        body: {props.post.body}
        <br />
        by: {props.post.user.username}
        <br />
        email: {props.post.user.email}
      </p>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
