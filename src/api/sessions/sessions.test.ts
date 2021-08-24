import axiosInstance from 'lib/axios.instance';
import axios from 'axios';
import { signUpAPI, loginAPI, logoutAPI, oAuthUserData } from 'api/sessions/sessions';

jest.mock('../../lib/axios.instance.ts');
jest.mock('axios');
const mockedAxe = axios as jest.Mocked<typeof axios>;

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('Session API Test', () => {
  beforeEach(() => {
    // mockedAxios.post.mockReset();
    mockedAxe.get.mockReset();
  });

  /**
   * @deprecated
   */
  describe.skip('On User Signup', () => {
    it('should success response on signup', async () => {
      const expectedResponse = {
        meta: {
          issueDate: '1581049918568',
          expToken: '10800000'
        },
        payload: {
          user: {
            id: 1,
            username: 'yousir1',
            email: 'yousir1@gmail.com'
          },
          token: 'JWT TOKEN'
        }
      };
      mockedAxios.post.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await signUpAPI({ username: 'yousir1', password: 'Password1!', email: 'yousir1@gmail.com' });
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/signup', {
        username: 'yousir1',
        password: 'Password1!',
        email: 'yousir1@gmail.com'
      });
    });

    it('should throw on failed signup', async () => {
      mockedAxios.post.mockRejectedValueOnce({ response: { data: {} } });
      await expect(signUpAPI({ username: 'yousir1', password: 'Password1!', email: 'yousir1@gmail.com' })).toReject();
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/signup', {
        username: 'yousir1',
        password: 'Password1!',
        email: 'yousir1@gmail.com'
      });
    });
  });

  /**
   * @deprecated
   */
  describe.skip('On User Login', () => {
    it('should success response on login', async () => {
      const expectedResponse = {
        meta: {
          issueDate: '1581049918568',
          expToken: '10800000'
        },
        payload: {
          user: {
            id: 1,
            username: 'yousir1',
            email: 'yousir1@gmail.com'
          },
          token: 'JWT TOKEN'
        }
      };
      mockedAxios.post.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await loginAPI({ password: 'Password1!', email: 'yousir1@gmail.com' });
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/login', {
        password: 'Password1!',
        email: 'yousir1@gmail.com'
      });
    });

    it('should throw on failed login', async () => {
      mockedAxios.post.mockRejectedValueOnce({ response: { data: {} } });
      await expect(loginAPI({ password: 'Password1!', email: 'yousir1@gmail.com' })).toReject();
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/login', {
        password: 'Password1!',
        email: 'yousir1@gmail.com'
      });
    });
  });

  describe('On User Logout', () => {
    it('should success response on logout', async () => {
      mockedAxe.get.mockResolvedValue({});
      await logoutAPI();
      expect(mockedAxe.get).toHaveBeenCalledTimes(1);
      expect(mockedAxe.get).toHaveBeenCalledWith('/logout');
    });

    it('should throw on logout', async () => {
      mockedAxe.get.mockRejectedValue({});
      await expect(logoutAPI()).toReject();
      expect(mockedAxe.get).toHaveBeenCalledTimes(1);
      expect(mockedAxe.get).toHaveBeenCalledWith('/logout');
    });
  });

  describe('On User login OAuth', () => {
    it('should success response on OAuth login', async () => {
      mockedAxe.get.mockResolvedValue({});
      await oAuthUserData();
      expect(mockedAxe.get).toHaveBeenCalledTimes(1);
      expect(mockedAxe.get).toHaveBeenCalledWith('/auth/user');
    });

    it('should throw on OAuth login', async () => {
      mockedAxe.get.mockRejectedValue({});
      await expect(oAuthUserData()).toReject();
      expect(mockedAxe.get).toHaveBeenCalledTimes(1);
      expect(mockedAxe.get).toHaveBeenCalledWith('/auth/user');
    });
  });
});
