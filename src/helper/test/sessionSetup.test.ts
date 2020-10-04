import { setUpSessionOnLoginAndSignup } from 'helper/sessionSetup';
import Cookies from 'js-cookie';
import MockDate from 'mockdate';
import { AnyAction } from 'redux';
import { RootState } from 'store/root/root_reducer';

jest.mock('js-cookie');
const mockedCookies = Cookies as jest.Mocked<typeof Cookies>;

test('should set session cookie', () => {
  const res = {
    meta: {
      expToken: 10800000,
      issueDate: 3123
    },
    payload: {
      token: 'ahhhTOOOKEEEN',
      user: {
        id: 1,
        username: 'foo',
        email: 'adsf'
      }
    }
  };

  MockDate.set('8/2/2020');
  setUpSessionOnLoginAndSignup(res, () => {});
  expect(mockedCookies.set).toHaveBeenCalledTimes(1);
  expect(mockedCookies.set).toHaveBeenCalledWith(process.env.REACT_APP_COOKIE_NAME, 'ahhhTOOOKEEEN', {
    expires: new Date(new Date().getTime() + 10800000),
    sameSite: 'None',
    secure: true
  });
});
