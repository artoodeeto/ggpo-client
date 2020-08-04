import axios from 'axios';

export async function getUserPostsAPI(userID: number, offset: number, limit: number) {
  try {
    const res = await axios.get(`/users/posts/${userID}?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
