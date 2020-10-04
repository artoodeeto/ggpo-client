import axios from 'axios';
import { IUserPostsResponse } from 'interfaces/api/users';

export async function getUserPostsAPI(userID: number, offset: number, limit: number): Promise<IUserPostsResponse> {
  try {
    const res = await axios.get(`/users/${userID}/posts?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
