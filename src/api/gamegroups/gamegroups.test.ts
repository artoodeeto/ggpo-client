import axios from 'axios';
import {
  crateGameGroupAPI,
  deleteGameGroupAPI,
  followGameGroupAPI,
  getAGameGroupAPI,
  querySomeGameGroupsAPI,
  unfollowGameGroupAPI,
  updateGameGroupAPI
} from './gamegroups';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Game Group API Test', () => {
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

  describe('crateGameGroupAPI', () => {
    it('should successfully create a game group', async () => {
      mockedAxios.post.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await crateGameGroupAPI('foo', 'bar');
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/game-groups', { description: 'bar', title: 'foo' });
    });

    it('should failed get some of the posts ', async () => {
      mockedAxios.post.mockRejectedValueOnce({ response: { data: {} } });
      await expect(crateGameGroupAPI('foo', 'bar')).toReject();
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('/game-groups', { description: 'bar', title: 'foo' });
    });
  });

  describe('getAGameGroupAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await getAGameGroupAPI(1);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups/1');
    });

    it('should failed', async () => {
      mockedAxios.get.mockRejectedValueOnce({ response: { data: {} } });
      await expect(getAGameGroupAPI(1)).toReject();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups/1');
    });
  });

  describe('updateGameGroupAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.put.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await updateGameGroupAPI(1, 'foo', 'bar');
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/game-groups/1', { description: 'bar', title: 'foo' });
    });

    it('should failed', async () => {
      mockedAxios.put.mockRejectedValueOnce({ response: { data: {} } });
      await expect(updateGameGroupAPI(1, 'foo', 'bar')).toReject();
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/game-groups/1', { description: 'bar', title: 'foo' });
    });
  });

  describe('deleteGameGroupAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.delete.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await deleteGameGroupAPI(1);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/game-groups/1');
    });

    it('should failed', async () => {
      mockedAxios.delete.mockRejectedValueOnce({ response: { data: {} } });
      await expect(deleteGameGroupAPI(1)).toReject();
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/game-groups/1');
    });
  });

  describe('querySomeGameGroupsAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await querySomeGameGroupsAPI(1, 1);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups?offset=1&limit=1');
    });

    it('should failed', async () => {
      mockedAxios.get.mockRejectedValueOnce({ response: { data: {} } });
      await expect(querySomeGameGroupsAPI(1, 1)).toReject();
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith('/game-groups?offset=1&limit=1');
    });
  });

  describe('followGameGroupAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.put.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await followGameGroupAPI(1);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/game-groups/1/follow');
    });

    it('should failed', async () => {
      mockedAxios.put.mockRejectedValueOnce({ response: { data: {} } });
      await expect(followGameGroupAPI(1)).toReject();
      expect(mockedAxios.put).toHaveBeenCalledTimes(1);
      expect(mockedAxios.put).toHaveBeenCalledWith('/game-groups/1/follow');
    });
  });

  describe('unfollowGameGroupAPI', () => {
    it('should be successfully ', async () => {
      mockedAxios.delete.mockResolvedValueOnce({ data: { ...expectedResponse } });
      const response = await unfollowGameGroupAPI(1);
      expect(response).toEqual({ ...expectedResponse });
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/game-groups/1/unfollow');
    });

    it('should failed', async () => {
      mockedAxios.delete.mockRejectedValueOnce({ response: { data: {} } });
      await expect(unfollowGameGroupAPI(1)).toReject();
      expect(mockedAxios.delete).toHaveBeenCalledTimes(1);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/game-groups/1/unfollow');
    });
  });
});
