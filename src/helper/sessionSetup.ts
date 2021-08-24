import Cookies from 'js-cookie';
import { onSuccessLoginOrSignUp } from 'store/session/Actions';
import { setupUserOnSuccessLoginORSignup } from 'store/user/Actions';
import { ISessionAPIResponse } from 'interfaces/api/sessions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';

export function setUpSessionOnLoginAndSignup(
  response: ISessionAPIResponse,
  dispatch: ThunkDispatch<RootState, {}, AnyAction>
): void {
  const { payload, meta } = response;
  const { expToken, issueDate } = meta;
  const { user, token } = payload;
  dispatch(onSuccessLoginOrSignUp(Number(expToken), Number(issueDate)));
  dispatch(setupUserOnSuccessLoginORSignup(user));
  Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, {
    expires: new Date(new Date().getTime() + Number(expToken)),
    secure: true,
    path: '/',
    sameSite: 'None'
  });
}
