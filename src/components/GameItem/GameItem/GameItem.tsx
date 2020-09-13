import React, { FC } from 'react';
import { IGameGroup } from 'interfaces/gameGroup';
import FollowAndUnFollowBtn from 'components/shared/FollowAndUnfollowButton/FollowAndUnfollowButton';
import { connect } from 'react-redux';
import { followGameGroupItem, unFollowGameGroupItem } from 'store/gameGroupItem/Actions';

type GameItemProps = {
  isFollower: boolean;
  gameItem: IGameGroup;
  handleToFollow: (id: number) => void;
  handleToUnfollow: (id: number) => void;
};

const GameItem: FC<GameItemProps> = ({ isFollower, gameItem, handleToFollow, handleToUnfollow }) => {
  return (
    <div>
      <pre>{JSON.stringify(gameItem, null)}</pre>
      <h1>Game: {gameItem.title}</h1>
      <p>
        <strong>Description:</strong> {gameItem.description}
      </p>
      <FollowAndUnFollowBtn
        btnName={isFollower ? 'Unfollow' : 'Follow'}
        onClickTriggerFn={() => {
          isFollower ? handleToUnfollow(gameItem.id) : handleToFollow(gameItem.id);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    handleToFollow: (id: number) => dispatch(followGameGroupItem(id)),
    handleToUnfollow: (id: number) => dispatch(unFollowGameGroupItem(id))
  };
};

export default connect(null, mapDispatchToProps)(GameItem);
