import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State } from 'interfaces/stateInterface';
import * as sessionSelectors from 'store/session/Selectors';

const ErrorMsg: FC = (props: any) => {
  const errMsg = props.errorMsg.errorMessage;
  const errKeys = Object.keys(errMsg);

  return (
    <div>
      <ul>
        {errKeys.map((errKey, i) => (
          <li key={i}>{errMsg[errKey]}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    errorMsg: sessionSelectors.authErrorsResponse(state)
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMsg);
