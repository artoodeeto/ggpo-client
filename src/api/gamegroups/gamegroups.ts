import axios from 'axios';
import {
  ICreateGameGroupResponse,
  IGetSomeGameGroupResponse,
  IReadGameGroupResponse,
  IUpdateGameGroupResponse
} from 'interfaces/api/gameGroups';

export async function crateGameGroupAPI(title: string, description: string): Promise<ICreateGameGroupResponse> {
  try {
    const res = await axios.post('/game-groups', {
      title,
      description
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getAGameGroupAPI(gameGroupId: number): Promise<IReadGameGroupResponse> {
  try {
    const res = await axios.get(`/game-groups/${gameGroupId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateGameGroupAPI(
  gameGroupId: number,
  title: string,
  description: string
): Promise<IUpdateGameGroupResponse> {
  try {
    const res = await axios.put(`/game-groups/${gameGroupId}`, {
      title,
      description
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function deleteGameGroupAPI(gameGroupId: number): Promise<void> {
  try {
    const res = await axios.delete(`/game-groups/${gameGroupId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function querySomeGameGroupsAPI(offset: number, limit: number): Promise<IGetSomeGameGroupResponse> {
  try {
    const res = await axios.get(`/game-groups?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function followGameGroupAPI(gameGroupId: number): Promise<void> {
  try {
    const res = await axios.put(`/game-groups/${gameGroupId}/follow`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function unfollowGameGroupAPI(gameGroupId: number): Promise<void> {
  try {
    const res = await axios.delete(`/game-groups/${gameGroupId}/unfollow`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
