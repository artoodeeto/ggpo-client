import Cookies from 'js-cookie';
import { logoutSession } from 'store/session/Actions';
import { logoutUser } from 'store/user/Actions';

export function autoLogoutAfterTokenExpire(dispatch: Function, timer: number): void {
  setTimeout(() => {
    dispatch(logoutUser());
    dispatch(logoutSession());
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  }, timer);
}
