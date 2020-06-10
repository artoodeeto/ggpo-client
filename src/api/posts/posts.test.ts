import { getSomePostAPI } from 'api/posts/posts';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Session API Test', () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  describe('On Get Some Posts', () => {
    it('should successfully get some of the posts ', async () => {
      const expectedResponse = {
        meta: {},
        payload: {}
      };
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await getSomePostAPI(1, 2);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/posts/query/some/posts?offset=1&limit=2');
    });
  });
});
