import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getAGameGroupAPI } from 'api/gamegroups/gamegroups';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import { setIsFollower } from 'store/gameGroupItem/Actions';
import { IGameGroup } from 'interfaces/gameGroup';
import GameItem from './GameItem/GameItem';

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

const mapStateToProps = (state: IState) => {
  return {
    isFollowing: state.gameGroupItem.gameGroupItem.isFollower
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setIsFollower: (isFollowing: boolean) => dispatch(setIsFollower(isFollowing))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameItemContainer));
