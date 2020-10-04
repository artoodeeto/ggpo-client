import { getSomePostAPI, createPostAPI, updatePostAPI, deletePostAPI } from 'api/posts/posts';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Posts API Test', () => {
  const expectedResponse = {
    meta: {},
    payload: {}
  };
  beforeEach(() => {
    mockedAxios.get.mockReset();
    mockedAxios.post.mockReset();
    mockedAxios.put.mockReset();
    mockedAxios.delete.mockReset();
  });

  describe('getSomePostAPI', () => {
    it('should successfully get some of the posts ', async () => {
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await getSomePostAPI(1, 2);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/posts?offset=1&limit=2');
    });

    it('should failed get some of the posts ', async () => {
      mockedAxios.get.mockRejectedValueOnce({ response: { data: {} } });
      await expect(getSomePostAPI(1, 2)).toReject();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/posts?offset=1&limit=2');
    });
  });

  describe('createPostAPI', () => {
    it('successfully request', async () => {
      mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await createPostAPI('tt', 'bb');
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/posts', { body: 'bb', title: 'tt' });
    });

    it('should failed', async () => {
      mockedAxios.post.mockRejectedValueOnce({ response: { data: {} } });
      await expect(createPostAPI('tt', 'bb')).toReject();
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/posts', { body: 'bb', title: 'tt' });
    });
  });

  describe('updatePostAPI', () => {
    it('successfully request', async () => {
      mockedAxios.put.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await updatePostAPI('1', 'tt', 'bb');
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/posts/1', { body: 'bb', title: 'tt' });
    });

    it('should failed', async () => {
      mockedAxios.put.mockRejectedValueOnce({ response: { data: {} } });
      await expect(updatePostAPI('1', 'tt', 'bb')).toReject();
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/posts/1', { body: 'bb', title: 'tt' });
    });
  });

  describe('deletePostAPI', () => {
    it('successfully request', async () => {
      mockedAxios.delete.mockImplementationOnce(() => Promise.resolve({ data: { ...expectedResponse } }));
      const response = await deletePostAPI('12');
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/posts/12');
    });

    it('should failed', async () => {
      mockedAxios.delete.mockRejectedValueOnce({ response: { data: {} } });
      await expect(deletePostAPI('12')).toReject();
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/posts/12');
    });
  });
});
