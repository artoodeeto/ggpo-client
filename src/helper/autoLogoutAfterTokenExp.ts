import Cookies from 'js-cookie';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'store/root/root_reducer';
import { logoutSession } from 'store/session/Actions';
import { logoutUser } from 'store/user/Actions';

export function autoLogoutAfterTokenExpire(dispatch: ThunkDispatch<RootState, {}, AnyAction>, timer: number): void {
  setTimeout(() => {
    dispatch(logoutUser());
    dispatch(logoutSession());
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME as string);
  }, timer);
}
