import Cookies from 'js-cookie';
import { LoginSignupResponse } from 'interfaces/session';
import { onSuccessLoginOrSignUp } from 'store/session/Actions';
import { setupUserOnSuccessLoginORSignup } from 'store/user/Actions';

export function setUpSessionOnLoginAndSignup(response: LoginSignupResponse, dispatch: Function): void {
  const { payload, meta } = response;
  const { expToken } = meta;
  const { user, token } = payload;
  dispatch(onSuccessLoginOrSignUp(expToken));
  dispatch(setupUserOnSuccessLoginORSignup(user));
  Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, {
    expires: new Date(new Date().getTime() + Number(10800000)),
    secure: true
  });
}
