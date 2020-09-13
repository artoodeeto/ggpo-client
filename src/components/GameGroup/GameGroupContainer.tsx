import React, { Component, Fragment } from 'react';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import GameGroupList from './GameGroupList/GameGroupList';

class GameGroupContainer extends Component<any> {
  render() {
    return (
      <Fragment>
        <h1>GameGroups</h1>
        <GameGroupList />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGroupContainer);
