import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { RootState } from 'store/root/root_reducer';
import { ThunkDispatch } from 'redux-thunk';
import GameGroupList from './GameGroupList/GameGroupList';

interface GameGroupContainerProps {}

interface GameGroupContainerState {}
class GameGroupContainer extends Component<GameGroupContainerProps, GameGroupContainerState> {
  render() {
    return (
      <Fragment>
        <h1>GameGroups</h1>
        <GameGroupList />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGroupContainer);
