import React, { Fragment, useEffect } from 'react';
import GameGroupItem from '../GameGroupItem/GameGroupItem';
import { getSomeGameGroups } from 'store/gameGroup/Actions';
import { IState } from 'interfaces/stateInterface';
import { connect } from 'react-redux';
import { gameGroupsStore } from 'store/gameGroup/Selectors';
import { IGameGroup } from 'interfaces/gameGroup';

const GameGroupList = ({ queryGameGroups, gameGroups }: any) => {
  useEffect(() => {
    queryGameGroups(0, 5);
  }, [queryGameGroups]);

  return (
    <Fragment>
      <h4>GAMES</h4>
      <div>
        <ul>
          {gameGroups.map((gg: IGameGroup) => (
            <GameGroupItem key={gg.id} id={gg.id} title={gg.title} desc={gg.description} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    gameGroups: gameGroupsStore(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    queryGameGroups: (offset: number, limit: number) => dispatch(getSomeGameGroups(offset, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGroupList);
