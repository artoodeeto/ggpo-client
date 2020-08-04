import { autoLogoutAfterTokenExpire } from 'helper/autoLogoutAfterTokenExp';

jest.useFakeTimers();

test('should call timer', () => {
  autoLogoutAfterTokenExpire(() => {}, 1000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
});
