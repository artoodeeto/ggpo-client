import Cookies from 'js-cookie';
import { ILoginSignupResponse } from 'interfaces/session';
import { logoutSession } from 'store/session/Actions';
import { logoutUser } from 'store/user/Actions';

export function autoLogoutAfterTokenExpire(response: ILoginSignupResponse, dispatch: Function): void {
  const { meta } = response;
  const { expToken } = meta;

  setTimeout(() => {
    console.log('kwagmire');
    dispatch(logoutUser());
    dispatch(logoutSession());
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  }, Date.now() + 60000 - Date.now());
}
