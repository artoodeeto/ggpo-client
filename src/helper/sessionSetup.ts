import Cookies from 'js-cookie';
import { ILoginSignupResponse } from 'interfaces/session';
import { onSuccessLoginOrSignUp } from 'store/session/Actions';
import { setupUserOnSuccessLoginORSignup } from 'store/user/Actions';

export function setUpSessionOnLoginAndSignup(response: ILoginSignupResponse, dispatch: Function): void {
  const { payload, meta } = response;
  const { expToken, issueDate } = meta;
  const { user, token } = payload;
  dispatch(onSuccessLoginOrSignUp(Number(expToken), Number(issueDate)));
  dispatch(setupUserOnSuccessLoginORSignup(user));
  Cookies.set(process.env.REACT_APP_COOKIE_NAME as string, token, {
    expires: new Date(new Date().getTime() + Number(expToken)),
    secure: true,
    sameSite: 'None'
  });
}
