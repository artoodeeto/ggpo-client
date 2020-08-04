import axios from 'axios';

export async function getSomePostAPI(offset: number, limit: number) {
  try {
    const res = await axios.get(`/posts/query/some/posts?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function createPostAPI(title: string, body: string) {
  try {
    const res = await axios.post('/posts', {
      title,
      body
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updatePostAPI(postId: string, title: string, body: string) {
  try {
    const res = await axios.put(`/posts/${postId}`, {
      title,
      body
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function deletePostAPI(postId: string) {
  try {
    const res = await axios.delete(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
