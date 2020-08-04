import axios from 'axios';
import { getUserPostsAPI } from './users';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Users API Test', () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  describe('getUserPostsAPI', () => {
    it('should successfully get some of the posts ', async () => {
      const expectedResponse = {
        meta: {},
        payload: {}
      };
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await getUserPostsAPI(1, 2, 3);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/users/posts/1?offset=2&limit=3');
    });
  });
});
