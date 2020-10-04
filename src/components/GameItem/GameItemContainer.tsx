import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getAGameGroupAPI } from 'api/gamegroups/gamegroups';
import { connect } from 'react-redux';
import { setIsFollower } from 'store/gameGroupItem/Actions';
import { IGameGroup } from 'interfaces/gameGroup';
import GameItem from './GameItem/GameItem';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';

interface RouteCustomParams {
  id: string;
}

export interface GameItemContainerProps extends RouteComponentProps<RouteCustomParams> {
  setIsFollower: (isFollowing: boolean) => void;
  isFollowing: boolean;
}

export interface GameItemContainerState {
  isFollower: boolean;
  theGameGroup: IGameGroup;
}

class GameItemContainer extends Component<GameItemContainerProps, GameItemContainerState> {
  constructor(props: GameItemContainerProps) {
    super(props);
    this.state = {
      isFollower: false,
      theGameGroup: {
        id: 0,
        description: '',
        title: '',
        createdAt: '',
        updatedAt: ''
      }
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const { payload } = await getAGameGroupAPI(Number(id));
      const { isFollower, gameGroup } = payload;
      this.setState({ isFollower, theGameGroup: gameGroup });
      this.props.setIsFollower(isFollower);
    } catch (error) {
      // TODO: add error handling here
      console.log(error);
    }
  }

  render() {
    // the background color here should change if the game is "hot" like people are tagging this game or talking about it. something like that lols
    return (
      <div>
        <GameItem isFollower={this.props.isFollowing} gameItem={this.state.theGameGroup} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isFollowing: state.gameGroupItem.gameGroupItem.isFollower
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    setIsFollower: (isFollowing: boolean) => dispatch(setIsFollower(isFollowing))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameItemContainer));
