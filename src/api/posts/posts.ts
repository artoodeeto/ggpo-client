import axios from 'axios';

export async function getSomePost(offset: number, limit: number) {
  try {
    const res = await axios.get(`/posts/query/some/posts?offset=${offset}&limit=${limit}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    // throw error.response.data;
  }
}
