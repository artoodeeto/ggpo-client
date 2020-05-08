import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { State } from 'interfaces/stateInterface';

const Profile: FC = (props: any) => {
  useEffect(() => {
    console.log('PROFILE');
  });

  return (
    <div>
      <h1>PROFILE</h1>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
