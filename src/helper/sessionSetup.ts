import Cookies from 'js-cookie';
import { ILoginSignupResponse } from 'interfaces/session';
import { onSuccessLoginOrSignUp } from 'store/session/Actions';
import { setupUserOnSuccessLoginORSignup } from 'store/user/Actions';

export function setUpSessionOnLoginAndSignup(response: ILoginSignupResponse, dispatch: Function): void {
  const { payload, meta } = response;
  const { expToken } = meta;
  const { user, token } = payload;
  dispatch(onSuccessLoginOrSignUp(expToken));
  dispatch(setupUserOnSuccessLoginORSignup(user));
  // create a function that will run a timer then run a dispatch to call logout for user and session.

  Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, {
    expires: new Date(new Date().getTime() + Number(expToken)),
    secure: true
  });
}
