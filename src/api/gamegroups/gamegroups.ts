import axios from 'axios';
import {
  ICreateGameGroupResponse,
  IGetSomeGameGroupResponse,
  IReadGameGroupResponse,
  IUpdateGameGroupResponse
} from 'interfaces/api/gameGroups';

export async function crateGameGroupAPI(title: string, description: string): Promise<ICreateGameGroupResponse> {
  try {
    const res = await axios.post('/game_groups', {
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
    const res = await axios.get(`/game_groups/${gameGroupId}`);
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
    const res = await axios.put(`/game_groups/${gameGroupId}`, {
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
    const res = await axios.delete(`/game_groups/${gameGroupId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function querySomeGameGroupsAPI(offset: number, limit: number): Promise<IGetSomeGameGroupResponse> {
  try {
    const res = await axios.get(`/game_groups/query/some/game_groups?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function followGameGroupAPI(gameGroupId: number): Promise<void> {
  try {
    const res = await axios.put(`/game_groups/follow/${gameGroupId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function unfollowGameGroupAPI(gameGroupId: number): Promise<void> {
  try {
    const res = await axios.delete(`/game_groups/unfollow/${gameGroupId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
