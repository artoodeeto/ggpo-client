import React, { FC, Fragment, useEffect } from 'react';
import GameGroupItem from '../GameGroupItem/GameGroupItem';
import { getSomeGameGroups } from 'store/gameGroup/Actions';
import { connect } from 'react-redux';
import { gameGroupsStore } from 'store/gameGroup/Selectors';
import { IGameGroup } from 'interfaces/gameGroup';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';

type GameGroupListProps = {
  gameGroups: IGameGroup[];
  queryGameGroups: (offset: number, limit: number) => void;
};

const GameGroupList: FC<GameGroupListProps> = ({ queryGameGroups, gameGroups }) => {
  useEffect(() => {
    queryGameGroups(0, 5);
  }, [queryGameGroups]);

  return (
    <Fragment>
      <h4>GAMES</h4>
      <div>
        <ul>
          {gameGroups.map((gg: IGameGroup) => (
            <GameGroupItem key={gg.id} gameGroup={gg} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    gameGroups: gameGroupsStore(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {
    queryGameGroups: (offset: number, limit: number) => dispatch(getSomeGameGroups(offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGroupList);
