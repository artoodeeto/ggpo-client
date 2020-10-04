import axios from 'axios';
import { ICreatePostResponse, IGetSomePostResponse, IUpdatePostResponse } from 'interfaces/api/posts';

export async function createPostAPI(title: string, body: string): Promise<ICreatePostResponse> {
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

export async function updatePostAPI(postId: number, title: string, body: string): Promise<IUpdatePostResponse> {
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

// 204 no content
export async function deletePostAPI(postId: number): Promise<void> {
  try {
    const res = await axios.delete(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getSomePostAPI(offset: number, limit: number): Promise<IGetSomePostResponse> {
  try {
    const res = await axios.get(`/posts/query/some/posts?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
