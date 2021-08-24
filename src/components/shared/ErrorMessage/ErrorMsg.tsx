import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/root/root_reducer';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { authErrorsResponse } from 'store/session/Selectors';
import { ILoginSignupFailed } from 'interfaces/session';

type ErrorMsgProps = {
  errorMsg: ILoginSignupFailed;
};

const ErrorMsg: FC<ErrorMsgProps> = ({ errorMsg }) => {
  const errMsg = errorMsg.error.errors[0];
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

const mapStateToProps = (state: RootState) => {
  return {
    errorMsg: authErrorsResponse(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMsg);
