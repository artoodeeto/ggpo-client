import axios from 'axios';

export async function getSomePostAPI(offset: number, limit: number) {
  try {
    const res = await axios.get(`/posts/query/some/posts?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
